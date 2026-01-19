'use client';

import Image from 'next/image';
import Link from 'next/link';

const AboutHero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about.png"
          alt="Royal Paver Factory"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl ml-4 sm:ml-6 lg:ml-8">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Royal Paver
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 font-light">
            Crafting Strength. Designing Beauty.
          </p>

          {/* CTA Button */}
          <Link
            href="/products"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-lg transition-colors"
          >
            View Our Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;