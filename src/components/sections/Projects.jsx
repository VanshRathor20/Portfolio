import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "FULL-STACK APP",
    title: "E-Commerce Platform",
    live: "https://e-mart-website.netlify.app/",
  },
  {
    number: "02",
    category: "REAL-TIME APP",
    title: "Chat Application",
    live: "#",
  },
  {
    number: "03",
    category: "SAAS PRODUCT",
    title: "Task Manager",
    live: "#",
  },
];

const StickyCard = ({ project, index, total, scrollYProgress }) => {
  const start = index / total;
  const end = (index + 1) / total;
  const tiltDirection = index % 2 === 0 ? -1 : 1;

  // Spring config for smooth physics
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };

  // No tilt at start, only tilts when next card pushes it
  const rotate = useTransform(
    scrollYProgress,
    [start, start + 0.3, end],
    [0, 0, tiltDirection * 2.5],
  );

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1, 1 - (index + 1) * 0.012],
  );

  const y = useTransform(scrollYProgress, [start, end], [0, -8]);

  // Spring transforms
  const rotateSpring = useSpring(rotate, springConfig);
  const scaleSpring = useSpring(scale, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Opacity fade as card gets pushed back
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.5, end],
    [1, 1, 0.7],
  );
  const opacitySpring = useSpring(opacity, springConfig);

  // Blur as card goes behind
  const blur = useTransform(
    scrollYProgress,
    [start, end],
    ["blur(0px)", "blur(1.5px)"],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      style={{
        position: "sticky",
        top: `${100 + index * 24}px`,
        height: "76vh",
        maxWidth: "1000px",
        margin: "0 auto 16px",
        borderRadius: "24px",
        border: "1px solid #1e1e1e",
        background: "#0f0f0f",
        padding: "36px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        rotate: rotateSpring,
        scale: scaleSpring,
        y: ySpring,
        opacity: opacitySpring,
        filter: blur,
        transformOrigin: "top center",
        zIndex: index,
      }}
    >
      {/* TOP ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "64px",
              fontWeight: "800",
              color: "#f0f0f0",
              lineHeight: "1",
            }}
          >
            {project.number}
          </div>
          <div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "0.18em",
                color: "#7C3AED",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              {project.category}
            </div>
            <div
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "20px",
                fontWeight: "700",
                color: "#F0F0F0",
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </div>
          </div>
        </div>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          style={{
            border: "1px solid #2a2a2a",
            borderRadius: "999px",
            padding: "8px 20px",
            color: "#666",
            fontSize: "9px",
            fontFamily: "JetBrains Mono, monospace",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            textDecoration: "none",
            transition: "all 0.3s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#7C3AED";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#2a2a2a";
            e.currentTarget.style.color = "#666";
          }}
        >
          Live Project
        </a>
      </div>

      {/* IMAGE GRID */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flex: 1,
          minHeight: "0px",
        }}
      >
        {/* Left: 2 stacked */}
        <div
          style={{
            width: "38%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {[1, 2].map((i) => (
            <div
              key={i}
              style={{
                flex: i === 1 ? "1" : "1.4",
                background: "#141414",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#252525",
                fontSize: "8px",
                fontFamily: "JetBrains Mono, monospace",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              preview
            </div>
          ))}
        </div>

        {/* Right: 1 tall */}
        <div
          style={{
            width: "62%",
            background: "#141414",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#252525",
            fontSize: "8px",
            fontFamily: "JetBrains Mono, monospace",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          main preview
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      style={{
        background: "#0C0C0C",
        borderRadius: "48px 48px 0 0",
        marginTop: "-40px",
        position: "relative",
        zIndex: 10,
        paddingTop: "80px",
        paddingBottom: "160px",
        paddingLeft: "48px",
        paddingRight: "48px",
      }}
    >
      {/* Heading */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 60px" }}>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#7C3AED",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          SELECTED WORK
        </p>
        <h2
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "48px",
            fontWeight: "700",
            color: "#F0F0F0",
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Projects
        </h2>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          height: `${projects.length * 100}vh`,
        }}
      >
        {projects.map((project, index) => (
          <StickyCard
            key={project.number}
            project={project}
            index={index}
            total={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
