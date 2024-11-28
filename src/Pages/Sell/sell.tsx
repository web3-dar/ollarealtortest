import React from 'react';
import { FaHome, FaMapMarkerAlt, FaCamera, FaPhoneAlt, FaEnvelope, FaUser } from 'react-icons/fa';
import SellWithUs from './SellWithUs';

const Sell: React.FC = () => {
  return (
    <>
      <SellWithUs />
      <div className="bg-gray-50 py-16 px-8 sm:px-16">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-extrabold text-center text-[#c55ea3] mb-8">Sell Your Property</h2>
          <p className="text-center text-gray-600 mb-12">
            Fill out the form below with your personal and property details. Our team will review your submission and get back to you shortly.
          </p>

          {/* Form Section */}
          <form className="space-y-6">
            
            {/* Name */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <div className="text-[#c55ea3] w-6 h-6 mr-4">
                <FaUser />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 bg-transparent focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <div className="text-[#c55ea3] w-6 h-6 mr-4">
                <FaPhoneAlt />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 bg-transparent focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <div className="text-[#c55ea3] w-6 h-6 mr-4">
                <FaEnvelope />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent focus:outline-none"
              />
            </div>

            
            {/* Property Name */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <div className="text-[#c55ea3] w-6 h-6 mr-4">
                <FaHome />
              </div>
              <input
                type="text"
                placeholder="Property Name"
                className="flex-1 bg-transparent focus:outline-none"
              />
            </div>

            {/* Price */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <div className="text-[#c55ea3] w-6 h-6 mr-4">
                <span className="text-xl">₦</span>
              </div>
              <input
                type="number"
                placeholder="Price (NGN)"
                className="flex-1 bg-transparent focus:outline-none"
              />
            </div>

            {/* Location */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <div className="text-[#c55ea3] w-6 h-6 mr-4">
                <FaMapMarkerAlt />
              </div>
              <input
                type="text"
                placeholder="Property Location"
                className="flex-1 bg-transparent focus:outline-none"
              />
            </div>

            {/* Property Images */}
            <div className="flex items-center border-b border-gray-300 py-2">
              <div className="text-[#c55ea3] w-6 h-6 mr-4">
                <FaCamera />
              </div>
              <input
                type="file"
                multiple
                accept="image/*"
                className="flex-1 bg-transparent focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <textarea
                placeholder="Property Description"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#c55ea3]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#c55ea3] text-white py-3 rounded-md font-semibold hover:bg-[#a1508c] transition-colors"
            >
              Submit Proposal
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sell;
