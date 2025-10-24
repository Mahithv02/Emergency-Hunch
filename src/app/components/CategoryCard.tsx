"use client";

import React from 'react';

interface CategoryCardProps {
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-72 h-60 bg-navy rounded-[3rem] cursor-pointer hover:shadow-lg transition-shadow duration-100 flex items-center justify-center"
    >
      {icon && <div className="text-white text-6xl">{icon}</div>}
      {title && <p className="text-white text-xl font-medium">{title}</p>}
    </div>
  );
};

// Demo component showing the grid layout
const CategoryCardDemo: React.FC = () => {
  const categories = Array(6).fill(null);

  return (
    <div className="p-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {categories.map((_, index) => (
          <CategoryCard
            key={index}
            onClick={() => console.log(`Card ${index + 1} clicked`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCardDemo;