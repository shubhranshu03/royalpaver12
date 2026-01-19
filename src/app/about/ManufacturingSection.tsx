'use client';

import Image from 'next/image';
import { Package, Settings, Droplets, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const ManufacturingSection = () => {
  const process = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Raw Material',
      description: 'High-grade cement, aggregates, and pigments sourced from certified suppliers'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Molding',
      description: 'Advanced hydraulic machines for precise shape formation and consistency'
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Curing',
      description: 'Controlled water curing for 14-21 days ensuring maximum strength'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Finishing',
      description: 'Surface treatment and color application for perfect aesthetics'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Check',
      description: 'Rigorous testing for strength, durability, and dimensional accuracy'
    }
  ];

  const facilities = [
    { image: '/factory1.jpg', title: 'Production Unit' },
    { image: '/factory2.jpg', title: 'Quality Lab' },
    { image: '/factory3.jpg', title: 'Storage Area' }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            State-of-the-art infrastructure and stringent quality control ensure every product meets the highest standards of excellence
          </p>
        </div>

        {/* Process Flow */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Card */}
                <div className="bg-white rounded-lg p-6 text-center h-full shadow hover:shadow-lg transition-shadow">
                  <div className="inline-flex bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on mobile, shown on desktop between cards) */}
                {idx < process.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Images */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Infrastructure
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-gray-900 text-center">
                    {facility.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Quality Assurance
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">IS 15658:2006</div>
              <p className="text-gray-700">Certified Standards</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700">Quality Tested</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;