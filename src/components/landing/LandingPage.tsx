"use client";

import DemoSection from "@/components/common/DemoSection";
import AppFooter from "@/components/layout/AppFooter";
import AppHeader from "@/components/layout/AppHeader";
import SpeechAnalysisSection from "@/components/landing/SpeechAnalysisSection";
import FeatureCard from "@/components/landing/FeatureCard";
import WorkflowSection from "@/components/landing/WorkflowSection";
import { FEATURES, type FeatureItem } from "@/lib/constants";

export default function LandingPage() {
  const iconFor = (key: FeatureItem["iconKey"]) => {
    switch (key) {
      case "edit":
        return (
          <svg className="w-8 h-8" style={{ color: "#0f37e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case "users":
        return (
          <svg className="w-8 h-8" style={{ color: "#0f37e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "bolt":
        return (
          <svg className="w-8 h-8" style={{ color: "#0f37e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "clock":
        return (
          <svg className="w-8 h-8" style={{ color: "#0f37e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "checkchart":
        return (
          <svg className="w-8 h-8" style={{ color: "#0f37e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M7 15l4-4 3 3 5-5" />
          </svg>
        );
      case "megaphone":
        return (
          <svg className="w-8 h-8" style={{ color: "#0f37e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6l7 4v3a10 10 0 11-14 0V10l7-4zm0 0v8" />
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
            <span style={{ color: "#0f37e6" }}>Master Your Voice,</span>
            <br />
            Command the Room
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto" style={{ color: "#141417" }}>
            Your all-in-one AI speech coach. <br/> From idea to delivery.
          </p>
        </div>

        {/* Demo Section */}
        <DemoSection/>

        {/* Workflow Section */}
        <WorkflowSection />

        {/* Features Section */}
        <div className="mt-5 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-xl p-12">
          <div 
            className="text-center mb-5"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enter Retoria:
              <span style={{ color: "#0f37e6" }}> Your AI Speech Coach </span>
            </h2>
            <p className="text-gray-600">Discover the features that make Retoria the ultimate speech coaching platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={iconFor(feature.iconKey)}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

        {/* Speech Analysis Animated Section (full-bleed) */}
        <div className="rounded-2xl mx-5 my-2 overflow-hidden shadow-xl">
          <SpeechAnalysisSection />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Comparison Table Section */}
        <div className="mt-5 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-xl p-8 max-w-6xl mx-auto transition-transform duration-300 hover:scale-105">
          <div 
            className="text-center mb-12"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why
              <span style={{ color: "#0f37e6" }}> Retoria </span>
              Stands Out
            </h2>
            <p className="text-gray-600">See how we compare to generic AI tools</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-left py-4 px-6 font-semibold" style={{ color: "#0f37e6" }} >Retoria</th>
                  <th className="text-left py-4 px-6 font-semibold text-orange-500">Generic AI Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-600">End-to-End Coaching</td>
                  <td className="py-4 px-6">
                    <span className="flex items-center" style={{ color: "#0f37e6" }}>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Idea → Delivery
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex items-center text-orange-500">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Practice only
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-600">AI Roleplay Scenarios</td>
                  <td className="py-4 px-6">
                    <span className="flex items-center" style={{ color: "#0f37e6" }}>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Interactive
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex items-center text-orange-500">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      None
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-600">Feedback Depth</td>
                  <td className="py-4 px-6">
                    <span className="flex items-center" style={{ color: "#0f37e6" }}>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Filler, clarity, pace, tone
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex items-center text-orange-500">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Limited metrics
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-600">Speechwriting Support</td>
                  <td className="py-4 px-6">
                    <span className="flex items-center" style={{ color: "#0f37e6" }}>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Draft & polish scripts
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex items-center text-orange-500">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Not included
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-600">Confidence Tools</td>
                  <td className="py-4 px-6">
                    <span className="flex items-center" style={{ color: "#0f37e6" }}>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Progress tracking
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex items-center text-orange-500">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Minimal
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-600">Multi-Channel Training</td>
                  <td className="py-4 px-6">
                    <span className="flex items-center" style={{ color: "#0f37e6" }}>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Stage, meetings, calls
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex items-center text-orange-500">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Narrow use case
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Final Demo Section (full-bleed) */}
      <div className="mt-10 text-white" style={{ backgroundColor: "#0f37e6" }}>
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
            <DemoSection variant="indigo" className="py-6" />
          </div>
          {/* Curved white divider */}
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" className="block w-full h-8 md:h-12 lg:h-30 text-white">
              <path fill="currentColor" d="M0 0 Q 720 140 1440 0 V80 H0 Z" />
          </svg>
      </div>

      <AppFooter />
    </div>
  );
}


