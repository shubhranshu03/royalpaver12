'use client';

import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  review: string;
  avatar: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Jaipur',
      review: 'Excellent quality paver blocks for our driveway. The team was professional and delivered on time. Very satisfied with the durability and finish.',
      avatar: '/p1.jpg'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi',
      review: 'Beautiful chequered tiles for our garden pathway. Royal Paver exceeded our expectations with their product quality and customer service.',
      avatar: '/p8.jpg'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Jaipur',
      review: 'Used their grass pavers for our farmhouse parking area. Eco-friendly and looks amazing. Highly recommend Royal Paver.',
      avatar: '/p3.jpg'
    },
    {
      id: 4,
      name: 'Saurav Verma',
      location: 'Udaipur',
      review: 'Great experience working with Royal Paver. Their precast poles are strong and well-finished. Perfect for our residential complex.',
      avatar: '/p4.jpg'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Jaipur',
      review: 'Professional service and high-quality products. The paver blocks have transformed our parking area beautifully.',
      avatar: '/p5.jpg'
    },
    {
      id: 6,
      name: 'Meera Jain',
      location: 'Ajmer',
      review: 'Highly satisfied with the tiles we purchased. Great variety of colors and designs. The installation guidance was also very helpful.',
      avatar: '/p6.jpg'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Client Reviews
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg"
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">
                &quot;{testimonial.review}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;