import { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = (delay) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const CodeVisual = () => (
  <div className="w-full max-w-md bg-[#111111] rounded-2xl border border-[#222222] p-6 font-mono text-sm">
    <div className="flex gap-2 mb-4">
      <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
      <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
      <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
    </div>
    <p className="text-[#7C3AED]">
      const <span className="text-white">developer</span> = {"{"}
    </p>
    <p className="text-[#A1A1AA] pl-4">
      name: <span className="text-emerald-400">&quot;Vansh&quot;</span>,
    </p>
    <p className="text-[#A1A1AA] pl-4">
      role: <span className="text-emerald-400">&quot;Full-Stack Dev&quot;</span>,
    </p>
    <p className="text-[#A1A1AA] pl-4">
      stack:{" "}
      <span className="text-emerald-400">
        [&quot;React&quot;, &quot;Node&quot;, &quot;MongoDB&quot;]
      </span>
      ,
    </p>
    <p className="text-[#A1A1AA] pl-4">
      available: <span className="text-emerald-400">true</span>
    </p>
    <p className="text-[#7C3AED]">{"}"}</p>
    <p className="mt-4 text-[#A1A1AA]">
      <span className="text-[#7C3AED]">→ </span>
      <span className="text-white animate-pulse">Ready to build._</span>
    </p>
  </div>
);

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 60% 40%, rgba(124, 58, 237, 0.08) 0%, transparent 70%), #0A0A0A`,
      }}
    >
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <motion.div
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              {...fadeIn(0.1)}
              className="font-mono text-xs text-[#7C3AED] uppercase mb-4"
              style={{ letterSpacing: "0.2em" }}
            >
              Full-Stack Developer
            </motion.p>

            <motion.h1
              {...fadeIn(0.2)}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-[#F5F5F5] leading-tight"
            >
              Building digital
              <br />
              products that
              <br />
              matter.
            </motion.h1>

            <motion.p
              {...fadeIn(0.3)}
              className="font-sans text-[#A1A1AA] text-base max-w-sm mt-6 leading-relaxed"
            >
              I craft fast, scalable web applications from frontend to backend.
            </motion.p>

            <motion.div
              {...fadeIn(0.4)}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#projects"
                className="bg-[#7C3AED] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#6D28D9] transition-colors duration-200"
                style={{ boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
              >
                View Projects
              </a>
              <a
                href="#"
                className="border border-[#333333] text-[#F5F5F5] px-6 py-3 rounded-lg text-sm font-medium hover:border-[#444444] hover:text-white transition-colors duration-200 bg-transparent"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center w-full h-[500px]">
              {imageError ? (
                <CodeVisual />
              ) : (
                <img
                  src="https://illustrations.popsy.co/violet/working-vacation.svg"
                  alt="Developer Illustration"
                  className="w-full max-w-lg object-contain drop-shadow-2xl"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
