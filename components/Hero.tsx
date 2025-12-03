'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const specialties = ['Backend Development', 'Web Development', 'Odoo Development', 'Zoho Development'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % specialties.length;
      const fullText = specialties[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg shadow-emerald-500/50">
            <img
              src="/asif.jpg"
              alt="Profile Photo"
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: '50% 20%' }}
            />
          </div>
        </div>
        <h2 className="text-xl md:text-2xl text-slate-400 mb-2">Hi, I'm</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-emerald-400">
          Mohammed Asif
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Software Engineer
        </h3>
        <div className="text-xl md:text-2xl text-slate-300 mb-4 h-8">
          <span className="text-emerald-400">{text}</span>
          <span className="animate-pulse">|</span>
        </div>
        <p className="text-lg text-slate-400 mb-8">2+ Years Experience</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="/Mohammed Asif - Resume.pdf" 
            download
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a href="#projects" className="px-8 py-3 border border-emerald-600 hover:bg-emerald-600/10 rounded-lg transition">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-emerald-600 hover:bg-emerald-600/10 rounded-lg transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
