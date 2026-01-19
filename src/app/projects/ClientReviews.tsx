import React from 'react';

const ClientReviews: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Review Card */}
        <div className="relative">
          {/* Decorative Quote Mark */}
          <div className="absolute -top-6 -left-4 md:-left-8 text-green-500 opacity-20">
            <svg
              className="w-24 h-24 md:w-32 md:h-32"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.829-2.829c-.39.39-.926.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.488 0 1.024.196 1.414.586l2.829-2.829c-1.086-1.085-2.586-1.757-4.243-1.757zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.829-2.829c-.39.39-.926.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.488 0 1.024.196 1.414.586l2.829-2.829c-1.086-1.085-2.586-1.757-4.243-1.757z" />
            </svg>
          </div>

          {/* Review Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-3xl transition-shadow duration-500">
            {/* Star Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light italic">
                &quot;Royal Paver gave our parking area a premium finish — highly satisfied. 
                On-time delivery and great quality tiles for our institute. Their professionalism 
                and attention to detail exceeded our expectations.&quot;
              </p>
            </blockquote>

            {/* Client Info */}
            <div className="flex flex-col items-center">
              {/* Client Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-2xl font-bold">RP</span>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                Rajesh Patel
              </h4>
              <p className="text-gray-600 mb-6">
                Facilities Manager, Tech Institute
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -top-4 -right-8 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-2xl"></div>
        </div>

        {/* Stats or Trust Badges */}
        <div className="grid grid-cols-3 gap-6 mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-3xl font-bold text-green-600 mb-2">500+</p>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-3xl font-bold text-green-600 mb-2">1000+</p>
            <p className="text-gray-600 text-sm">Projects Done</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-3xl font-bold text-green-600 mb-2">4.9★</p>
            <p className="text-gray-600 text-sm">Avg Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;