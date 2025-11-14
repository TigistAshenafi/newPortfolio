'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          About <span className="text-blue-600">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
              <Image
                src="/mypic.jpg"
                alt="About Me"
                width={400}
                height={400}
                className="relative rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Passionate Full-Stack Developer
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I am a dedicated Software Engineering student with a passion for creating
              innovative web solutions. With over 2 years of experience in web development,
              I specialize in building responsive and user-friendly applications.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in software development has equipped me with strong problem-solving
              skills and the ability to work with modern technologies. I have completed 10+
              projects and gained valuable experience through internships with leading companies.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600 mb-1">10+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600 mb-1">2+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">Software Engineering Student</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">Full-Stack Web Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">2 Companies Internship Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
