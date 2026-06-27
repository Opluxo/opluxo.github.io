'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: Record<string, string | number>;
  x?: number;
  as?: 'div' | 'section' | 'span';
};

export function FadeIn({ children, delay = 0, className, style, x, as = 'div' }: Props) {
  const initialX = x ?? 0;
  const initialY = x !== undefined ? 0 : 24;

  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
