import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiFramer,
} from 'react-icons/si';
import { Globe, LayoutGrid as Layout, Coffee } from 'lucide-react';

const skills = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB', bg: 'from-cyan-400/10 to-blue-500/10' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', bg: 'from-yellow-400/10 to-amber-500/10' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', bg: 'from-cyan-500/10 to-teal-500/10' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', bg: 'from-green-500/10 to-emerald-500/10' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', bg: 'from-green-600/10 to-lime-500/10' },
  { name: 'APIs', icon: Globe, color: '#6366F1', bg: 'from-indigo-500/10 to-violet-500/10' },
  { name: 'Git & GitHub', icon: SiGit, color: '#F05032', bg: 'from-orange-500/10 to-red-500/10' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF', bg: 'from-blue-600/10 to-indigo-500/10' },
  { name: 'Responsive Design', icon: Layout, color: '#8B5CF6', bg: 'from-purple-500/10 to-fuchsia-500/10' },
  { name: 'Java', icon: Coffee, color: '#ED8B00', bg: 'from-amber-500/10 to-orange-500/10' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-cyan/10 text-accent-cyan mb-4">
            Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-surface-900 tracking-tight">
            Tech{' '}
            <span className="gradient-text">Stack</span>
          </h2>
          <p className="mt-4 text-base text-surface-800/50 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="group relative glass-card rounded-2xl p-5 text-center glass-card-hover cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="mx-auto w-12 h-12 rounded-xl bg-surface-100/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon size={22} style={{ color: skill.color }} />
                </div>
                <p className="text-sm font-medium text-surface-900">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
