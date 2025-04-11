import './App.css'
import LoadingScreen from './components/LoadingScreen'
import "./index.css"
import { useState } from 'react';
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Reviews from './components/sections/Reviews';
import { ActiveSectionProvider } from './contexts/ActiveSectionContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ActiveSectionProvider>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Reviews />
        <Contact />
      </div>
    </ActiveSectionProvider>
  )
}

export default App
