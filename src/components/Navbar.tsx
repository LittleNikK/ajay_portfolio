import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);

    const sections = navLinks.map((l) => l.href.replace('#', ''));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection(sections[i]);
        break;
      }
    }
  });

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3'
            : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
              isScrolled
                ? 'glass shadow-lg shadow-black/[0.03]'
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-indigo flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-sm font-bold text-white font-display">A</span>
              </div>
              <span className="text-lg font-display font-semibold text-surface-900 hidden sm:block">
                Ajay<span className="text-primary-500">.</span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
                >
                  <span
                    className={
                      activeSection === link.href.replace('#', '')
                        ? 'text-primary-600'
                        : 'text-surface-800/60 hover:text-surface-900'
                    }
                  >
                    {link.name}
                  </span>
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-primary-50/80 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-primary-500 to-accent-indigo text-white hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Resume
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-xl text-surface-800 hover:bg-surface-100 transition-colors"
              >
                {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={false}
        animate={mobileOpen ? 'open' : 'closed'}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-surface-900/20 backdrop-blur-sm"
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu panel */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-72 bg-white/95 backdrop-blur-xl shadow-2xl p-8 pt-24"
          variants={{
            open: { x: 0 },
            closed: { x: '100%' },
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-surface-800/70 hover:bg-surface-50'
                }`}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-primary-500 to-accent-indigo text-white"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
