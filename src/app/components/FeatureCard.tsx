"use client";

import React from "react";
import { FeatureCardProps } from "../types";
  
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  delay = 0,
  title,
}) => {
  return (
    <div
      className="group cursor-pointer"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s both`,
      }}
    >
      <div className="bg-navy rounded-3xl p-12 flex flex-col items-center justify-center h-48 w-48 transition-all duration-300 hover:scale-105  ">
        <span className="material-symbols-outlined text-white text-5xl group-hover:scale-110 transition-transform duration-300 mb-4">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-white text-center mt-2">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default FeatureCard;
