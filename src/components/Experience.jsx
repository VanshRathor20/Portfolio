import { motion } from "framer-motion";
import { viewportOnce } from "../motionVariants";

const SectionHeading = ({ title }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold">{title}</h2>
    <div className="w-16 h-1 bg-accent mt-2" />
  </div>
);

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "TechCorp",
    period: "2023 – Present",
    side: "left",
    bullets: [
      "Built REST APIs serving 50k+ daily users",
      "Migrated legacy PHP system to Node.js + React",
      "Led frontend architecture with reusable component system",
    ],
  },
  {
    role: "Frontend Developer",
    company: "StartupXYZ",
    period: "2022 – 2023",
    side: "right",
    bullets: [
      "Developed responsive UIs with React + TypeScript",
      "Integrated third-party APIs and payment gateways",
      "Reduced bundle size by 40% through code splitting",
    ],
  },
  {
    role: "Junior Developer",
    company: "Freelance",
    period: "2021 – 2022",
    side: "left",
    bullets: [
      "Built client websites with React and custom backends",
      "Delivered 10+ projects on time with positive feedback",
    ],
  },
];

const TimelineItem = ({ item, index }) => {
  const isLeft = item.side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      className={`relative flex w-full mb-12 ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <div
        className={`w-full md:w-[calc(50%-2rem)] ${
          isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
        }`}
      >
        <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors">
          <span className="text-accent font-mono text-sm">{item.period}</span>
          <h3 className="text-xl font-bold text-white mt-1">
            {item.role}
          </h3>
          <p className="text-accentGreen font-medium mb-4">@ {item.company}</p>
          <ul
            className={`space-y-2 text-gray-400 text-sm ${
              isLeft ? "md:list-none" : ""
            }`}
          >
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2 md:block">
                <span className="text-accent hidden md:inline">▹ </span>
                <span className="text-accent md:hidden">▹</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-4 h-4 rounded-full bg-accent border-4 border-black z-10 top-6" />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading title="My Journey" />

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-accent to-accentGreen origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>

          <div className="relative">
            {EXPERIENCE.map((item, index) => (
              <TimelineItem key={item.company} item={item} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
