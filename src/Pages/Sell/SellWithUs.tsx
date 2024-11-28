import React from "react";
import heroBg from "../../assets/banner_3.jpeg"; // Replace with your actual background image path
import img1 from "../../assets/banner_1.jpg"; // Replace with actual image paths
import img2 from "../../assets/banner_2.webp"; // Replace with actual image paths

const SellWithUs: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white py-32 px-8 sm:px-16"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-2xl text-gray-300 font-bold mb-4">Sell with Us</h1>
          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-12">
            Exceptional properties deserve extraordinary marketing. Partner with
            us to elevate your property’s potential with unmatched expertise.
          </p>
          
        </div>
      </div>

      {/* Image Section */}
      <div className=" text-black py-16 px-8 sm:px-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl text-gray-600 font-semibold mb-4">
            Why Choose Us?
          </h2>
          {/* Subtitle */}
          <p className="text-sm text-gray-600 mb-12">
            We help you showcase your property in the best light with innovative
            marketing solutions.
          </p>

          {/* Image Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <img
                src={img1}
                alt="Modern Property"
                className="w-[90%] sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[90%] h-auto object-cover shadow-lg mb-4"
              />
              <p className="text-gray-600 text-center">
                Showcase your modern property with cutting-edge marketing tools.
              </p>
            </div>

            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <img
                src={img2}
                alt="Luxury Property"
                className="w-[90%] sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[90%] h-auto object-cover shadow-lg mb-4"
              />
              <p className="text-gray-600 text-center">
                Highlight luxury properties to attract premium buyers worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellWithUs;
