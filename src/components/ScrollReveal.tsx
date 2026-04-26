import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type ScrollRevealProps = PropsWithChildren<{
  amount?: number;
  className?: string;
  delay?: number;
  y?: number;
}>;

const ScrollReveal = ({
  amount = 0.2,
  children,
  className,
  delay = 0,
  y = 28,
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, rotateX: -12, scale: 0.97, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
