import { motion } from "framer-motion";

const STATS = [
  { number: "3+", label: "Years of Experience", delay: 0.1 },
  { number: "20+", label: "Projects Completed", delay: 0.2 },
  { number: "15+", label: "Technologies Mastered", delay: 0.3 },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-8 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-mono text-xs text-[#7C3AED] tracking-widest uppercase mb-4"
      >
        About Me
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="w-full lg:w-[45%]">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: stat.delay, ease: "easeOut" }}
              className="bg-[#111111] border border-[#222222] rounded-xl p-6 mb-4 hover:border-[#7C3AED] transition-colors duration-300"
            >
              <p className="text-4xl font-display font-bold text-white">
                {stat.number}
              </p>
              <p className="text-[#A1A1AA] text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="w-full lg:w-[55%]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-4xl text-white mb-6">
            I build things for the web.
          </h2>

          <p className="text-[#A1A1AA] text-base leading-relaxed mb-4">
            I&apos;m Vansh, a Full-Stack Developer passionate about building
            scalable, performant web applications. I work across the entire
            stack — from crafting pixel-perfect UIs to designing robust backend
            systems.
          </p>

          <p className="text-[#A1A1AA] text-base leading-relaxed">
            Currently focused on React, Node.js, and cloud infrastructure. I
            love turning complex problems into simple, elegant solutions.
          </p>

          <div className="w-16 h-px bg-[#7C3AED] mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
