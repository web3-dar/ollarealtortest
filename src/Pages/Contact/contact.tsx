import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Please fill out the form below, and we'll get back to you shortly.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <form className="space-y-8">
            {/* Name Field */}
            <div className="flex items-center border border-gray-300 rounded-md px-4 py-3">
              <div className="text-[#c55ea3] mr-4">
                <HiOutlineMail className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full outline-none text-lg text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border border-gray-300 rounded-md px-4 py-3">
              <div className="text-[#c55ea3] mr-4">
                <HiOutlineMail className="w-6 h-6" />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full outline-none text-lg text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Phone Number Field */}
            <div className="flex items-center border border-gray-300 rounded-md px-4 py-3">
              <div className="text-[#c55ea3] mr-4">
                <HiOutlinePhone className="w-6 h-6" />
              </div>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full outline-none text-lg text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Message Field */}
            <div className="flex items-center border border-gray-300 rounded-md px-4 py-3">
              <div className="text-[#c55ea3] mr-4">
                <HiOutlineLocationMarker className="w-6 h-6" />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full outline-none text-lg text-gray-900 placeholder-gray-500 resize-none"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#c55ea3] text-white font-semibold text-lg rounded-md hover:bg-[#a1508c] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
