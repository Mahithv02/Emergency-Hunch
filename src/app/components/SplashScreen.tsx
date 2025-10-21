'use client';

import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  logoUrl?: string;
  duration?: number;
  onComplete?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ 
  logoUrl = '/logo.svg',
  duration = 2500,
  onComplete 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out animation before hiding
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, duration - 500);

    // Hide splash screen after duration
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-gradient-to-br from-sky-400 to-blue-900 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo Container with Animation */}
        <div className="relative animate-logoAppear">
          {/* Pulsing Circle Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-white rounded-full opacity-20 animate-pulse"></div>
          </div>
          
          {/* Logo Image */}
          <div className="relative z-10 bg-white rounded-full p-8 shadow-2xl">
            <img
              src={logoUrl}
              alt="Logo"
              className="w-32 h-32 object-contain animate-logoZoom"
              onError={(e) => {
                // Fallback if image doesn't load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback text logo */}
            <div className="hidden text-6xl font-bold text-blue-900">
              Logo
            </div>
          </div>
        </div>

        {/* Loading Text (Optional) */}
        <p className="mt-8 text-white text-xl font-semibold animate-fadeInUp">
          Loading...
        </p>

        {/* Loading Spinner */}
        <div className="mt-6 flex justify-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      <style>{`
        @keyframes logoAppear {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes logoZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-logoAppear {
          animation: logoAppear 1s ease-out;
        }

        .animate-logoZoom {
          animation: logoZoom 2s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.5s backwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;