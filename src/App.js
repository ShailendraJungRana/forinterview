import React from 'react'
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Team from  './Components/Team';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import HeroSections from './Components/HeroSections';
function App() {
  return (
<>
<Navbar/> 
<HeroSection/>
<AboutUs/>
<Services/>
<Team/>
<HeroSections/>
<Contact/>
<Footer/>
</>
  
  );
}

export default App
