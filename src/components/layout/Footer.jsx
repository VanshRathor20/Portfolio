import { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid #2a4a6b",
        padding: isMobile ? "40px 48px 100px" : "40px 48px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* LEFT */}
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            color: "#B3CFE5",
            letterSpacing: "0.05em",
          }}
        >
          © {year} Vansh
        </p>

        {/* CENTER — Social icons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {[
            {
              Icon: FiMail,
              href: "https://mail.google.com/mail/?view=cm&to=vanshkumar5887.work@gmail.com",
              hover: "#4A7FA7",
            },
            {
              Icon: FaGithub,
              href: "https://github.com/VanshRathor20",
              hover: "#fff",
            },
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/in/vansh-kumar-20-codes",
              hover: "#0A66C2",
            },
            {
              Icon: FaInstagram,
              href: "https://www.instagram.com/vansh_rathor_20/",
              hover: "#E1306C",
            },
            {
              Icon: SiLeetcode,
              href: "https://leetcode.com/u/Vansh_Rathor/",
              hover: "#FFA116",
            },
          ].map(({ Icon, href, hover }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#B3CFE5",
                transition: "color 0.2s",
                display: "flex",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = hover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#B3CFE5")}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* RIGHT
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            color: "#333",
            letterSpacing: "0.05em",
          }}
        >
          Built with React · Vite · CSS
        </p> */}
      </div>

      {/* SMALL SIGNATURE */}
      <div
        style={{
          color: "#fff",
          padding: "2px 0",
          textAlign: "center",
          marginTop: "6px",
        }}
      >
        <span
          style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "13px" }}
        >
          &lt;/&gt; with ❤️ by Vansh
        </span>
      </div>
    </footer>
  );
};

export default Footer;
