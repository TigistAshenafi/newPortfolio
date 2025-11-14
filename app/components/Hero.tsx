'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I&apos;m{' '}
              <span className="text-blue-600">Your Name</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-6">
              Software Engineer
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate full-stack developer creating elegant solutions to complex problems.
              Building web applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              {[
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
                { name: 'Instagram', url: 'https://instagram.com' },
                { name: 'Telegram', url: 'https://t.me' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-sm font-semibold">{social.name.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse opacity-20"></div>
              <Image
                src="/mypic.jpg"
                alt="Profile"
                width={384}
                height={384}
                className="relative rounded-full object-cover shadow-2xl border-8 border-white"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
