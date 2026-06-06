import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import {
  fadeUp,
  staggerContainer,
  transition,
  viewport,
} from "../../lib/motion";

const STATS = [
  { value: "1+", label: "Year of Experience" },
  { value: "5+", label: "Projects Shipped" },
  { value: "10+", label: "Technologies Used" },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section about-section">
      <Container>
        <Reveal>
          <SectionHeading label="ABOUT" title="I build things for the web." />
        </Reveal>

        <div
          className="about-layout"
          style={{ display: "flex", flexDirection: "row", gap: "48px" }}
        >
          <motion.div
            className="about-left about-stats"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reduceMotion ? undefined : staggerContainer}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "45%",
            }}
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card surface-interactive"
                variants={reduceMotion ? undefined : fadeUp}
                transition={{ ...transition, delay: index * 0.05 }}
                style={{ padding: "28px 24px", borderRadius: "16px" }}
              >
                <p
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: "48px",
                    fontWeight: "800",
                    color: "#F6FAFD",
                    letterSpacing: "-0.03em",
                    lineHeight: "1",
                    margin: 0,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    marginTop: "8px",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "11px",
                    color: "#B3CFE5",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="about-right" style={{ width: "55%" }}>
            <Reveal delay={0.08} className="about-bio">
              <h3 className="text-subheading">
                Full Stack Developer focused on clean UI & scalable systems.
              </h3>

              <p className="text-body-lg" style={{ color: "#B3CFE5" }}>
                I'm Vansh, a Full Stack Developer passionate about building
                fast, scalable, and visually polished web applications.
              </p>

              <p className="text-body" style={{ color: "#B3CFE5" }}>
                I specialize in creating responsive user experiences using
                React, JavaScript, Node.js, and modern frontend technologies.
              </p>

              <p className="text-body" style={{ color: "#B3CFE5" }}>
                Currently pursuing B.Tech in Computer Science at IIMT
                Engineering College, Meerut (2023 – 2027). Previously worked as
                a Frontend Developer Intern at Tyrano Softwares.
              </p>

              {/* ✅ Rotating border Download Resume button */}
              <div
                style={{
                  position: "relative",
                  display: "inline-flex",
                  marginTop: "28px",
                  borderRadius: "999px",
                  padding: "1.5px",
                  background: "conic-gradient(from var(--angle, 0deg), transparent 20%, #B3CFE5 40%, #4A7FA7 50%, #B3CFE5 60%, transparent 80%)",
                  animation: "rotateBorder 3s linear infinite",
                  width: "fit-content",
                }}
                className="btn-animated-wrapper"
              >
                <a
                  href="/resume.pdf"
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "999px",
                    padding: "10px 20px",
                    background: "#0A1931",
                    color: "#B3CFE5",
                    fontSize: "10px",
                    fontFamily: "JetBrains Mono, monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F6FAFD";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#B3CFE5";
                  }}
                >
                  ↓ Download Resume
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;