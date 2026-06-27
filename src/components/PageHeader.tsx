'use client';

import { motion } from 'framer-motion';

type Props = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="pt-24 pb-16 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary text-lg max-w-lg mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
