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
                    color: "#F0F0F0",
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
                    color: "#555",
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
              <h3 className="text-subheading">I build things for the web.</h3>

              <p className="text-body-lg" style={{ color: "#A1A1AA" }}>
                I'm Vansh Rathor, a Full Stack Developer passionate about
                building modern, scalable, and interactive web applications with
                clean design and smooth user experiences.
              </p>

              <p className="text-body" style={{ color: "#A1A1AA" }}>
                I enjoy creating visually engaging digital products using React,
                JavaScript, Node.js, and modern frontend technologies. Currently
                pursuing B.Tech at IIMT Engineering College, Meerut - graduating
                2027.
              </p>

              <p className="text-body" style={{ color: "#A1A1AA" }}>
                Previously built official websites for Tyrano Softwares during a
                1-year internship. I care about every detail - from clean code
                to smooth animations.
              </p>

              <a
                href="/resume.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "28px",
                  border: "1px solid #2a2a2a",
                  borderRadius: "999px",
                  padding: "10px 20px",
                  color: "#666",
                  fontSize: "10px",
                  fontFamily: "JetBrains Mono, monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#7C3AED";
                  e.currentTarget.style.color = "#A78BFA";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.color = "#666";
                }}
              >
                ↓ Download Resume
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
