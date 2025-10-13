"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ProcessCardProps = {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
};

export default function ProcessCard({ 
  step, 
  title, 
  description, 
  icon, 
  delay = 0 
}: ProcessCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const current = cardRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="relative bg-white rounded-2xl p-6 text-center space-y-4 transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg"
      style={{
        animation: isVisible ? 'fadeInUpSmooth 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
      }}
    >
      {/* Icon */}
      <div className="w-16 h-16 mx-auto flex items-center justify-center">
        {icon}
      </div>
      
      {/* Title with Step Number */}
      <div className="flex items-center justify-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {step}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      {/* Description */}
      <p className="text-sm leading-relaxed" style={{color: "#141417"}}>{description}</p>
    </div>
  );
}
