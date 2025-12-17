'use client';

import Image from 'next/image';

const projects = [
  {
    title: 'Project Management Platform',
    description:
      'A full-stack Project Management Platform with authentication, admin dashboard, project & task management, and task assignment.',
    technologies: ['Angular', 'Vert.x', 'MySQL'],
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern and responsive portfolio website with smooth animations and interactive UI.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Simple Blog Platform',
    description:
      'Blogging platform with markdown support, comments, and user profiles.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript'],
    image:
      'https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-slate-100">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on. Each one represents a unique challenge
          and learning experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full
                        bg-primary/10 text-primary
                        dark:bg-primary/20 dark:text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
