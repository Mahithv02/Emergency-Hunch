'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Course', href: '/course' },
  { label: 'Resident Takeaway', href: '/resident-takeaway' },
  { label: 'Procedures', href: '/procedures' },
  { label: 'Blog', href: '/blog' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-6">
        {/* Main header container */}
        <div className="flex items-center justify-between py-4">
          {/* Logo Position */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Emergency Hunch Logo"
              width={160}
              height={160}
              priority
              className="rounded-md"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-900 hover:text-red-700 font-medium text-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-900 hover:text-red-700 font-medium text-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
