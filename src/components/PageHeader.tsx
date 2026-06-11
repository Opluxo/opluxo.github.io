'use client';

import { motion } from 'framer-motion';

type Props = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="page-header-section">
      <div className="page-header-bg" />
      <div className="container page-header-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-header-title"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="page-header-subtitle"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
