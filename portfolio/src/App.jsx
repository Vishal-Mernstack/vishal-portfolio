import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Loader from './components/UI/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Global styles
import './styles/globals.css';
import './components/UI/Loader.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Auto-complete loader after 1.8s
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => {}} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
