import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products, Product } from '../products';

const TourRequest: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: Product | undefined = products.find((p) => p.id === parseInt(id || ''));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [successMessage, setSuccessMessage] = useState(false);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  useEffect(() => {
    // Generate a list of dates from today to one year later
    const today = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);

    const dates: Date[] = [];
    for (let d = new Date(today); d <= nextYear; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d)); // Push a copy of the date
    }
    setAvailableDates(dates);
  }, []);

  if (!product) {
    return <div>Property not found.</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(true);

    // Hide the success message after 3 seconds
    setTimeout(() => setSuccessMessage(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-center text-[#c65da2] mb-6">
        Request a Tour
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Property Info */}
        <div className="grid md:grid-cols-2">
          <div>
            <img
              src={product.images[0]} // Display the first image
              alt={product.title}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Location:</strong> {product.location}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Price:</strong> ₦{product.price.toLocaleString()}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Bedrooms:</strong> {product.bedrooms} |{' '}
              <strong>Bathrooms:</strong> {product.bathrooms}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Size:</strong> {product.sqm} sqm
            </p>
            <p className="text-gray-600">
              <strong>Built Year:</strong> {product.builtYear}
            </p>
          </div>
        </div>

        {/* Tour Request Form */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Schedule a Tour
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            {/* Date Selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select a Date
              </label>
              <div className="flex space-x-2 p-3 text-sm overflow-x-auto mb-4">
                {availableDates.map((date, index) => (
                  <div
                    key={index}
                    className={`px-9 py-2 border rounded-lg cursor-pointer ${
                      selectedDateIndex === index
                        ? 'bg-[#c65da2] text-white'
                        : 'bg-gray-100'
                    }`}
                    onClick={() => setSelectedDateIndex(index)}
                  >
                    {date.toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#c65da2] text-white py-2 rounded-lg font-medium hover:bg-[#a14a8b] transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Success!
            </h3>
            <p>Your tour request has been submitted.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourRequest;
