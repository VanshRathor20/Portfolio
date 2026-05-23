export const fadeSlideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const staggerContainerFast = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05 },
  },
};

export const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const cardHover = {
  whileHover: {
    scale: 1.03,
    boxShadow: "0 0 30px rgba(34,211,238,0.2)",
  },
  transition: { type: "spring", stiffness: 300 },
};

export const badgeHover = {
  whileHover: {
    scale: 1.1,
    borderColor: "#22d3ee",
    boxShadow: "0 0 20px rgba(34,211,238,0.25)",
  },
  transition: { type: "spring", stiffness: 300 },
};

export const buttonHoverTap = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const projectCardHover = {
  whileHover: {
    scale: 1.03,
    boxShadow: "0 0 30px rgba(34,211,238,0.2)",
  },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 300 },
};

export const viewportOnce = { once: true, amount: 0.2 };
