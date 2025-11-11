import React from "react";

interface PracticeNowButtonProps {
    href?: string;
    className?: string;
    children?: React.ReactNode;
    variant?: "default" | "inverse";
}

export default function PracticeNowButton({
    href = "https://app.retoria.coach",
    className = "",
    children = "Practice Now",
    variant = "default",
}: PracticeNowButtonProps) {
    const isInverse = variant === "inverse";
    
    return (
        <a
            href={href}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:opacity-90 active:translate-y-[1px] shadow-lg ${className}`}
            style={{
                backgroundColor: isInverse ? "#ffffff" : "#0f37e6",
                color: isInverse ? "#0f37e6" : "#ffffff",
            }}
        >
            {children}
        </a>
    );
}

