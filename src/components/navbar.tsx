'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'] 
});

export default function Navbar() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mapping services ke routes
  const portfolioItems = [
    { name: 'UI & UX', path: '/ui-ux' },
    { name: 'Illustration', path: '/illustration' },
    { name: 'Graphic Design', path: '/graphic-design' },
    { name: 'Product Design', path: '/product-design' },
    { name: 'Photography', path: '/photography' },
    { name: '3D Animation', path: '/3d-animation' },
    { name: 'Social Media Design', path: '/social-media-design' },
    { name: 'Logo Design', path: '/logo-design' }
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPortfolioOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsPortfolioOpen(false);
    }, 200);
  };

  return (
    <>
      {/* Backdrop Overlay with Fade Animation */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300 ${
          isPortfolioOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onMouseEnter={handleMouseLeave}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>

          {/* Menu */}
          <div className="flex items-center gap-8">
            <a 
              href="/"
              className={`${poppins.className} text-base font-medium hover:opacity-70 transition-opacity`}
              style={{ color: '#660B05' }}
            >
              About Me
            </a>

            {/* Portfolio with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`${poppins.className} text-base font-medium hover:opacity-70 transition-opacity flex items-center gap-1`}
                style={{ color: '#660B05' }}
              >
                Portfolio
                <svg 
                  className={`w-4 h-4 transition-transform ${isPortfolioOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu with Fade & Slide Animation */}
              <div 
                className={`absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl py-3 z-50 transition-all duration-300 origin-top ${
                  isPortfolioOpen 
                    ? 'opacity-100 visible translate-y-0 scale-100' 
                    : 'opacity-0 invisible -translate-y-2 scale-95'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {portfolioItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className={`${poppins.className} block px-5 py-3 hover:bg-[#660B05]/5 transition-all duration-200 font-medium rounded-lg mx-2`}
                    style={{ color: '#660B05' }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}