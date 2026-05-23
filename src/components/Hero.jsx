import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import {
  staggerContainer,
  fadeSlideUp,
  buttonHoverTap,
} from "../motionVariants";

const ROLES = [
  "Full-Stack Developer",
  "React Engineer",
  "Node.js Developer",
  "API Architect",
  "Problem Solver",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 hero-grid" />

      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accentGreen/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.p
          variants={fadeSlideUp}
          className="text-gray-400 text-lg md:text-xl mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={fadeSlideUp}
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-gradient">Vansh</span>
        </motion.h1>

        <motion.div
          variants={fadeSlideUp}
          className="h-12 md:h-14 flex items-center justify-center mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-medium text-accent font-mono"
            >
              {ROLES[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={fadeSlideUp}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build end-to-end web products — from pixel-perfect UIs to scalable
          backend systems.
        </motion.p>

        <motion.div
          variants={fadeSlideUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            {...buttonHoverTap}
            className="px-8 py-3 rounded-lg bg-accent text-black font-semibold shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#"
            {...buttonHoverTap}
            className="px-8 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiArrowDown className="text-3xl" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
