import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../products'; // Assuming your product data file is here
import { FaHeart } from 'react-icons/fa';

const ListingPage = () => {
  const [likedProperties, setLikedProperties] = useState<number[]>(() => {
    const storedLikes = localStorage.getItem('likedProperties');
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  const [search, setSearch] = useState({
    city: '',
    bedrooms: '',
    bathrooms: '',
    price: '',
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Filter products based on search criteria
    const filtered = products.filter((product) => {
      return (
        (search.city === '' || product.location.toLowerCase().includes(search.city.toLowerCase())) &&
        (search.bedrooms === '' || product.bedrooms === parseInt(search.bedrooms)) &&
        (search.bathrooms === '' || product.bathrooms === parseInt(search.bathrooms)) &&
        (search.price === '' || product.price <= parseInt(search.price))
      );
    });
    setFilteredProducts(filtered);
  }, [search]);

  const toggleLike = (id: number) => {
    let updatedLikes: number[];
    if (likedProperties.includes(id)) {
      updatedLikes = likedProperties.filter((likeId) => likeId !== id);
    } else {
      updatedLikes = [...likedProperties, id];
    }
    setLikedProperties(updatedLikes);
    localStorage.setItem('likedProperties', JSON.stringify(updatedLikes));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Properties Listing</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by City or Neighborhood"
            value={search.city}
            onChange={(e) => setSearch({ ...search, city: e.target.value })}
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Bedrooms"
            value={search.bedrooms}
            onChange={(e) => setSearch({ ...search, bedrooms: e.target.value })}
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Bathrooms"
            value={search.bathrooms}
            onChange={(e) => setSearch({ ...search, bathrooms: e.target.value })}
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={search.price}
            onChange={(e) => setSearch({ ...search, price: e.target.value })}
            className="border p-2 rounded-md"
          />
        </div>
      </div>

      {/* Liked Properties Button */}
      <div className="flex justify-between items-center mb-4">
        <Link
          to="/saved"
          className="bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800"
        >
          View Liked Properties
        </Link>
      </div>

      {/* Properties List */}
      <div className=" flex flex-wrap gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="  w-[100%] p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <div className="absolute top-2 left-2 bg-gray-500 text-[#fff] px-3 py-1 text-xs rounded">
                Active
              </div>
              <button
                className="absolute top-2 right-2 bg-gray-400 border rounded-lg p-2  hover:bg-gray-200"
                onClick={() => toggleLike(product.id)}
              >
                {likedProperties.includes(product.id) ? <div className='text-red-600'><FaHeart/></div> : <div ><FaHeart/></div>}
              </button>
            </div>
            <div className="p-2 ">
              <p className="font-semibold text-lg mb-1">₦{product.price.toLocaleString()}</p>
              <h2 className="text-sm text-gray-600 font-semibold mb-1">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-1">{product.location}</p>
              
              <div className="flex  gap-1  text-sm font-bold text-gray-500 mt-2">
                <span>{product.bedrooms} Beds</span>
                <span>{product.bathrooms} Baths</span>
                <span>{product.sqm} sqm</span>
              </div>
              <Link
                to={`/property/${product.id}`}
                className="block mt-4 bg-black text-white text-center py-2 rounded hover:bg-gray-800"
              >
                View Property
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
