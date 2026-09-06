'use client';

import { useEffect, useRef, useState } from 'react';
import {
  SiGit, SiDocker, SiPostgresql, SiReact, SiNextdotjs,
  SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress,
  SiAngular, SiMysql, SiLaravel, SiNestjs, SiSupabase,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
  darkColor?: string;
  category: 'Frontend' | 'Backend' | 'Database & Tools';
};

// Exactly 15 skills → 5 per row × 3 rows
const skills: Skill[] = [
  // Row 1 — Frontend (5)
  { name: 'React',        icon: SiReact,       color: '#61DAFB',                   category: 'Frontend' },
  { name: 'Next.js',      icon: SiNextdotjs,   color: '#000000', darkColor: '#fff', category: 'Frontend' },
  { name: 'TypeScript',   icon: SiTypescript,  color: '#3178C6',                   category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4',                   category: 'Frontend' },
  { name: 'Angular',      icon: SiAngular,     color: '#DD0031',                   category: 'Frontend' },
  // Row 2 — Backend (5)
  { name: 'Node.js',      icon: SiNodedotjs,   color: '#339933',                   category: 'Backend' },
  { name: 'NestJS',       icon: SiNestjs,      color: '#E0234E',                   category: 'Backend' },
  { name: 'Express',      icon: SiExpress,     color: '#000000', darkColor: '#fff', category: 'Backend' },
  { name: 'Laravel',      icon: SiLaravel,     color: '#FF2D20',                   category: 'Backend' },
  { name: 'Java',         icon: FaJava,        color: '#007396',                   category: 'Backend' },
  // Row 3 — Database & Tools (5)
  { name: 'MySQL',        icon: SiMysql,       color: '#4479A1',                   category: 'Database & Tools' },
  { name: 'PostgreSQL',   icon: SiPostgresql,  color: '#336791',                   category: 'Database & Tools' },
  { name: 'Supabase',     icon: SiSupabase,    color: '#3ECF8E',                   category: 'Database & Tools' },
  { name: 'Git',          icon: SiGit,         color: '#F1502F',                   category: 'Database & Tools' },
  { name: 'Docker',       icon: SiDocker,      color: '#2496ED',                   category: 'Database & Tools' },
];

// Row labels that float to the left of each row on larger screens
const rowLabels = ['Frontend', 'Backend', 'Database & Tools'];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'));
    update();
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);

  // Split flat array into rows of 5
  const rows = [skills.slice(0, 5), skills.slice(5, 10), skills.slice(10, 15)];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-3" />
          <p className="text-sm sm:text-base text-gray-500 dark:text-slate-300 max-w-xl mx-auto">
            Technologies I work with across the full stack
          </p>
        </div>

        {/* 3 rows × 5 columns */}
        <div className="space-y-4 sm:space-y-5">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx}>
              {/* Row label — small pill above the row */}
              <div className={`flex items-center gap-2 mb-3 transition-all duration-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${rowIdx * 120}ms` }}>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  {rowLabels[rowIdx]}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
              </div>

              {/* 5-column grid */}
              <div className="grid grid-cols-5 gap-2.5 sm:gap-3 md:gap-4">
                {row.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  const globalIdx = rowIdx * 5 + skillIdx;
                  return (
                    <div
                      key={skill.name}
                      className={`group flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 p-2.5 sm:p-4 md:p-5
                                  rounded-xl sm:rounded-2xl
                                  bg-white dark:bg-slate-800
                                  border border-gray-100 dark:border-slate-700
                                  shadow-sm hover:shadow-lg
                                  hover:-translate-y-1.5 hover:border-primary/40
                                  transition-all duration-300 cursor-default
                                  ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                      style={{ transitionDelay: `${rowIdx * 100 + skillIdx * 55}ms` }}
                    >
                      <Icon
                        size={28}
                        color={isDark && skill.darkColor ? skill.darkColor : skill.color}
                        className="group-hover:scale-110 transition-transform duration-300 sm:w-9 sm:h-9"
                      />
                      <p className="text-[10px] xs:text-xs sm:text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200 text-center leading-tight">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
