import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../assets/act1.jpeg';
import img2 from '../../assets/act2.webp';
import img3 from '../../assets/act2.webp';

const ActionCards: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">

        {/* Small Screen Layout (Flex) - Visible on small screens only */}
        <div className="block sm:hidden">
          <div className="flex justify-between space-x-4">
            <Link
              to="/buy"
              className="group relative rounded-lg overflow-hidden w-4/5 transition-transform duration-300 hover:scale-105"
            >
              <div
                className="w-full h-64 bg-cover bg-center group-hover:opacity-60 transition-opacity duration-300"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  BUY
                </span>
              </div>
            </Link>

            <Link
              to="/rent"
              className="group relative rounded-lg overflow-hidden w-4/5 transition-transform duration-300 hover:scale-105"
            >
              <div
                className="w-full h-64 bg-cover bg-center group-hover:opacity-60 transition-opacity duration-300"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  RENT
                </span>
              </div>
            </Link>

            <Link
              to="/sell"
              className="group relative rounded-lg overflow-hidden w-4/5 transition-transform duration-300 hover:scale-105"
            >
              <div
                className="w-full h-64 bg-cover bg-center group-hover:opacity-60 transition-opacity duration-300"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  SELL
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Larger Screen Layout (Grid) - Hidden on small screens */}
        <div className=" w-[90%] m-auto  hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Buy Card */}
          <Link
            to="/buy"
            className="group relative rounded-lg overflow-hidden transform transition-transform duration-500 sm:w-64 md:w-full hover:scale-105"
          >
            <div
              className="w-full h-64 bg-cover bg-center group-hover:opacity-60 transition-opacity duration-300 mt-9"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                BUY
              </span>
            </div>
          </Link>

          {/* Rent Card (Middle Card - bigger than the others) */}
          <Link
            to="/rent"
            className="group relative  overflow-hidden transform transition-transform duration-500 sm:w-72 md:w-full hover:scale-105"
          >
            <div
              className="w-full h-[350px] bg-cover bg-center group-hover:opacity-60 transition-opacity duration-300"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                RENT
              </span>
            </div>
          </Link>

          {/* Sell Card */}
          <Link
            to="/sell"
            className="group relative rounded-lg overflow-hidden transform transition-transform duration-500 sm:w-64 md:w-full hover:scale-105"
          >
            <div
              className="w-full h-64 bg-cover bg-center group-hover:opacity-60 transition-opacity duration-300 mt-9"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                SELL
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;
