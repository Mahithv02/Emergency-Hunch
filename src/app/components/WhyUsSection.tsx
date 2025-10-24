'use client';

import React from 'react';
// import Image from 'next/image';

const WhyUsSection: React.FC = () => {
  return (
    <section className="bg-sky-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-12">
          Why Us
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-900 leading-relaxed text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/doctor-patient.jpg"
              alt="Doctor consulting with patient"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Full Width Text */}
        {/* <div className="mt-8">
          <p className="text-lg md:text-xl text-gray-900 leading-relaxed text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default WhyUsSection;