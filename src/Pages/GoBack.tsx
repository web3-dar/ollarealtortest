import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // React Icons for the arrow icon

const BackToPreviousPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="fixed bottom-4 left-4">
      <button
        onClick={handleGoBack}
        className="bg-[#c65da2] text-white p-3 rounded-full shadow-lg hover:bg-[#a14a8b] transition flex items-center justify-center"
        title="Go Back"
      >
        <FaArrowLeft className="text-lg" />
      </button>
    </div>
  );
};

export default BackToPreviousPage;
