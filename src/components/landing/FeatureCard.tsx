"use client";

import type {ReactNode} from "react";

type FeatureCardProps = {
    icon: ReactNode;
    title: string;
    description: ReactNode;
};

export default function FeatureCard({icon, title, description}: FeatureCardProps) {
    return (
        <div
            className="rounded-2xl p-4 text-center space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
                transform: 'translateY(20px)'
            }}
        >
            <div className="w-16 h-8 flex items-center justify-center mx-auto">
                {icon}
            </div>
            <p style={{color: "#141417"}}>{description}</p>
        </div>
    );
}


