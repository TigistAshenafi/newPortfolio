'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Project Management Platform',
    description:
      'A full-stack project management app with authentication, admin dashboard, project & task management, and team task assignment. Built for efficient team collaboration.',
    technologies: ['Angular', 'Vert.x', 'MySQL'],
    image: '/image.png',
    imageFit: 'cover' as const,
    imageBg: '',
    githubUrl: 'https://github.com/TigistAshenafi/Project-Management',
    liveUrl: null,
  },
  {
    title: 'ServeEase – Digital Marketplace',
    description:
      'Mobile app connecting service seekers with verified professionals. Features service discovery, booking requests, provider verification, and a smooth user experience.',
    technologies: ['Flutter', 'Node.js', 'Express.js', 'Next.js', 'Tailwind CSS'],
    image: '/ServeEase.png',
    imageFit: 'contain' as const,
    imageBg: 'bg-[#071330]',
    githubUrl: 'https://github.com/TigistAshenafi/ServeEase',
    liveUrl: null,
  },
  {
    title: 'Card Game',
    description:
      'A fun browser-based card game with smooth animations, game state management, and an engaging user experience built with modern web technologies.',
    technologies: ['Next.js', 'Nest.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageFit: 'cover' as const,
    imageBg: '',
    githubUrl: null,
    liveUrl: 'https://cardgame-fe-brown.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern responsive personal portfolio with smooth animations, dark mode support, and an interactive UI showcasing projects and skills.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageFit: 'cover' as const,
    imageBg: '',
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Simple Blog Platform',
    description:
      'A blogging platform with markdown support, user authentication, comments section, and user profiles built with a PHP & MySQL backend.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript'],
    image: 'https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    imageFit: 'cover' as const,
    imageBg: '',
    githubUrl: null,
    liveUrl: null,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-slate-100 mb-3">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base text-gray-500 dark:text-slate-300 max-w-2xl mx-auto">
            A selection of projects that represent unique challenges and learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className={`relative h-44 sm:h-48 overflow-hidden ${project.imageBg || ''}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`${project.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover action icons — always visible on touch devices */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-white transition shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={15} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primaryDark transition shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>

                <p className="text-gray-500 dark:text-slate-300 mb-4 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags — wrap freely */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom links */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-slate-700 mt-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <FiGithub size={14} />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        <FiExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
