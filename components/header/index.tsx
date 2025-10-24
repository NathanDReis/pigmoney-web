'use client';

import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Como funciona', href: '/how-works' },
    { name: 'Investimentos', href: '/investments' },
    { name: 'Ferramentas', href: '/tools' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="./" className="flex items-center">
              <img 
                src="logo-horizontal.png" 
                alt="Pig Money" 
                className="h-12 sm:h-16 md:h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-[#ff6b57] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            
            <button className="ml-2 px-4 lg:px-6 py-2 rounded-md text-sm lg:text-base cursor-pointer font-medium bg-black text-white hover:bg-gray-700 transition-colors duration-300">
              Baixe App
            </button>
            
            <button className="px-4 lg:px-6 py-2 rounded-md text-sm lg:text-base font-medium cursor-pointer bg-[#ff6b57] text-white hover:bg-[#ffada2] transition-colors duration-300">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#ff6b57] hover:bg-gray-100 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Menu principal"
            >
              {isOpen ? (
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-[#ff6b57] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 space-y-2">
              <button 
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-black text-white hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Baixe App
              </button>
              
              <button 
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-[#ff6b57] text-white hover:bg-[#ffada2] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
