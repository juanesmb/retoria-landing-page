"use client";

import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-4 text-center space-y-4 transition-transform duration-300 hover:scale-105">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}


