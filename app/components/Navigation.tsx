'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-slate-900 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="#home" className="text-2xl font-bold text-primary dark:text-primary">
          Tigist
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-white dark:bg-slate-900 p-6 text-gray-700 dark:text-gray-200 font-medium">
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
