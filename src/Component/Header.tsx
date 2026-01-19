'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    'Paver Blocks',
    'Chequered Tiles',
    'Poles',
    'Grass Pavers',
    'Precast Items'
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/royal.png"
                alt="Royal"
                width={300}
                height={225}
                className="h-24 md:h-28 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-300 font-bold text-lg transition-colors">
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="text-white hover:text-blue-300 font-bold text-lg transition-colors flex items-center"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
                <svg className="w-5 h-5 ml-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProductsOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white/90 rounded-md py-2 shadow-lg"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  {products.map((product, idx) => (
                    <Link
                      key={idx}
                      href={`/products/${product.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-4 py-2 text-black hover:bg-blue-50 hover:text-blue-600 transition-colors font-semibold"
                    >
                      {product}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects" className="text-white hover:text-blue-300 font-bold text-lg transition-colors">
              Gallery / Projects
            </Link>

            <Link href="/about" className="text-white hover:text-blue-300 font-bold text-lg transition-colors">
              About Us
            </Link>

            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md font-bold text-lg transition-colors"
            >
              Contact / Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-300 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden pb-4 bg-black/70 absolute top-full left-0 right-0">
          <Link
            href="/"
            className="block py-2 text-white hover:text-blue-300 font-bold text-lg px-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Products Dropdown */}
          <div>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center justify-between w-full py-2 text-white hover:text-blue-300 font-bold text-lg px-4"
            >
              Products
              <svg
                className={`w-5 h-5 text-white transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isProductsOpen && (
              <div className="pl-4 space-y-2 mt-2 px-4">
                {products.map((product, idx) => (
                  <Link
                    key={idx}
                    href={`/products/${product.toLowerCase().replace(/ /g, '-')}`}
                    className="block py-1 text-white hover:text-blue-300 font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {product}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/projects"
            className="block py-2 text-white hover:text-blue-300 font-bold text-lg px-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery / Projects
          </Link>

          <Link
            href="/about"
            className="block py-2 text-white hover:text-blue-300 font-bold text-lg px-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="block mt-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-md font-bold text-lg text-center mx-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact / Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;