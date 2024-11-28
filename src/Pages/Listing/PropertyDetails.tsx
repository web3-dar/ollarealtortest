import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products, Product } from '../products'; // Adjust the path to your `products.ts` file
import { FaBed, FaBath, FaRulerCombined, FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import avatar from '../../assets/ceo.webp'

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: Product | undefined = products.find((p) => p.id === parseInt(id || ''));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-red-600">Property Not Found</h1>
      </div>
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold text-[#c65da2] mb-8 text-center">{product.title}</h1>

      {/* Property Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Images Section */}
        <div className="md:col-span-2">
          {/* Main Image */}
          <div className="relative">
            <img
              src={product.images[0]}
              alt="Main Property Image"
              className="w-full h-[400px] object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => handleOpenModal(0)}
            />
            <button
              onClick={() => handleOpenModal(0)}
              className="absolute bottom-4 right-4 bg-[#c65da2] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a14a8b] transition"
            >
              View All Images
            </button>
          </div>

          {/* Small Images */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {product.images.slice(1, 4).map((image, index) => (
              <div
                key={index}
                className="w-full h-[120px] bg-gray-100 rounded-lg shadow-md cursor-pointer"
                onClick={() => handleOpenModal(index + 1)}
              >
                <img
                  src={image}
                  alt={`Small Property Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Info */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4"> <div className='text-xl font-semibold text-[#c65da2] mb-8 text-center'>Property Information </div></h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 flex items-center">
               <div className="text-[#c65da2] mr-2"><FaMapMarkerAlt  /> </div> 
                {product.location}
              </p>
              <p className="text-lg text-gray-700 flex items-center">
                <div className="text-[#c65da2] mr-2">
                     <FaBed  />
                    </div> {product.bedrooms}   <span className='px-3'> Bedrooms</span>
              </p>
              <p className="text-lg text-gray-700 flex items-center">
               <div className="text-[#c65da2] mr-2">
                <FaBath  /></div>   {product.bathrooms} 
                <span className='px-3'> Bathrooms</span>
              </p>
              <p className="text-lg text-gray-700 flex items-center">
                <div className="text-[#c65da2] mr-2" >
                    <FaRulerCombined />
                    </div> {product.sqm}  <span className='px-3'>Sqm </span>
              </p>
              <p className="text-lg text-gray-700 flex items-center">
                <div className="text-[#c65da2] mr-2"><FaCalendarAlt  />
                    </div> Built in <span className='px-3'> </span> {product.builtYear}
              </p>
              <p className="text-lg text-gray-700">{product.features}</p>
            </div>
          </div>

          <Link
                to={`/listing`}
                className="block mt-4 bg-black text-white text-center py-2 rounded hover:bg-gray-800"
              >
                Back to Listing
              </Link>

          {/* Agent Contact Card */}
          <div className="border-2 border-black text-white p-6 rounded-lg shadow-lg mt-6">
            {/* Agent Information */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Agent Picture */}
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
                <img
                  src={avatar} // Replace with actual agent picture URL
                  alt="Agent"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Agent Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-black text-center">Olatoye Olalekan</h3>
                
                {/* Phone */}
                <p className="text-lg flex items-center mb-2">
                  <div className="mr-3 text-[#c65da2]"><FaPhoneAlt /></div>
                  <span className="text-black font-semibold text-gray-500">+2348168648554 </span>
                </p>

                {/* WhatsApp */}
                <p className="text-lg flex items-center mb-2">
                  <a
                    href="https://wa.me/2347069130965" // Replace with the actual WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black font-semibold text-gray-500"
                  >
                    <div className="mr-3 text-[#c65da2]"><FaWhatsapp /></div>
                    +2347069130965
                  </a>
                </p>

                {/* Email */}
                <p className="text-lg flex items-center">
                  <div className="mr-3 text-[#c65da2]"><FaEnvelope /></div>
                  <span className="text-black font-semibold text-gray-500">agent@example.com</span>
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/agent" // Replace with actual LinkedIn profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#0e76a8] text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/agent" // Replace with actual Instagram profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#E1306C] text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/agent" // Replace with actual Twitter profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#1DA1F2] text-2xl"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Action Button */}
            <div className="mt-6 text-center">
              <button className="bg-white border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-500 mb-9  transition">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-transparent shadow-lg z-50">
        <div className="flex justify-center gap-6">
          <button className="bg-[#c65da2] text-white px-8 py-3 rounded-lg text-sm hover:bg-[#a14a8b] transition">
            Request a Tour
          </button>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 text-sm transition">
            Contact Agent
          </button>
        </div>
      </div>

      {/* Modal for Image View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-black text-xl"
            >
              X
            </button>
            <img
              src={product.images[currentIndex]}
              alt="Modal Image"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="flex justify-between mt-4">
              <button onClick={handlePrev} className="text-black">Previous</button>
              <button onClick={handleNext} className="text-black">Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
