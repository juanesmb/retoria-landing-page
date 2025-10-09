"use client";

import { useState } from "react";

interface DemoSectionProps {
    className?: string;
    variant?: "light" | "indigo"; // indigo matches a dark indigo-600 section background
}

export default function DemoSection({ className = "", variant = "light" }: DemoSectionProps) {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDuplicate, setIsDuplicate] = useState(false);

    const handleDemoSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setIsDuplicate(false);

        try {
            console.log('Submitting demo signup for email:', email);

            const response = await fetch('/api/demo-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            const responseData = await response.json();
            // console.log('Response data:', responseData);

            if (!response.ok) {
                // console.error('API Error:', responseData);

                // Handle duplicate email case
                if (responseData.isDuplicate && responseData.code === 'DUPLICATE_EMAIL') {
                    setIsDuplicate(true);
                    return;
                }

                throw new Error(responseData.details || responseData.error || 'Failed to sign up for demo');
            }

            // console.log('Demo signup successful:', responseData);
            setIsSubmitted(true);
        } catch (error) {
            // console.error('Demo signup error:', error);
            alert(`Failed to sign up for demo: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setIsDuplicate(false);
        setEmail("");
    };

    const isIndigo = variant === "indigo";

    const containerClasses = isIndigo
        ? `bg-transparent rounded-none shadow-none p-8 max-w-xl mx-auto ${className}`
        : `bg-white mt-5 rounded-2xl shadow-none p-6 max-w-xl mx-auto ${className}`;

    const subtleText = isIndigo ? "text-indigo-100" : "text-gray-600";
    const strongText = isIndigo ? "text-white" : "text-gray-900";
    const linkText = isIndigo ? "text-white underline" : "text-[#0f37e6] hover:text-indigo-700";
    const inputClasses = isIndigo
        ? "w-full px-3 py-2 border border-transparent rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-sm bg-white text-gray-900 placeholder:text-gray-500"
        : "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white text-gray-900 placeholder:text-gray-500";
    const buttonClasses = isIndigo
        ? "w-full bg-white text-[#0f37e6] py-2 px-4 rounded-lg font-semibold hover:bg-indigo-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        : "w-full bg-[#0f37e6] text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 focus:ring-2 focus:ring-[#0f37e6] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm";

    return (
        <div 
          className={containerClasses}
          style={{
            animation: 'fadeInUpSmooth 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
            opacity: 0,
            transform: 'translateY(30px) scale(0.95)'
          }}
        >
                {!isSubmitted && !isDuplicate ? (
                    <form onSubmit={handleDemoSubmit} className="space-y-3">
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                                className={inputClasses}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={buttonClasses}
                        >
                            {isLoading ? "Starting..." : "Join Waitlist"}
                        </button>
                    </form>
                ) : isDuplicate ? (
                    <div className="space-y-3">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                            </svg>
                        </div>
                        <h3 className={`text-lg font-semibold ${strongText}`}>You already registered!</h3>
                        <p className={`${subtleText} text-sm`}>
                            This email is already registered for our demo. We&apos;ll send you access details shortly.
                        </p>
                        <button
                            onClick={resetForm}
                            className={`${linkText} font-medium text-sm`}
                        >
                            Try with a different email
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                        <h3 className={`text-lg font-semibold ${strongText}`}>Email Received!</h3>
                        <p className={`${subtleText} text-sm`}>
                            Thanks for your interest. We&apos;ll send you access details shortly.
                        </p>
                        <button
                            onClick={resetForm}
                            className={`${linkText} font-medium text-sm`}
                        >
                            Try with a different email
                        </button>
                    </div>
                )}
        </div>
    );
}