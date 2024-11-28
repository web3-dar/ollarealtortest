import  { useState } from 'react';
import { products } from '../products';
import { Link } from 'react-router-dom';

const LikedProperties = () => {
  const [likedProperties, ] = useState<number[]>(() => {
    const storedLikes = localStorage.getItem('likedProperties');
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  const likedProducts = products.filter((product) => likedProperties.includes(product.id));

  return (
    <div className="container mx-auto p-4">

<Link
                to={`/property`}
                className="bg-transparent border-2 border-[#ccc] text-black px-6 py-2 rounded-md hover:bg-[#fff] hover:border-[#000] hover:text-[#c55ea3] transition duration-300 w-[300px] "
              >
                Back To Listing
              </Link>

<br /> <br />
      <h1 className="text-2xl font-bold mb-4 mt-4 text-center">Liked Properties</h1>


      <div className="flex flex-wrap gap-4">
        {likedProducts.map((product) => (
          <div
            key={product.id}
            className="w-[100%] p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.location}</p>
              <p className="text-sm text-gray-800">₦{product.price.toLocaleString()}</p>
              <Link
                to={`/property/${product.id}`}
                className="block mt-4 bg-black text-white text-center py-2 rounded hover:bg-gray-800"
              >
                View Property
              </Link>
            </div>
          </div>
        ))}
        {likedProducts.length === 0 && (
          <p className="text-gray-500 text-center w-full">No liked properties found.</p>
        )}
      </div>
    </div>
  );
};

export default LikedProperties;
