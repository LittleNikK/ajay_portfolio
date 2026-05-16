import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import HeroScene from './HeroScene';

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-purple/6 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary-600 font-medium mb-6"
            >
              <Sparkles size={14} />
              <span>Available for opportunities</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-surface-900">Ajay</span>{' '}
              <span className="gradient-text">Pawar</span>
            </motion.h1>

            <motion.p
              className="mt-4 text-xl sm:text-2xl font-display font-medium text-surface-800/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Full Stack Developer &{' '}
              <span className="gradient-text-blue">Web3 Frontend Engineer</span>
            </motion.p>

            <motion.p
              className="mt-5 text-base sm:text-lg text-surface-800/50 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Building scalable Web3 platforms, premium SaaS interfaces, and immersive
              digital experiences using React.js, Tailwind CSS, and modern frontend
              engineering.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button
                onClick={() => handleScroll('projects')}
                className="btn-primary group"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-surface-800/40 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" />
              Currently working at Masterstroke Technosoft Pvt. Ltd.
            </motion.p>
          </div>

          {/* Right 3D visual */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <HeroScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
