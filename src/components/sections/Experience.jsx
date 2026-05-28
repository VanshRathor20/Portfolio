import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const timelineItems = [
  {
    tag: "2026 - Present",
    title: "Open to Opportunities",
    subtitle: "Open to Full-Time & Freelance",
    desc: "Actively looking for Full Stack Developer internships, freelance projects, and full-time opportunities to build impactful digital products with modern technologies.",
    side: "right",
    isCurrent: true,
  },
  {
    tag: "2025 - 2026",
    title: "Frontend Developer Intern",
    subtitle: "@ Tyrano Softwares, Greater Noida",
    desc: "Worked on production-level company websites with focus on responsive UI, performance optimization, and modern frontend development using React and advanced CSS techniques.",
    side: "left",
  },
  {
    tag: "2023 - 2027",
    title: "B.Tech - Computer Science",
    subtitle: "IIMT Engineering College, Meerut",
    desc: "Focused on Full Stack Development, Data Structures & Algorithms, and scalable application development.",
    side: "right",
  },
  {
    tag: "2023",
    title: "Higher Secondary Education",
    subtitle: "Saraswati Bal Mandir Sr. Sec. School, Hapur",
    // desc: "Completed Higher Secondary with Physics, Chemistry, Mathematics.",
    side: "left",
  },
  {
    tag: "2021",
    title: "Secondary Education",
    subtitle: "Saraswati Bal Mandir Sr. Sec. School, Hapur",
    // desc: "Completed Secondary School examination.",
    side: "right",
  },
];

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="experience" className="py-32 px-8 max-w-5xl mx-auto">
      <p className="font-mono text-xs text-[#4A7FA7] tracking-widest uppercase mb-4">
        EXPERIENCE & EDUCATION
      </p>
      <h2
        className="font-display text-5xl font-bold text-[#F6FAFD] mb-20"
        style={{ letterSpacing: "-0.03em" }}
      >
        My Journey.
      </h2>

      <div style={{ position: "relative" }}>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: isMobile ? "20px" : "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent, #4A7FA7 10%, #4A7FA7 90%, transparent)",
            transformOrigin: "top",
          }}
        />

        {timelineItems.map((item, index) => {
          const isRight = isMobile ? true : item.side === "right";
          return (
            <div
              key={item.title}
              style={{
                position: "relative",
                display: "flex",
                marginBottom:
                  index === timelineItems.length - 1 ? "0px" : "64px",
                justifyContent: isRight ? "flex-start" : "flex-end",
                paddingLeft: isRight
                  ? isMobile
                    ? "48px"
                    : "calc(50% + 40px)"
                  : undefined,
                paddingRight: !isRight ? "calc(50% + 40px)" : undefined,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: isMobile ? "20px" : "50%",
                  top: "24px",
                  transform: isMobile ? "translateX(-50%)" : "translateX(-50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#4A7FA7",
                  border: "2px solid #0A1931",
                  zIndex: 2,
                  boxShadow: item.isCurrent
                    ? "0 0 0 4px rgba(74,127,167,0.2)"
                    : "none",
                  animation: item.isCurrent ? "pulse 2s infinite" : "none",
                }}
              />

              <motion.div
                initial={{ x: isRight ? 30 : -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                }}
                whileHover={{ borderColor: "#4A7FA7" }}
                style={{
                  maxWidth: "380px",
                  width: "100%",
                  background: "#1A3D63",
                  border: "1px solid #2a4a6b",
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "all 0.3s",
                }}
              >
                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "10px",
                    color: "#4A7FA7",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {item.tag}
                </p>

                <h3
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#F6FAFD",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "12px",
                    color: "#B3CFE5",
                    marginTop: "4px",
                  }}
                >
                  {item.subtitle}
                </p>

                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#B3CFE5",
                    marginTop: "12px",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
