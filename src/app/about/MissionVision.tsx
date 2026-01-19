'use client';

import { Target, Eye, Award } from 'lucide-react';

const MissionVision = () => {
  const sections = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Our Mission',
      description: 'To deliver premium quality concrete products that combine durability with aesthetic excellence, providing innovative solutions for every construction need while maintaining uncompromising standards of quality and customer satisfaction.',
      color: 'blue'
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'Our Vision',
      description: 'To be India\'s most trusted and preferred paver brand, recognized for exceptional quality, sustainable practices, and innovation in concrete manufacturing, transforming landscapes across the nation.',
      color: 'green'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Our Values',
      description: 'Quality – Excellence in every product. Sustainability – Eco-friendly manufacturing. Innovation – Continuous improvement. Integrity – Honest relationships. Customer Focus – Your satisfaction is our priority.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mission, Vision & Values
          </h2>
          <p className="text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-full mb-6 transition-all duration-300 ${getColorClasses(section.color)}`}>
                <div className="group-hover:text-white transition-colors">
                  {section.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;