'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '2+',  label: 'Years Exp.' },
  { value: '3',   label: 'Internships' },
];

const highlights = [
  'BSc Software Engineering — Debre Berhan University',
  'Full-Stack Web Developer',
  '3 Companies Internship Experience',
  'Open to full-time & freelance opportunities',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-3">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        {/* Content — full width, centred on mobile, left on md+ */}
        <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">
            Full-Stack Developer &amp; Software Engineer
          </h3>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-4 leading-relaxed text-center">
            I&apos;m <strong className="text-gray-800 dark:text-gray-100">Tigist Ashenafi</strong>, a Software Engineering graduate from{' '}
            <strong className="text-gray-800 dark:text-gray-100">Debre Berhan University</strong> with a BSc in Software Engineering.
            I have a strong passion for building clean, efficient, and user-friendly web applications.
          </p>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-10 leading-relaxed text-center">
            With hands-on experience from internships and personal projects, I specialize in full-stack
            development using modern technologies. I enjoy turning complex problems into simple, elegant solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-3 sm:p-5 rounded-2xl text-center border border-gray-100 dark:border-slate-800 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-slate-800 dark:to-slate-800 shadow-sm hover:shadow-md transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <h4 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  {stat.value}
                </h4>
                <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2.5 sm:space-y-3">
            {highlights.map((text, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${400 + idx * 80}ms` }}
              >
                <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
