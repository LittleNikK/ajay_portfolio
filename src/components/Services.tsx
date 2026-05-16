import { motion } from 'framer-motion';
import { Code2, Globe, Layers, Monitor, Plug, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'End-to-end web application development with modern frameworks and scalable architecture.',
    gradient: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-500',
  },
  {
    icon: Globe,
    title: 'Web3 Frontend Engineering',
    description: 'Building decentralized application interfaces with seamless blockchain integration.',
    gradient: 'from-violet-500/10 to-purple-500/10',
    iconColor: 'text-violet-500',
  },
  {
    icon: Layers,
    title: 'SaaS UI Development',
    description: 'Crafting premium, production-ready SaaS interfaces with pixel-perfect attention to detail.',
    gradient: 'from-cyan-500/10 to-teal-500/10',
    iconColor: 'text-cyan-500',
  },
  {
    icon: Monitor,
    title: 'Responsive Website Design',
    description: 'Fluid, responsive layouts that deliver exceptional experiences across all devices.',
    gradient: 'from-emerald-500/10 to-green-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Seamless third-party API integration and backend service connectivity.',
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: Sparkles,
    title: 'Interactive Landing Pages',
    description: 'High-converting, animated landing pages with premium micro-interactions.',
    gradient: 'from-rose-500/10 to-pink-500/10',
    iconColor: 'text-rose-500',
  },
];

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-500/10 text-primary-600 mb-4">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-surface-900 tracking-tight">
            What I{' '}
            <span className="gradient-text-blue">Offer</span>
          </h2>
          <p className="mt-4 text-base text-surface-800/50 max-w-lg mx-auto">
            Specialized services in frontend engineering, Web3 development, and modern UI design.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group glass-card rounded-2xl p-6 glass-card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={22} className={service.iconColor} />
              </div>
              <h3 className="text-lg font-display font-bold text-surface-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-surface-800/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
