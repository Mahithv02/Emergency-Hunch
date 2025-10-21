'use client';


import React, { useState, useEffect } from "react";

const ScrollBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the total scrollable height
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate scroll percentage
      const totalScrollableHeight = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / totalScrollableHeight) * 100;

      setScrollProgress(scrollPercentage);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call once to set initial value
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-2 bg-gray-100 z-50 shadow-sm">
      <div
        className="h-full bg-navy transition-all duration-400 ease-out shadow-lg relative overflow-hidden"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};
export default ScrollBar;