'use client';

import {
  SiGit,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiAngular,
  SiMysql,
  SiLaravel,
} from 'react-icons/si';

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string; // HEX or Tailwind class
  useHex?: boolean; // optional flag to use hex color
};

const skills: Skill[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB', useHex: true },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', useHex: true },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', useHex: true },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', useHex: true },
  { name: 'Angular', icon: SiAngular, color: '#DD0031', useHex: true },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', useHex: true },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', useHex: true },
  { name: 'NodeJS', icon: SiNodedotjs, color: '#339933', useHex: true },
  { name: 'Express', icon: SiExpress, color: '#000000', useHex: true },
  { name: 'Git', icon: SiGit, color: '#F1502F', useHex: true },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', useHex: true },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', useHex: true },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center
                           rounded-2xl p-6 bg-white dark:bg-slate-800
                           shadow-md hover:shadow-xl
                           transition transform hover:-translate-y-1"
              >
                {/* Icon */}
                <Icon
                  size={50}
                  color={skill.useHex ? skill.color : undefined}
                  className={!skill.useHex ? `${skill.color} mb-4 group-hover:scale-110 transition` : 'mb-4 group-hover:scale-110 transition'}
                />

                {/* Name */}
                <p className="font-medium text-slate-800 dark:text-slate-200">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
