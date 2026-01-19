'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Paver Blocks',
      description: 'Durable and versatile paver blocks perfect for driveways, pathways, and outdoor spaces. Available in various colors and patterns.',
      image: '/e1.jpg',
      link: '/products/paver-blocks'
    },
    {
      id: 2,
      name: 'Chequered Tiles',
      description: 'Classic chequered design tiles that add elegance to any space. Ideal for both residential and commercial applications.',
      image: '/e2.jpg',
      link: '/products/chequered-tiles'
    },
    {
      id: 3,
      name: 'Poles',
      description: 'High-quality precast concrete poles for fencing, lighting, and structural support. Built to last with superior strength.',
      image: '/e3.jpg',
      link: '/products/poles'
    },
    {
      id: 4,
      name: 'Grass Paver Blocks',
      description: 'Eco-friendly grass pavers that combine greenery with stability. Perfect for parking areas and sustainable landscaping.',
      image: '/e4.jpg',
      link: '/products/grass-pavers'
    },
    {
      id: 5,
      name: 'Precast Items',
      description: 'Custom precast concrete solutions including slabs, walls, and specialized components for construction projects.',
      image: '/e5.jpg',
      link: '/products/precast-items'
    },
    {
      id: 6,
      name: 'Designer Tiles',
      description: 'Premium designer tiles with intricate patterns and finishes. Transform your spaces with our exclusive tile collection.',
      image: '/e6.jpg',
      link: '/products/designer-tiles'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of paver blocks, tiles, and precast solutions crafted for durability and elegance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 line-clamp-3">
                  {product.description}
                </p>

                {/* View Details Button */}
                <Link
                  href={product.link}
                  className="inline-block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2.5 sm:py-3 rounded-md transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <Link
            href="/products"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;