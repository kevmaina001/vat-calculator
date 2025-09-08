'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Header() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <span className="text-white font-bold text-lg">%</span>
              </div>
              <div className="transition-colors duration-300 group-hover:text-blue-600">
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600">Global VAT</span>
                <span className="text-sm text-gray-500 block leading-none group-hover:text-blue-500">Calculator</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm px-3 py-2 rounded-lg hover:bg-blue-50 relative overflow-hidden group"
            >
              <span className="relative z-10">Calculator</span>
              <div className="absolute inset-0 bg-blue-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 flex items-center px-3 py-2 rounded-lg hover:bg-blue-50 relative overflow-hidden">
                <span className="relative z-10">Countries</span>
                <svg className="ml-1 w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute inset-0 bg-blue-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Europe</div>
                  <Link href="/vat/germany" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇩🇪 Germany (19% / 7%)
                  </Link>
                  <Link href="/vat/france" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇫🇷 France (20% / 10% / 5.5%)
                  </Link>
                  <Link href="/vat/finland" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇫🇮 Finland (24% / 14%)
                  </Link>
                  <Link href="/vat/es" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇪🇸 Spain (21% / 10%)
                  </Link>
                  <Link href="/vat/it" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇮🇹 Italy (22% / 10%)
                  </Link>
                  
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2">Africa</div>
                  <Link href="/vat/ke" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇰🇪 Kenya (16% / 8%)
                  </Link>
                  <Link href="/vat/za" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇿🇦 South Africa (15%)
                  </Link>
                  <Link href="/vat/ng" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇳🇬 Nigeria (7.5%)
                  </Link>
                  
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-gray-100 mt-2">Americas</div>
                  <Link href="/vat/ca" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇨🇦 Canada (5% GST)
                  </Link>
                  <Link href="/vat/mx" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇲🇽 Mexico (16% IVA)
                  </Link>
                  <Link href="/vat/br" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🇧🇷 Brazil (18%)
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Guides
            </Link>

            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              FAQ
            </Link>

            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 0a9 9 0 019-9 9 9 0 00-9 9" />
                </svg>
                <span className="text-sm font-medium">EN</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a href="/en" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">🇺🇸 English</a>
                  <a href="/de" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">🇩🇪 Deutsch</a>
                  <a href="/fr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">🇫🇷 Français</a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300 hover:scale-105 transform"
            >
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-slide-down">
            <div className="space-y-1">
              <Link 
                href="/" 
                onClick={handleMobileMenuClose}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-sm transform active:scale-95"
              >
                Calculator
              </Link>
              <Link 
                href="/blog" 
                onClick={handleMobileMenuClose}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-sm transform active:scale-95"
              >
                Guides
              </Link>
              <Link 
                href="/faq" 
                onClick={handleMobileMenuClose}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-sm transform active:scale-95"
              >
                FAQ
              </Link>
              <Link 
                href="/about" 
                onClick={handleMobileMenuClose}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-sm transform active:scale-95"
              >
                About
              </Link>
              
              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="px-3 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">Popular Countries</div>
                <Link 
                  href="/vat/germany" 
                  onClick={handleMobileMenuClose}
                  className="block px-3 py-2 text-sm text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 hover:scale-105 transform active:scale-95"
                >
                  🇩🇪 Germany
                </Link>
                <Link 
                  href="/vat/france" 
                  onClick={handleMobileMenuClose}
                  className="block px-3 py-2 text-sm text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 hover:scale-105 transform active:scale-95"
                >
                  🇫🇷 France
                </Link>
                <Link 
                  href="/vat/finland" 
                  onClick={handleMobileMenuClose}
                  className="block px-3 py-2 text-sm text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 hover:scale-105 transform active:scale-95"
                >
                  🇫🇮 Finland
                </Link>
                <Link 
                  href="/vat/ke" 
                  onClick={handleMobileMenuClose}
                  className="block px-3 py-2 text-sm text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 hover:scale-105 transform active:scale-95"
                >
                  🇰🇪 Kenya
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}