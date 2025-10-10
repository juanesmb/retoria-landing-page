"use client";

import Image from "next/image";
import DemoSection from "@/components/common/DemoSection";
import AppFooter from "@/components/layout/AppFooter";
import AppHeader from "@/components/layout/AppHeader";
import SpeechAnalysisSection from "@/components/landing/SpeechAnalysisSection";
import FeatureCard from "@/components/landing/FeatureCard";
import WorkflowSection from "@/components/landing/WorkflowSection";
import {FEATURES, type FeatureItem} from "@/lib/constants";

export default function LandingPage() {
    const iconFor = (key: FeatureItem["iconKey"]) => {
        switch (key) {
            case "edit":
                return (
                    <svg className="w-8 h-8" style={{color: "#0f37e6"}} fill="none" stroke="currentColor"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                );
            case "clock":
                return (
                    <svg className="w-8 h-8" style={{color: "#0f37e6"}} fill="none" stroke="currentColor"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                );
            case "megaphone":
                return (
                    <svg className="w-8 h-8" style={{color: "#0f37e6"}} fill="none" stroke="currentColor"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M12 6l7 4v3a10 10 0 11-14 0V10l7-4zm0 0v8"/>
                    </svg>
                );
            default:
                return null;
        }
    };


    return (
        <div className="min-h-screen bg-white">
            <AppHeader/>

            <div className="mx-auto max-w-6xl px-6 py-10 pt-20">
                {/* Hero Section */}
                <div
                    className="text-center space-y-8 mt-10"
                    style={{
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        opacity: 0,
                        transform: 'translateY(20px)'
                    }}
                >
                    <h1 className="text-6xl font-bold text-gray-900 sm:text-8xl">
                        <span style={{color: "#0f37e6"}}>Master Your Voice,</span>
                        <br/>
                        Command the Room
                    </h1>
                    <p className="text-xl sm:text-2xl max-w-3xl mx-auto" style={{color: "#141417"}}>
                        Your all-in-one AI speech coach. <br/> From idea to delivery.
                    </p>
                </div>

                {/* Demo Section */}
                <DemoSection/>

                {/* Workflow Section */}
                <WorkflowSection/>
            </div>

            {/* Speech Analysis Animated Section (full-bleed) */}
            <div className="rounded-2xl mx-5 my-2 overflow-hidden shadow-xl">
                <SpeechAnalysisSection/>
            </div>

            {/* Logo Section */}
            <div className="flex justify-center items-center py-16">
                <div
                    className="flex justify-center items-center"
                    style={{
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        opacity: 0,
                        transform: 'translateY(20px)'
                    }}
                >
                    <Image
                        src="/logo.png"
                        alt="Retoria Logo"
                        width={200}
                        height={200}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="rounded-2xl p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Title on the left */}
                        <div
                            className="flex-1 text-center lg:text-left"
                            style={{
                                animation: 'fadeInUp 0.6s ease-out forwards',
                                opacity: 0,
                                transform: 'translateY(20px)'
                            }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Build the clarity, pace, and presence that
                                <span
                                    className="inline-block px-1 py-1 rounded-full font-semibold"
                                    style={{
                                        background: "#E6530F",
                                        color: "#fff"
                                    }}
                                >
                                    captivates
                                </span>
                                audiences.
                            </h2>
                        </div>

                        {/* Features on the right */}
                        <div className="flex-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {FEATURES.map((feature) => (
                                <FeatureCard
                                    key={feature.description}
                                    icon={iconFor(feature.iconKey)}
                                    description={feature.description} title={""}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Demo Section (full-bleed) */}
            <div className="mt-10 text-white" style={{backgroundColor: "#0f37e6"}}>
                <div
                    className="text-center py-12"
                    style={{
                        animation: 'fadeInUp 0.6s ease-out forwards',
                        opacity: 0,
                        transform: 'translateY(20px)'
                    }}
                >
                    <h2 className="text-5xl font-bold text-white mb-4 mt-15">Ready to Level-Up Your Delivery?</h2>
                    <p className="text-indigo-100">Schedule a demo with our team today!</p>
                    <DemoSection variant="indigo" className="py-6"/>
                </div>
                {/* Curved white divider */}
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"
                     className="block w-full h-8 md:h-12 lg:h-30 text-white">
                    <path fill="currentColor" d="M0 0 Q 720 140 1440 0 V80 H0 Z"/>
                </svg>
            </div>

            <AppFooter/>
        </div>
    );
}


