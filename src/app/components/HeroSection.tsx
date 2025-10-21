'use client';

import React from 'react';
import FeatureCard from './FeatureCard';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-sky-blue overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute top-20 left-10 opacity-20">
        <div className="text-white text-9xl">+</div>
      </div>
      
      <div className="absolute bottom-20 right-20 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-white">
          <path
            d="M100 20 L120 60 L140 40 L150 80 L170 70 L180 120"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div> */}
{/* 
      <div className="absolute bottom-40 right-40 opacity-30">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="30" cy="60" r="25" fill="white" opacity="0.5" />
          <circle cx="60" cy="60" r="25" fill="white" opacity="0.5" />
          <circle cx="90" cy="60" r="25" fill="white" opacity="0.5" />
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-8">
        {/* Hero Text */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            Learn Emergency Medicine -<br />
            <span className="block mt-2">Fast, Free, Focused</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className={`bg-white bg-opacity-70 text-navy px-12 py-4 rounded-full text-xl font-semibold 
               transition-all duration-300 hover:bg-navy hover:text-white 
               hover:scale-110 shadow-lg backdrop-blur-sm`}>
              Start Free Course
            </button>
            <button className={`bg-white bg-opacity-70 text-navy px-12 py-4 rounded-full text-xl font-semibold 
               transition-all duration-300 hover:bg-navy hover:text-white 
               hover:scale-110 shadow-lg backdrop-blur-sm`} >
              Browser Videos
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-20">
          <FeatureCard icon="workspace_premium" title="Premium Features" delay={0.2} />
          <FeatureCard icon="menu_book" title="Notes" delay={0.4} />
          <FeatureCard icon="videocam" title="Video Lectures" delay={0.6} />
          <FeatureCard icon="description" title="In-Depth Articles" delay={0.8} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
