'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';

const roles = ['Full-Stack Developer', 'Software Engineer', 'UI/UX Enthusiast'];

/** Tilt-on-hover profile photo with glowing ring + floating name card */
function HeroPhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);   // -1 … 1
    const dy = (e.clientY - cy) / (rect.height / 2);  // -1 … 1
    setTilt({ x: dy * -12, y: dx * 12 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
      style={{ perspective: '800px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
    >
      {/* Outer slow-spinning dashed ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow pointer-events-none" />

      {/* Dual-colour glowing ring — pulses on hover */}
      <div
        className={`absolute -inset-1 sm:-inset-2 rounded-full pointer-events-none transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-50'}`}
        style={{
          background: 'conic-gradient(from 0deg, #6d28d9, #0d9488, #6d28d9)',
          filter: 'blur(8px)',
          borderRadius: '9999px',
        }}
      />

      {/* Static subtle outer ring */}
      <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-primary/10 pointer-events-none" />

      {/* Tilt wrapper */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: hovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
      >
        {/* Soft gradient glow behind photo */}
        <div className="absolute inset-2 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-2xl" />

        <Image
          src="/mypic.jpg"
          alt="Tigist Ashenafi"
          width={384}
          height={384}
          className="relative rounded-full object-cover w-full h-full shadow-2xl border-4 border-white dark:border-slate-800"
          priority
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const socials = [
    { icon: <FaGithub size={18} />, url: 'https://github.com/TigistAshenafi', name: 'GitHub', color: 'text-gray-900 dark:text-gray-100' },
    { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/tigist-ashenafi-5294912b7/', name: 'LinkedIn', color: 'text-blue-600 dark:text-blue-400' },
    { icon: <FaInstagram size={18} />, url: 'https://www.instagram.com/titi_6120/', name: 'Instagram', color: 'text-pink-500' },
    { icon: <FaTelegram size={18} />, url: 'https://t.me/Tigi_29', name: 'Telegram', color: 'text-sky-400' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/40 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-14 sm:pt-16"
    >
      {/* Decorative blobs — smaller on mobile */}
      <div className="absolute top-1/4 -left-16 sm:-left-32 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-48 sm:w-96 h-48 sm:h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-16">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Text Section */}
          <div className="text-center md:text-left fade-in-up w-full">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 text-gray-900 dark:text-gray-100">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block sm:inline">
                Tigist Ashenafi
              </span>
            </h1>

            {/* Animated role — fixed height so layout doesn't jump */}
            <div className="h-8 sm:h-9 flex items-center justify-center md:justify-start mb-4">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-100">
                <span>{displayed}</span>
                <span className="inline-block w-0.5 h-5 sm:h-6 bg-primary ml-0.5 animate-blink align-middle" />
              </p>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-300 mb-7 leading-relaxed max-w-md mx-auto md:mx-0">
              Passionate about building elegant, performant web applications.
              Turning complex problems into clean, user-friendly experiences.
            </p>

            {/* Buttons — full-width on smallest screens */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-7">
              <a
                href="#contact"
                className="px-7 py-3 bg-primary text-white rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-primary/30 hover:bg-primaryDark hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-center"
              >
                Get In Touch
              </a>
              <a
                href="/Tigist_Ashenafi.pdf"
                download="Tigist_Ashenafi.pdf"
                className="px-7 py-3 border-2 border-primary text-primary rounded-full font-semibold text-sm sm:text-base hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 dark:text-primary text-center"
              >
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                >
                  {React.cloneElement(social.icon, { className: social.color })}
                </a>
              ))}
            </div>
          </div>

          {/* Image Section — shown first (top) on mobile via flex-col-reverse */}
          <div className="flex justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
            <HeroPhoto />
          </div>

        </div>
      </div>
    </section>
  );
}
