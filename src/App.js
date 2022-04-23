import { useEffect } from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import { SiFlutter } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen bg-[#1A3C40]">
      <Navbar />
      <Hero />
      <Skills />
      <Banner />
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
