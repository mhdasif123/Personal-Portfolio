'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </a>
          <div className="flex gap-8">
            <a 
              href="#home" 
              className="text-slate-300 hover:text-emerald-400 transition"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-slate-300 hover:text-emerald-400 transition"
            >
              About Me
            </a>
            <a 
              href="#experience" 
              className="text-slate-300 hover:text-emerald-400 transition"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-slate-300 hover:text-emerald-400 transition"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-slate-300 hover:text-emerald-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
