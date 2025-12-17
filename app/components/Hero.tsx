'use client';

import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';

export default function Hero() {
  const socials = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/TigistAshenafi', name: 'GitHub', color: 'text-gray-900 dark:text-gray-100' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/tigist-ashenafi-5294912b7/', name: 'LinkedIn', color: 'text-blue-700 dark:text-blue-500' },
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/titi_6120/', name: 'Instagram', color: 'text-pink-500' },
    { icon: <FaTelegram size={20} />, url: 'https://t.me/Tigi_29', name: 'Telegram', color: 'text-blue-400' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-primary pt-12 dark:from-slate-900 dark:to-primaryDark"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="text-primary dark:text-primary">Tigist Ashenafi</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-semibold mb-6">
              Web Developer
            </p>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Passionate full-stack developer creating elegant solutions to complex problems. 
              Building modern web applications with React, Next.js, and other cutting-edge technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-primary dark:bg-primaryDark text-white rounded-full hover:bg-primary dark:hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-md font-medium"
              >
                Get In Touch
              </a>
              <a
                href="/Tigist Ashenafi.pdf"
                download="Tigist Ashenafi.pdf"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md font-medium dark:border-primary dark:text-primary dark:hover:bg-primaryDark"
              >
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-md"
                  aria-label={social.name}
                >
                  {React.cloneElement(social.icon, { className: social.color })}
                </a>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mt-10 md:mt-0">
            <div className="relative w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96">
              {/* Gradient Pulse Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-primaryDark rounded-full animate-pulse opacity-20 dark:opacity-40"></div>

              <Image
                src="/mypic.jpg"
                alt="Profile"
                width={384}
                height={384}
                className="relative rounded-full object-cover shadow-2xl border-4 sm:border-6 md:border-8 border-white dark:border-gray-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
