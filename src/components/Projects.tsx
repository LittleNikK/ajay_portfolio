import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'MST Blockchain',
    description:
      'Worked as a Frontend Developer on MST Blockchain, contributing to the development of a modern Web3 platform focused on scalability, decentralized infrastructure, and seamless user experience.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Vite', 'Web3 UI'],
    live: 'https://mstblockchain.com/',
    github: 'https://github.com/LittleNikK/MST-WEB-10MAYPUSH.git',
    gradient: 'from-blue-500/20 via-indigo-500/20 to-cyan-500/20',
    accent: 'bg-blue-500',
  },
  {
    title: 'Mission Green Bharat',
    description:
      'Built and contributed to a modern Web3 platform focused on blockchain infrastructure, carbon-credit ecosystem integration, and decentralized digital solutions.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    live: 'https://missiongreenbharat.com/',
    github: null,
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    accent: 'bg-emerald-500',
  },
  {
    title: 'Seamless QR Checkout',
    description:
      'A hackathon project focused on creating a seamless QR-based checkout system for efficient digital payments and fast retail experiences.',
    tech: ['Node.js', 'React.js', 'APIs', 'QR Systems'],
    live: null,
    github: null,
    gradient: 'from-amber-500/20 via-orange-500/20 to-rose-500/20',
    accent: 'bg-amber-500',
    badge: '1st Runner Up — AMC Hackathon 2025',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden aurora-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-purple/10 text-accent-purple mb-4">
            Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-surface-900 tracking-tight">
            Featured{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-base text-surface-800/50 max-w-lg mx-auto">
            A selection of projects showcasing expertise in Web3, frontend engineering, and modern UI development.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative glass-card rounded-3xl overflow-hidden glass-card-hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Top gradient area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Abstract pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-xl rotate-12" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/20 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-2xl rotate-45" />
                </div>

                {/* Project title overlay */}
                <h3 className="relative text-2xl font-display font-bold text-surface-900/80 group-hover:scale-105 transition-transform duration-500">
                  {project.title}
                </h3>

                {/* Badge */}
                {project.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-amber-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                    {project.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-surface-800/60 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-surface-100/80 text-surface-800/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-surface-200/50">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-surface-800/50 hover:text-surface-900 transition-colors"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                  {!project.live && !project.github && (
                    <span className="text-sm text-surface-800/40 italic">
                      Hackathon project
                    </span>
                  )}
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-surface-800/30 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
