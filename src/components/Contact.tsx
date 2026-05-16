import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { useState, type FormEvent } from 'react';

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ajaypawar5565@gmail.com',
    href: 'mailto:ajaypawar5565@gmail.com',
    color: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'LittleNikK',
    href: 'https://github.com/LittleNikK',
    color: 'from-slate-500/10 to-gray-500/10',
    iconColor: 'text-slate-700',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'ajay-pawar',
    href: 'https://www.linkedin.com/in/ajay-pawar-04ba49264',
    color: 'from-blue-600/10 to-sky-500/10',
    iconColor: 'text-blue-600',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden aurora-bg">
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
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-surface-900 tracking-tight">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="mt-4 text-base text-surface-800/50 max-w-lg mx-auto">
            Have a project in mind? Let's connect and create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            className="glass-card rounded-3xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-display font-bold text-surface-900 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-surface-800/60 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-surface-200/50 text-surface-900 text-sm placeholder:text-surface-800/30 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/30 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-800/60 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-surface-200/50 text-surface-900 text-sm placeholder:text-surface-800/30 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/30 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-800/60 mb-1.5">
                  Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-surface-200/50 text-surface-900 text-sm placeholder:text-surface-800/30 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-3.5"
              >
                {submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-2xl p-5 glass-card-hover flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <social.icon size={20} className={social.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-surface-800/40 uppercase tracking-wider">
                    {social.label}
                  </p>
                  <p className="text-sm font-medium text-surface-900 truncate mt-0.5">
                    {social.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-surface-800/30 group-hover:text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
                />
              </a>
            ))}

            {/* CTA card */}
            <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-primary-500/5 to-accent-indigo/5 border-primary-500/10">
              <h4 className="text-lg font-display font-bold text-surface-900 mb-2">
                Open to Opportunities
              </h4>
              <p className="text-sm text-surface-800/50 leading-relaxed">
                Currently exploring new challenges in Web3, SaaS, and frontend engineering.
                Let's discuss how I can contribute to your team.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
