import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/banner_1.jpg';
import banner2 from '../../assets/banner_2.webp';
import banner3 from '../../assets/banner_3.jpeg';
import banner4 from '../../assets/banner_4.jpg';
import { Product } from '../products'; // Ensure this import is correct.
import { products } from '../products'; 
import { motion } from 'framer-motion'; // Importing framer-motion for button animation

const HeroSection: React.FC = () => {
  const images = [banner1, banner2, banner3, banner4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [keyword, setKeyword] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products); // Ensure the correct type for products
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string>('');
  const [showSearch, setShowSearch] = useState(false);

  // Static locations for Lagos, Abuja, and Port Harcourt
  const locations = ['Lagos', 'Abuja', 'Port Harcourt'];

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSearch = () => {
    // Check inputs before searching
    if (minPrice && isNaN(Number(minPrice))) {
      setError('Please enter a valid starting price.');
      console.log('Error: Invalid price entered');
      return;
    }

    console.log('Search clicked');
    console.log('Location:', location);
    console.log('Keyword:', keyword);
    console.log('Minimum Price:', minPrice);

    // Filtering products based on the criteria
    const filtered = products.filter((product) => {
      const matchesLocation =
        location === 'All Locations' || product.location.toLowerCase().includes(location.toLowerCase());
      const matchesKeyword = keyword ? product.title.toLowerCase().includes(keyword.toLowerCase()) : true;
      const matchesPrice = minPrice ? product.price >= parseInt(minPrice) : true;

      return matchesLocation && matchesKeyword && matchesPrice;
    });

    console.log('Filtered Products:', filtered);

    // Update state with filtered products and show results
    setFilteredProducts(filtered);
    setShowResults(true);
    setError('');
  };

  const handleClearSearch = () => {
    setShowResults(false);
    setFilteredProducts(products);
    setLocation('');
    setMinPrice('');
    setKeyword('');
    setError('');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content in the center */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-thin text-[#c65da2] mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
           Find Your Dream Home
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8 px-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
           Explore the best real estate opportunities in Nigeria. <span className='font-bold text-[#c65da2]'>Ollarealtor</span>  is here to make your property journey seamless and stress-free.
          </motion.p>

          {/* Small Screen Button */}
          <div className="sm:hidden">
            <motion.button
              onClick={() => setShowSearch(true)}
              className="bg-transparent border-2 border-[#ccc] text-white px-6 py-2 rounded-md hover:bg-[#fff] hover:border-[#000] hover:text-[#c55ea3] transition duration-300 w-[300px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             FIND YOUR DREAM HOME
            </motion.button>
          </div>

          {/* Search Form (Visible on large screens, popup on small screens) */}
          <div className="hidden sm:flex wrap space-x-4 bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full">
            <div className="flex-1">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                id="location"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c65da2] transition duration-300"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
                Keyword (e.g., Lagos)
              </label>
              <input
                type="text"
                id="keyword"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c65da2] transition duration-300"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter keyword to search"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Minimum Price (in Naira)
              </label>
              <input
                type="text"
                id="price"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c65da2] transition duration-300"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Enter minimum price (optional)"
              />
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>

            <motion.button
              onClick={handleSearch}
              className="bg-[#c65da2] text-white px-6 py-2 rounded-md hover:bg-[#a8439a] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </div>
        </div>
      </section>

      {/* Popup Search on Small Screens */}
      {showSearch && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-white p-6 rounded-lg w-full sm:w-auto max-w-xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-2 right-2 text-xl text-gray-700 hover:text-gray-900"
            >
              &times; {/* Close icon (X) */}
            </button>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Search Properties</h2>
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                id="location"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c65da2] transition duration-300"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
                Keyword (e.g., Lagos)
              </label>
              <input
                type="text"
                id="keyword"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c65da2] transition duration-300"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter keyword to search"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Minimum Price (in Naira)
              </label>
              <input
                type="text"
                id="price"
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c65da2] transition duration-300"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Enter minimum price (optional)"
              />
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>

            <motion.button
              onClick={handleSearch}
              className="bg-[#c65da2] text-white px-6 py-2 rounded-md hover:bg-[#a8439a] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </div>
        </div>
      )}

      {/* Display Filtered Products */}
      {showResults && filteredProducts.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <div className="flex  flex-col justify-between items-center">
            <h2 className="text-3xl font-semibold text-[#c55ea3] mb-4 ">Featured Properties</h2>
            <motion.button
              onClick={handleClearSearch}
              className="bg-transparent border-2 border-[#ccc] text-black mb-5 px-6 py-2 rounded-md hover:bg-[#fff] hover:border-[#000] hover:text-[#c55ea3] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear 
            </motion.button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="w-full p-2 bg-white rounded-md shadow-lg">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-[#333] mt-2">{product.title}</h3>
                <p className="text-sm text-gray-600">₦{product.price.toLocaleString()}</p>
                <p className="text-sm text-gray-600">
                  {product.bedrooms} Bedrooms | {product.bathrooms} Bathrooms | {product.sqm} sqm
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
