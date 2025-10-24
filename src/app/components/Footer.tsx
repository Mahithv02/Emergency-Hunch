'use client';

import React from 'react';
import Link from 'next/link';

type FooterLink = {
  label: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  { label: 'About us', href: '/about' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms and Conditions', href: '/terms' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1628] text-white py-12 px-4 sm:px-6 lg:px-8 mt-0">
      <div className="max-w-7xl mx-auto">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-sky-blue text-lg md:text-xl font-light transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Email */}
        <div className="text-center">
          <p className="text-white text-lg md:text-xl font-light">
            contact us -{' '}
            <a 
              href="mailto:emergencyhunch@gmail.com"
              className="hover:text-sky-blue transition-colors duration-300"
            >
              emergencyhunch@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;