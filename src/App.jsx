import React, { Suspense, lazy } from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Header scrollToSection={scrollToSection} />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Portfolio scrollToSection={scrollToSection} />
        <Testimonials scrollToSection={scrollToSection} />
        <Contact />
        <Footer scrollToSection={scrollToSection} />
      </Suspense>
    </div>
  );
}

export default App;