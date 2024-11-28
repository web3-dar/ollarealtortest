import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaInstagram } from 'react-icons/fa';  // Import icons from react-icons

// Assuming the image is available
import ceoImage from '../../assets/ceo.jpg';  // Replace with the actual path to the image

const AboutCEO: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16" style={{ width: '80%' }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 h-full">
          <img
            src={ceoImage}
            alt="CEO"
            className="rounded-lg shadow-xl w-full h-full object-cover"
          />
        </div>

        {/* About CEO Section */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-between h-full">
          <h2 className="text-3xl font-thin text-[#c65da2] mb-4">GET TO KNOW</h2>
          <h3 className="text-4xl font-serif text-gray-800 mb-4">Olatoye Olalekan</h3>
          <p className="text-lg text-gray-600 mb-6">
          Meet <span className='text-[#c65da2] font-semibold'>Olatoye Olalekan</span>, your trusted real estate expert with years of experience in the Nigerian property market. Passionate about helping clients find their perfect homes or investment opportunities, Olatoye provides personalized guidance every step of the way. His commitment to excellence ensures you make informed decisions with confidence.

          </p>
          
          {/* Social Icons Section */}
          <div className="flex justify-center md:justify-start gap-6 mb-6">
            <a href="mailto:ceoollarealtoor@yahoo.com" className="text-[#000000] hover:text-[#c65da2]">
              <FaEnvelope size={24} />
            </a>
            <a href="tel:+2348165920748" className="text-[#000000] hover:text-[#c65da2]">
              <FaPhoneAlt size={24} />
            </a>
            <a href="https://ng.linkedin.com/in/olaitan-olatoye-0204261b4" target="_blank" rel="noopener noreferrer" className="text-[#000000] hover:text-[#c65da2]">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.instagram.com/ollarealtor_ltd/" target="_blank" rel="noopener noreferrer" className="text-[#000000] hover:text-[#c65da2]">
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Learn More Button */}
          <button
            className="bg-transparent border-2 border-[#ccc] text-[#c55ea3] px-6 py-2 rounded-md hover:bg-[#fff] hover:border-[#000] hover:text-[#c55ea3] transition duration-300 w-[300px]"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCEO;
