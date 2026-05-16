import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-surface-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-indigo flex items-center justify-center">
              <span className="text-xs font-bold text-white font-display">A</span>
            </div>
            <span className="text-sm font-display font-semibold text-surface-900">
              Ajay Pawar
            </span>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/LittleNikK"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-surface-100/80 flex items-center justify-center text-surface-800/40 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-pawar-04ba49264"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-surface-100/80 flex items-center justify-center text-surface-800/40 hover:text-blue-600 hover:bg-blue-600/10 transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:ajaypawar5565@gmail.com"
              className="w-9 h-9 rounded-xl bg-surface-100/80 flex items-center justify-center text-surface-800/40 hover:text-rose-500 hover:bg-rose-500/10 transition-all duration-300"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Right - Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-surface-100/80 flex items-center justify-center text-surface-800/40 hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-surface-200/30 text-center">
          <p className="text-xs text-surface-800/30">
            &copy; {new Date().getFullYear()} Ajay Pawar. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
