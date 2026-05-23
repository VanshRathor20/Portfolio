import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiServer, FiLayers } from "react-icons/fi";
import {
  staggerContainer,
  fadeSlideUp,
  cardHover,
  viewportOnce,
} from "../motionVariants";

const SectionHeading = ({ title }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold">{title}</h2>
    <div className="w-16 h-1 bg-accent mt-2" />
  </div>
);

const CountUp = ({ end, suffix = "", duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportOnce);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const STATS = [
  { icon: FiCode, value: 3, suffix: "+", label: "Years Experience" },
  { icon: FiLayers, value: 20, suffix: "+", label: "Projects Built" },
  { icon: FiServer, value: 15, suffix: "+", label: "Technologies" },
];

const About = () => {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            whileHover={{
              boxShadow: "0 0 40px rgba(34,211,238,0.3)",
            }}
            transition={{ duration: 0.3 }}
            className="relative aspect-square max-w-md mx-auto w-full rounded-2xl border-2 border-accent/50 overflow-hidden bg-card"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-surface">
              <span className="font-mono text-accent/40 text-6xl">V</span>
            </div>
            <motion.div
              className="absolute inset-0 border-2 border-accent rounded-2xl"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
          >
            <motion.p
              variants={fadeSlideUp}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I&apos;m a passionate Full-Stack Developer with expertise in
              building scalable web applications. I love working across the
              entire stack — crafting seamless user experiences on the frontend
              and architecting robust systems on the backend.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="grid sm:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {STATS.map(({ icon: Icon, value, suffix, label }) => (
            <motion.div
              key={label}
              variants={fadeSlideUp}
              {...cardHover}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <Icon className="text-3xl text-accent mx-auto mb-4" />
              <p className="text-3xl font-bold text-white mb-1">
                <CountUp end={value} suffix={suffix} />
              </p>
              <p className="text-gray-400 text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
