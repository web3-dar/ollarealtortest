import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Header from './Pages/Home/header';
import Listing from './Pages/Listing/Listing';
import PropertyDetails from './Pages/Listing/PropertyDetails';
import LikedProperties from './Pages/Listing/LikedProperties';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/saved" element={<LikedProperties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
