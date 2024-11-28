import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Header from './Pages/Home/header';
import Listing from './Pages/Listing/Listing';
import PropertyDetails from './Pages/Listing/PropertyDetails';
import LikedProperties from './Pages/Listing/LikedProperties';
import AboutUs from './Pages/About/about';
import ContactUs from './Pages/Contact/contact';
import Footer from './Pages/Home/footer';
import Sell from './Pages/Sell/sell';
import TourRequest from './Pages/Listing/RequestAtour';

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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/tour-request/:id" element={<TourRequest />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
