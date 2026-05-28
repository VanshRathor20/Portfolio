import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import tyranoImg from "../../assets/tyrano-software.png";
import emartImg from "../../assets/emart-home.png";
const financeImg = new URL("../../assets/finance-dashboard.png", import.meta.url).href;

const projects = [
  {
    number: "01",
    category: "COMPANY WEBSITE",
    title: "Tyrano Softwares",
    live: "https://www.tyranosoftwares.com/",
    imgMain: tyranoImg,
    comingSoon: false,
  },
  {
    number: "02",
    category: "FULL-STACK APP",
    title: "E-Commerce Platform",
    live: "https://e-mart-website.netlify.app/",
    imgMain: emartImg,
    comingSoon: false,
  },
  {
    number: "03",
    category: "FINANCE DASHBOARD",
    title: "Expense Tracker",
    live: "https://finance-dashboard-001.netlify.app/dashboard",
    imgMain: financeImg,
    comingSoon: false,
  },
  {
    number: "04",
    category: "REAL-TIME APP",
    title: "Chat Application",
    live: "#",
    imgMain: null,
    comingSoon: true,
  },
];

const MobileStickyCard = ({ project }) => {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "20px",
        border: "1px solid #2a4a6b",
        background: "#1A3D63",
        padding: "20px",
        marginBottom: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* TOP ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "36px",
              fontWeight: "800",
              color: "#F6FAFD",
              lineHeight: "1",
            }}
          >
            {project.number}
          </div>
          <div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "8px",
                letterSpacing: "0.15em",
                color: "#4A7FA7",
                textTransform: "uppercase",
                marginBottom: "3px",
              }}
            >
              {project.category}
            </div>
            <div
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "15px",
                fontWeight: "700",
                color: "#F6FAFD",
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
            border: "1px solid #4A7FA7",
            borderRadius: "999px",
            padding: "6px 12px",
            color: "#B3CFE5",
            fontSize: "8px",
            fontFamily: "JetBrains Mono, monospace",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Live
        </a>
      </div>

      {/* IMAGE AREA */}
      <div
        style={{
          height: "200px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {project.comingSoon ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#0A1931",
              border: "1px solid #2a4a6b",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "28px",
                fontWeight: "800",
                color: "#1A3D63",
                letterSpacing: "-0.03em",
              }}
            >
              COMING SOON
            </div>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                color: "#3a5a7a",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              In Development
            </span>
          </div>
        ) : project.imgMain ? (
          <img
            src={project.imgMain}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top 40px",
              borderRadius: "12px",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#1A3D63",
              borderRadius: "12px",
            }}
          />
        )}
      </div>
    </div>
  );
};

const DesktopStickyCard = ({
  project,
  index,
  total,
  scrollYProgress,
  isMobile,
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const tiltDirection = index % 2 === 0 ? -1 : 1;
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };

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
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.5, end],
    [1, 1, 0.7],
  );
  const blur = useTransform(
    scrollYProgress,
    [start, end],
    ["blur(0px)", "blur(1.5px)"],
  );

  const rotateSpring = useSpring(rotate, springConfig);
  const scaleSpring = useSpring(scale, springConfig);
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);

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
        height: "min(76vh, 600px)",
        maxWidth: "1000px",
        margin: "0 auto 16px",
        borderRadius: "24px",
        border: "1px solid #2a4a6b",
        background: "#1A3D63",
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
        className="project-top-row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            className="project-number"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "64px",
              fontWeight: "800",
              color: "#F6FAFD",
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
                color: "#4A7FA7",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              {project.category}
            </div>
            <div
              className="project-title"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "20px",
                fontWeight: "700",
                color: "#F6FAFD",
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
            border: "1px solid #4A7FA7",
            borderRadius: "999px",
            padding: "8px 20px",
            color: "#B3CFE5",
            fontSize: "9px",
            fontFamily: "JetBrains Mono, monospace",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            textDecoration: "none",
            whiteSpace: "nowrap",
            background: "transparent",
          }}
        >
          {project.comingSoon ? "In Progress" : "Live Project"}
        </a>
      </div>

      {/* IMAGE AREA — full width */}
      <div
        className="project-image-area"
        style={{
          flex: 1,
          minHeight: 0,
          borderRadius: "14px",
          overflow: "hidden",
        }}
      >
        {project.comingSoon ? (
          // COMING SOON CARD
          <div
            style={{
              width: "100%",
              height: isMobile ? "160px" : "55vh",
              maxHeight: "400px",
              background: "#0A1931",
              border: "1px solid #2a4a6b",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Big tilted background text */}
            <div
              style={{
                position: "absolute",
                transform: "rotate(-15deg)",
                whiteSpace: "nowrap",
                fontFamily: "Satoshi, sans-serif",
                fontSize: "clamp(60px, 10vw, 120px)",
                fontWeight: "800",
                color: "#1A3D63",
                letterSpacing: "-0.04em",
                userSelect: "none",
                lineHeight: "1.1",
                textAlign: "center",
              }}
            >
              COMING
              <br />
              SOON
            </div>
          </div>
        ) : project.imgMain ? (
          // PROJECT IMAGE
          <img
            src={project.imgMain}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "14px",
            }}
          />
        ) : (
          // PLACEHOLDER
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#1A3D63",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2a4a6b",
              fontSize: "8px",
              fontFamily: "JetBrains Mono, monospace",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            preview
          </div>
        )}
      </div>
    </motion.div>
  );
};

const StickyCard = ({ project, index, total, scrollYProgress, isMobile }) => {
  if (isMobile) {
    return <MobileStickyCard project={project} />;
  }

  return (
    <DesktopStickyCard
      project={project}
      index={index}
      total={total}
      scrollYProgress={scrollYProgress}
      isMobile={isMobile}
    />
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="projects-section"
      style={{
        background: "#0A1931",
        borderRadius: "48px 48px 0 0",
        marginTop: "-40px",
        position: "relative",
        zIndex: 10,
        paddingTop: "80px",
        paddingBottom: "160px",
        paddingLeft: isMobile ? "24px" : "48px",
        paddingRight: isMobile ? "24px" : "48px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto 60px" }}>
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#4A7FA7",
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
            color: "#F6FAFD",
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Projects
        </h2>
      </div>

      <div
        className="projects-stack"
        ref={containerRef}
        style={{
          position: "relative",
          height: isMobile ? "auto" : `${projects.length * 95}vh`,
        }}
      >
        {projects.map((project, index) => (
          <StickyCard
            key={project.number}
            project={project}
            index={index}
            total={projects.length}
            scrollYProgress={scrollYProgress}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
