import React from 'react';
import img from '../../assets/ceo_zoom.jpg'
import { Link } from 'react-router-dom';
const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-500">About Ollarealtor</h2>
        <p className="mt-4 text-sm text-gray-600">
          Welcome to Ollarealtor! Your trusted partner in finding the perfect home or investment property.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="text-center">
          <img src={img} alt="Team Member 1" className="mx-auto rounded-full h-40 w-40 object-cover" />
          <h3 className="mt-6 text-2xl font-semibold text-gray-800">Olatoye Olalekan</h3>
          <p className="mt-2 text-gray-500">Founder & CEO</p>
          <p className="mt-4 text-gray-600">
           <span className='font-semibold text-[#c55ea3]'>Olla Realtor LTD </span> is a real estate Development and listings Agency with presence in 4 continents including Africa, Europe, Middle East and America.
          Founded by OlaitanOlatoyeOlalekan, a Nigerian businessman, Philanthropist and real estate entrepreneur. In 2019, he established his company built on a business model that is client-focused, incorporating great building techniques, fresh designs and forward-thinking IT innovations. Out of this was born the three divisions including Construction & Development, Home Design, and Real Estate.
          </p>
        </div>

       
      </div>

      <div className="mt-16 bg-white py-12 px-8 sm:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-extrabold text-gray-900">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-600">
            At Ollarealtor, our mission is simple: to provide a seamless and stress-free real estate experience for every client.
            We are committed to understanding your needs and providing solutions tailored to your goals. Whether you're buying, selling, or investing, we're here to help every step of the way.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
        <p className="mt-2 text-lg text-gray-600">Have questions or want to schedule a consultation? We're here to help!</p>
        
        <Link to="/contact">
          <button className="mt-4 bg-[#c55ea3] text-white py-2 px-4 rounded-md hover:bg-[#a1508c]">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
