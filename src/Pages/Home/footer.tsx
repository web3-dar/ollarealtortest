import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logo (2).png'
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fff] border-t border-black text-[#c55ea3] py-12 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="text-center md:text-left">
         <div className='m-auto flex justify-center'> <img src={logo} width="100" /></div> 
          <p className="mt-4 text-sm text-[#c55ea3]/80">
            At Ollarealtor, we are dedicated to helping you find your dream property. Whether buying, selling, or investing, we are here to guide you.
          </p>
        </div>

        {/* Links Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold ">Quick Links</h3>
          <ul className="mt-4 flex gap-3 ">
            <li>
              <a href="/" className="text-[#c55ea3]/80 hover:text-[#c55ea3] hover:font-bold">Home</a>
            </li>
            <li>
              <a href="/listing" className="text-[#c55ea3]/80 hover:text-[#c55ea3] hover:font-bold">Properties</a>
            </li>
            <li>
              <a href="/about" className="text-[#c55ea3]/80 hover:text-[#c55ea3] hover:font-bold">About Us</a>
            </li>
            <li>
              <a href="/contact" className="text-[#c55ea3]/80 hover:text-[#c55ea3] hover:font-bold">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <FaPhoneAlt className="w-5 h-5 mr-2" />
              <p className="text-[#c55ea3]/80">+2348168648554</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="w-5 h-5 mr-2" />
              <p className="text-[#c55ea3]/80 ">info@ollarealtor.com</p>
            </div>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="https://web.facebook.com/ollarealtor/" className="text-[#c55ea3]/80 hover:text-[#000]">
                <FaFacebookF className="w-6 h-6" />
              </a>
              
              <a href="https://www.instagram.com/ollarealtor_ltd/" className="text-[#c55ea3]/80 hover:text-[#000]">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://ng.linkedin.com/in/olaitan-olatoye-0204261b4" className="text-[#c55ea3]/80 hover:text-[#000]">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-[#c55ea3]/80">
        <p>&copy; {new Date().getFullYear()} Ollarealtor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
