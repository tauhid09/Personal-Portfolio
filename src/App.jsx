import { useState } from 'react';
import Nav from './Components/Navigation Bar/navigation'
import Hero from './Components/HeroSection/Hero';
import Loader from './Components/Loader/LoadingOverlay';
import Highlight from './Components/Highlights/Highlights';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import './App.css';

function App() {

  return (
    <>
      <Loader />
      <Nav />
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
  )
}

export default App
