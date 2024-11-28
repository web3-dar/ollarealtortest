import React, { useState } from 'react';
import { FiHome, FiList, FiInfo, FiPhone } from 'react-icons/fi';
import logo from '../../assets/logo (2).png';
import './style.css'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#fff] text-[#c65da2] font-bold sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/"><img src={logo} width={120} alt="RealtorHub" /></a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/" className="flex items-center text-[#000] hover:text-[#a8439a]">
            <div className="mr-2 w-5 h-5">
              <FiHome />
            </div>
            Home
          </a>
          <a href="/listing" className="flex items-center text-[#000] hover:text-[#a8439a]">
            <div className="mr-2 w-5 h-5">
              <FiList />
            </div>
            Listings
          </a>
          <a href="/about" className="flex items-center text-[#000] hover:text-[#a8439a]">
            <div className="mr-2 w-5 h-5">
              <FiInfo />
            </div>
            About
          </a>
          <a href="/contact" className="flex items-center text-[#000] hover:text-[#a8439a]">
            <div className="mr-2 w-5 h-5">
              <FiPhone />
            </div>
            Contact
          </a>
        </nav>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden text-[#4f2b4c] text-2xl font-bold focus:outline-none"
          onClick={toggleMenu}
        >
          <div className={`w-8 h-8 relative ${menuOpen ? "open" : ""}`}>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-[#fff] pb-3">
          <ul className="flex flex-col space-y-4 px-4 py-2">
            <li>
              <a
                href="/"
                className="flex items-center text-[#333333] font-bold hover:text-[#a8439a]"
                onClick={() => setMenuOpen(false)}
              >
                <div className="mr-2 w-5 h-5">
                  <FiHome />
                </div>
                Home
              </a>
            </li>
            <li>
              <a
                href="/listing"
                className="flex items-center text-[#333333] hover:text-[#a8439a]"
                onClick={() => setMenuOpen(false)}
              >
                <div className="mr-2 w-5 h-5">
                  <FiList />
                </div>
                Listings
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="flex items-center text-[#333333] hover:text-[#a8439a]"
                onClick={() => setMenuOpen(false)}
              >
                <div className="mr-2 w-5 h-5">
                  <FiInfo />
                </div>
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center text-[#333333] hover:text-[#a8439a]"
                onClick={() => setMenuOpen(false)}
              >
                <div className="mr-2 w-5 h-5">
                  <FiPhone />
                </div>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
