 'use client';

import Image from 'next/image';

const AboutUs = () => {
  const solutions = [
    'Residential Homes & Villas',
    'Driveways & Parking Areas',
    'Commercial & Industrial Spaces',
    'Gardens & Public Parks',
    'Educational Institutions'
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            About Us
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                With over <strong>15 years of excellence</strong> in the industry, <strong>Royal Paver</strong> has 
                grown into one of Jaipur&apos;s most trusted manufacturers and suppliers of premium concrete products. 
                From interlocks and paver blocks to chequered tiles, poles, and precast solutions – our products 
                are crafted to deliver both strength and elegance.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our state-of-the-art manufacturing facility is designed to produce durable, eco-friendly blocks 
                and tiles in a wide range of colors, textures, and sizes. Each piece is engineered with precision 
                and finished with care to meet the diverse requirements of our clients.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Royal Paver, we take pride in supplying products that not only withstand the test of time but 
                also enhance the beauty of every space – be it luxury homes, commercial complexes, factories, 
                institutions, or large-scale government projects.
              </p>
              
              <p className="text-gray-800 font-semibold text-lg mb-6">
                We don&apos;t just build pavers, we build <strong className="text-yellow-500">foundations for a stronger 
                and more beautiful tomorrow</strong>.
              </p>
            </div>

            {/* Solutions List */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solutions For All
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-3 text-xl">▸</span>
                    <span className="text-lg">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/home3.png"
                alt="Royal Paver Projects"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;