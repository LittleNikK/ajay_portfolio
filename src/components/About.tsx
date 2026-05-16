import { motion } from 'framer-motion';
import { Code2, Globe, Layers, Zap, Monitor, Cpu } from 'lucide-react';

const highlights = [
  { icon: Globe, label: 'Web3 Platforms', color: 'from-blue-500/10 to-cyan-500/10' },
  { icon: Layers, label: 'Blockchain Interfaces', color: 'from-indigo-500/10 to-purple-500/10' },
  { icon: Monitor, label: 'Responsive UI Systems', color: 'from-emerald-500/10 to-teal-500/10' },
  { icon: Zap, label: 'Performance Optimization', color: 'from-amber-500/10 to-orange-500/10' },
  { icon: Code2, label: 'SaaS Frontend Engineering', color: 'from-rose-500/10 to-pink-500/10' },
  { icon: Cpu, label: 'Modern Architecture', color: 'from-violet-500/10 to-fuchsia-500/10' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden aurora-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-500/10 text-primary-600 mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-surface-900 tracking-tight">
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main card */}
          <motion.div
            className="md:col-span-2 glass-card rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-surface-900 mb-4">
              Who I Am
            </h3>
            <p className="text-base text-surface-800/60 leading-relaxed">
              Ajay Pawar is a Full Stack Developer and Web3 Frontend Engineer currently
              working at Masterstroke Technosoft Pvt. Ltd. Passionate about building
              scalable, responsive, and visually immersive digital experiences using
              React.js, Tailwind CSS, and modern frontend technologies.
            </p>
            <p className="mt-4 text-base text-surface-800/60 leading-relaxed">
              With a strong focus on clean code architecture and pixel-perfect
              implementation, I bridge the gap between design and engineering to deliver
              products that are both beautiful and performant.
            </p>

            {/* Floating gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-purple/10 rounded-full blur-[60px] pointer-events-none" />
          </motion.div>

          {/* Experience card */}
          <motion.div
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-indigo/10 flex items-center justify-center mb-4">
                <Code2 size={20} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-display font-bold text-surface-900 mb-2">
                Current Role
              </h3>
              <p className="text-sm text-surface-800/50">
                Frontend Developer at Masterstroke Technosoft
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-600">Active</span>
            </div>
          </motion.div>

          {/* Expertise cards */}
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="glass-card rounded-2xl p-6 glass-card-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon size={18} className="text-surface-800/60" />
              </div>
              <p className="text-sm font-medium text-surface-900">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
