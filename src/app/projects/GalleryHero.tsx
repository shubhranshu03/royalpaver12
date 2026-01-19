'use client';

import Image from 'next/image';

const GalleryHero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/gallary2.png"
          alt="Royal Paver Projects Gallery"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-4xl mx-auto pl-4 sm:pl-6 lg:pl-8">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Crafting Beautiful Spaces with Royal Paver
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
            Explore our latest projects and stunning installations that redefine elegance and durability
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;