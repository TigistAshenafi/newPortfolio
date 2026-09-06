'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.toLowerCase());
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg'
          : 'bg-white dark:bg-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center h-14 sm:h-16">
        <Link
          href="#home"
          className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent shrink-0"
        >
          Tigist
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-1 text-gray-700 dark:text-gray-200 font-medium">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-200 block ${
                    isActive
                      ? 'text-primary dark:text-primary bg-primary/10'
                      : 'hover:text-primary dark:hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Dark Mode Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 dark:text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 bg-white dark:bg-slate-900 px-6 pb-4 border-t border-gray-100 dark:border-slate-800">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
