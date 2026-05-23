export const easeOut = [0.22, 1, 0.36, 1];

export const viewport = { once: true, amount: 0.12 };

export const transition = {
  duration: 0.45,
  ease: easeOut,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};
