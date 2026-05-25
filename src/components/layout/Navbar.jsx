import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import logo from "../../assets/logo.png";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const ICONS = {
  home: FaHome,
  about: FaUser,
  skills: FaCode,
  projects: FaProjectDiagram,
  experience: FaBriefcase,
  contact: FaEnvelope,
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
  };

  const navLinkStyle = {
    position: "relative",
    color: "#A1A1AA",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
    transition: "all 0.3s ease",
    paddingBottom: "4px",
  };

  return (
    <>
      {/* ── DESKTOP NAVBAR (top, hidden on mobile) ── */}
      <header
        className="hidden md:block"
        style={{
          position: "fixed",
          top: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 48px)",
          maxWidth: "1220px",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            background: scrolled
              ? "rgba(10,10,10,0.75)"
              : "rgba(10,10,10,0.55)",
            backdropFilter: "blur(14px)",
            border: scrolled
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(255,255,255,0.05)",
            borderRadius: "22px",
            transition: "all 0.3s ease",
            boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.35)" : "none",
          }}
        >
          <Container className="navbar-container">
            <nav
              aria-label="Main navigation"
              style={{
                height: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Logo */}
              <span
                onClick={() => scrollTo("home")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={logo}
                  alt="Vansh logo"
                  style={{
                    width: "200px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </span>

              {/* Desktop links */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "34px" }}
              >
                {NAV_LINKS.map((link) => (
                  <span
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    style={navLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#A1A1AA";
                    }}
                  >
                    {link.label}
                  </span>
                ))}
              </div>
            </nav>
          </Container>
        </div>
      </header>

      {/* ── MOBILE BOTTOM NAVBAR (visible only on mobile) ── */}
      {isMobile && (
        <motion.nav
          className="md:hidden"
          aria-label="Mobile navigation"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "12px",
            right: "12px",
            zIndex: 1000,
            background: "rgba(12,12,12,0.92)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "9999px",
            padding: "10px 12px",
            display: "flex",
            gap: "6px",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 8px 32px rgba(0,0,0,0.55)",
            maxWidth: "calc(100% - 24px)",
          }}
        >
          {NAV_LINKS.map((link) => {
            const Icon = ICONS[link.id];
            const isActive = activeId === link.id;

            return (
              <motion.button
                key={link.id}
                type="button"
                aria-label={link.label}
                title={link.label}
                onClick={() => scrollTo(link.id)}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: isActive
                    ? "rgba(139,92,246,0.85)"
                    : "rgba(255,255,255,0.05)",
                  border: isActive
                    ? "1px solid rgba(139,92,246,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                  color: isActive ? "#fff" : "#a1a1aa",
                  cursor: "pointer",
                  transition:
                    "background 0.25s ease, color 0.25s ease, border 0.25s ease",
                }}
              >
                <Icon size={16} />
                <span className="sr-only">{link.label}</span>
              </motion.button>
            );
          })}
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
