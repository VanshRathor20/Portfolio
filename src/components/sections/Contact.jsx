import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="section section-sm contact-section">
      <Container>
        <div className="contact-layout">
          <Reveal>
            <SectionHeading
              label="Contact"
              title="Get in touch"
              description="Short note is fine — tell me what you're building and your timeline."
            />
          </Reveal>

          <Reveal delay={0.06}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Alex"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="alex@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="A few lines on the role or project."
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="contact-submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "transparent",
                  border: "1px solid #7C3AED",
                  borderRadius: "10px",
                  color: "#A78BFA",
                  fontSize: "13px",
                  fontFamily: "JetBrains Mono, monospace",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#7C3AED";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#A78BFA";
                }}
              >
                Send
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="contact-social-icons"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "28px",
                paddingTop: "32px",
                borderTop: "1px solid #1a1a1a",
                marginTop: "40px",
              }}
            >
              <a
                href="https://mail.google.com/mail/?view=cm&to=vanshkumar5887.work@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#555", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <FiMail size={20} />
              </a>

              <a
                href="https://github.com/VanshRathor20"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#555", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/vansh-kumar-20-codes"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#555", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0A66C2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/vansh_rathor_20/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#555", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://leetcode.com/u/Vansh_Rathor/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#555", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFA116")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <SiLeetcode size={20} />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
