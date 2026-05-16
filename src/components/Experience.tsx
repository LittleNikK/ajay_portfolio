import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Masterstroke Technosoft Pvt. Ltd.',
    period: 'Present',
    description:
      'Worked on MST Blockchain and Web3 infrastructure platforms. Built scalable frontend systems, optimized UI performance, and developed modern responsive user experiences using React.js, Tailwind CSS, Framer Motion, and Web3-focused UI architecture.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Web3 UI', 'Vite'],
  },
  {
    type: 'education',
    title: 'Full Stack Java Development',
    company: 'Certification',
    period: 'Completed',
    description:
      'Comprehensive full stack Java development certification covering backend systems, database management, and enterprise application development.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-indigo/10 text-accent-indigo mb-4">
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-surface-900 tracking-tight">
            My{' '}
            <span className="gradient-text-blue">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/30 via-accent-indigo/20 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-indigo ring-4 ring-white shadow-lg shadow-primary-500/20" />
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? 'md:pr-0' : 'md:pl-0'
                }`}
              >
                <div className="glass-card rounded-2xl p-6 glass-card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-indigo/10 flex items-center justify-center">
                      {exp.type === 'work' ? (
                        <Briefcase size={18} className="text-primary-500" />
                      ) : (
                        <GraduationCap size={18} className="text-accent-indigo" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-surface-900">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-surface-800/50 mt-1">{exp.company}</p>
                  <p className="text-sm text-surface-800/60 mt-3 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-surface-100 text-surface-800/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
