import React from 'react';
import HeroSection from './hero';
import ActionCards from './ActionCards';
import AboutCEO from './ola';
import WhyPatronizeUs from './WhyPatronizeUs';



const Home: React.FC = () => {
 
  return (
     <>
     <HeroSection/>
     <ActionCards/>
     <AboutCEO/>
     <WhyPatronizeUs/>
     
     </>
  );
};

export default Home;
