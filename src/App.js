import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import MarketRates from './components/MarketRates';
import Offers from './components/Offers';
import ProjectsInHighDemand from './components/ProjectsInHighDemand';
import NewLaunched from './components/NewLaunched';
import PopularBuilders from './components/PopularBuilders';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className="App">
        <Navbar />
      <div className="p-8">
        <HeroSection />
        <Services />
        <MarketRates />
        <Offers />
        <ProjectsInHighDemand />
        <NewLaunched />
        <PopularBuilders />
      </div>
        <Footer />
    </div>
    </>
  );
}

export default App;
