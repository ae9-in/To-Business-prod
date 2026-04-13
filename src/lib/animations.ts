import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.55, ease: 'easeOut' } 
  }
};

export const staggerContainer: Variants = {
  visible: { 
    transition: { staggerChildren: 0.1 } 
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 } 
  }
};
