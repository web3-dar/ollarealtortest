import React from 'react';
import { FaHandshake, FaHome, FaThumbsUp, FaAward } from 'react-icons/fa'; // Icons for each topic

const WhyPatronizeUs: React.FC = () => {
  const reasons = [
    {
      icon: <FaHandshake size={30} />,
      title: 'Trusted Expertise',
      description: 'With years of industry experience, we provide professional advice and insights for informed decisions.',
    },
    {
      icon: <FaHome size={30} />,
      title: 'Wide Range of Properties',
      description: 'We offer diverse property listings to suit every budget and preference.',
    },
    {
      icon: <FaThumbsUp size={30} />,
      title: 'Customer Satisfaction',
      description: 'Our priority is delivering exceptional service and building lasting relationships.',
    },
    {
      icon: <FaAward size={30} />,
      title: 'Award-Winning Service',
      description: 'We are recognized for our excellence and commitment to quality in real estate services.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-thin text-[#c65da2] mb-4 text-center">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon Wrapper */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#c65da2] text-white mb-4">
              {reason.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
            {/* Description */}
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPatronizeUs;
