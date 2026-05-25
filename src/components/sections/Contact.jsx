import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
    e.target.reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div
        className="contact-layout"
        style={{
          gap: "80px",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "96px 48px",
        }}
      >
        {/* LEFT SIDE */}
        <div className="contact-left" style={{ flex: "1" }}>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              color: "#7C3AED",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            CONTACT
          </p>

          <h2
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "800",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
              margin: 0,
              marginBottom: "32px",
            }}
          >
            <span style={{ color: "#F0F0F0" }}>Let's work</span>
            <br />
            <span style={{ color: "#7C3AED" }}>together.</span>
          </h2>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#555",
              fontSize: "14px",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Open to full-time roles and freelance projects. Drop me a message
            and I'll get back within 24 hours.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=vanshkumar5887.work@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "13px",
              color: "#7C3AED",
              textDecoration: "none",
              display: "block",
              marginBottom: "40px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7C3AED")}
          >
            vanshkumar5887.work@gmail.com ↗
          </a>

          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="https://mail.google.com/mail/?view=cm&to=vanshkumar5887.work@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7C3AED")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <FiMail size={20} />
            </a>

            <a
              href="https://github.com/VanshRathor20"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/vansh-kumar-20-codes"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0A66C2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/vansh_rathor_20/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://leetcode.com/u/Vansh_Rathor/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#444",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFA116")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right" style={{ flex: "1.2" }}>
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="name"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  color: "#444",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                style={{
                  width: "100%",
                  background: "#0a0a0a",
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  color: "#F0F0F0",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1e1e1e")}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  color: "#444",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                style={{
                  width: "100%",
                  background: "#0a0a0a",
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  color: "#F0F0F0",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1e1e1e")}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="message"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "12px",
                  color: "#444",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                style={{
                  width: "100%",
                  background: "#0a0a0a",
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  color: "#F0F0F0",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#7C3AED")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1e1e1e")}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "14px",
                background: "#7C3AED",
                border: "none",
                borderRadius: "10px",
                color: "white",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#6D28D9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#7C3AED")
              }
            >
              {status === "success" ? "Message Sent ✓" : "Send Message →"}
            </button>

            {status === "success" && (
              <p
                style={{
                  color: "#34d399",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  marginTop: "12px",
                  letterSpacing: "0.1em",
                }}
              >
                ✓ I'll get back to you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
