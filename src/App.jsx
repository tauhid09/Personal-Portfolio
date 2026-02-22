// import { useState } from 'react';
import Nav from './Components/Navigation Bar/navigation'
import { HeroDigitalSuccess as Hero } from './Components/HeroSection/hero-digital-success';
import Loader from './Components/Loader/LoadingOverlay';
import Highlight from './Components/Highlights/Highlights';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

import { ReactLenis } from 'lenis/react';
import './App.css';
'use client';

function App() {
  return <ReactLenis root>
    <>
      {/* <Loader /> */}
      {/* <Nav /> */}
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="highlights">
        <Highlight />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>

  </ReactLenis>;
}

export default App
