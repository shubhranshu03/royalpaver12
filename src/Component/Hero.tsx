'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/home1.jpg',
    '/home2.jpg',
    '/home3.png',
    '/home4.jpg',
    '/home5.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Fade Effect */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`Hero background ${idx + 1}`}
            fill
            className="object-cover"
            priority={idx === 0}
            quality={90}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-4xl ml-10 sm:ml-16 md:ml-20 lg:ml-24">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Royal Paver – Strong Foundations,{' '}
            <span className="block mt-1">Elegant Designs</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 italic mb-6 sm:mb-8 font-light">
            Premium Paver Blocks, Tiles & Precast Solutions
          </p>

          {/* Explore Button */}
          <Link
            href="/products"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 sm:px-6 py-2 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Explore Our Products
          </Link>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              idx === currentImage
                ? 'bg-white w-8 sm:w-10'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;