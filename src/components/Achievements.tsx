import { motion } from 'framer-motion';
import { Trophy, Briefcase, Award, Users } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '1st Runner Up — AMC Hackathon 2025',
    description: 'Recognized for building Seamless QR Checkout, an innovative QR-based payment solution.',
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: Briefcase,
    title: 'Web Developer at Masterstroke Technosoft',
    description: 'Contributing to Web3 blockchain platforms and modern frontend infrastructure.',
    gradient: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-500',
  },
  {
    icon: Award,
    title: 'Full Stack Java Development Certification',
    description: 'Comprehensive certification in full stack Java development and enterprise architecture.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Users,
    title: 'College Leadership & Event Organizing',
    description: 'Led technical events and organized community-driven development initiatives.',
    gradient: 'from-rose-500/10 to-pink-500/10',
    iconColor: 'text-rose-500',
  },
];

export default function Achievements() {
  return (
    <section className="relative py-24 overflow-hidden aurora-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-600 mb-4">
            Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-surface-900 tracking-tight">
            Key{' '}
            <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className="group glass-card rounded-2xl p-6 glass-card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon size={20} className={item.iconColor} />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-surface-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-surface-800/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
