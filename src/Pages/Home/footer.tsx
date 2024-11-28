import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#c55ea3] text-white py-12 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-extrabold">Ollarealtor</h3>
          <p className="mt-4 text-lg text-white/80">
            At Ollarealtor, we are dedicated to helping you find your dream property. Whether buying, selling, or investing, we are here to guide you.
          </p>
        </div>

        {/* Links Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="text-white/80 hover:text-white">Home</a>
            </li>
            <li>
              <a href="/listing" className="text-white/80 hover:text-white">Properties</a>
            </li>
            <li>
              <a href="/about" className="text-white/80 hover:text-white">About Us</a>
            </li>
            <li>
              <a href="/contact" className="text-white/80 hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <FaPhoneAlt className="w-5 h-5 mr-2" />
              <p className="text-white/80">+1 800 123 4567</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="w-5 h-5 mr-2" />
              <p className="text-white/80">contact@olla.com</p>
            </div>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="https://facebook.com" className="text-white/80 hover:text-white">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-white/80 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-white/80 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-white/80 hover:text-white">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-white/80">
        <p>&copy; {new Date().getFullYear()} Ollarealtor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
