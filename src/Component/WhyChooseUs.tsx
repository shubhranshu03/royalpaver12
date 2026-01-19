'use client';

import { Shield, Sparkles, DollarSign, Truck } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: 'Durable & Weather Resistant',
      description: 'Our products are built to withstand harsh weather conditions and heavy usage, ensuring long-lasting performance.'
    },
    {
      id: 2,
      icon: <Sparkles className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: 'Modern Designs & Styles',
      description: 'Contemporary aesthetics meet functionality with our wide range of elegant patterns and finishes for every project.'
    },
    {
      id: 3,
      icon: <DollarSign className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: 'Affordable Prices',
      description: 'Premium quality at competitive prices. We deliver exceptional value without compromising on standards.'
    },
    {
      id: 4,
      icon: <Truck className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: 'On-Time Delivery',
      description: 'Reliable logistics and efficient supply chain management ensure your materials arrive exactly when you need them.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose Royal Paver?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We combine quality craftsmanship with customer satisfaction to deliver excellence in every project
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                {/* Icon Container */}
                <div className="flex justify-center mb-5 sm:mb-6">
                  <div className="bg-yellow-500 text-white p-3 sm:p-4 rounded-full group-hover:bg-yellow-600 transition-colors duration-300 group-hover:scale-105 transform">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Checkmark Badge */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
            <p className="text-base sm:text-lg font-semibold">
              Ready to start your project?
            </p>
            <p className="text-xs sm:text-sm mt-1 opacity-90">
              Contact us today for a free consultation and quote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;