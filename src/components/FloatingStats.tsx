import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Working at', value: 'Masterstroke Technosoft', icon: 'briefcase' },
  { label: 'Projects', value: '10+', icon: 'layers' },
  { label: 'Achievement', value: '1st Runner Up AMC Hackathon', icon: 'trophy' },
  { label: 'Role', value: 'Full Stack Developer', icon: 'code' },
];

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function FloatingStats() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card rounded-2xl p-6 glass-card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-indigo/10 flex items-center justify-center group-hover:from-primary-500/20 group-hover:to-accent-indigo/20 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-indigo" />
                </div>
                <div>
                  <p className="text-xs font-medium text-surface-800/40 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-base font-display font-semibold text-surface-900">
                    {stat.value.includes('+') ? (
                      <>
                        <CountUp target={10} suffix="+" />
                        <span className="sr-only">{stat.value}</span>
                      </>
                    ) : (
                      stat.value
                    )}
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
