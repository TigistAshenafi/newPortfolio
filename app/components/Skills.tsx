'use client';

import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'React', percentage: 88 },
  { name: 'Next.js', percentage: 85 },
  { name: 'Node.js', percentage: 80 },
  { name: 'Express', percentage: 82 },
  { name: 'TypeScript', percentage: 83 },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-blue-600">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Git', 'Docker', 'MongoDB', 'PostgreSQL'].map((tech) => (
            <div
              key={tech}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-blue-600">{tech.slice(0, 1)}</span>
              </div>
              <span className="text-gray-800 font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
