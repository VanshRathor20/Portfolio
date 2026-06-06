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
    const handleResize = () => setIsMobile(window.innerWidth < 768);
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
    color: "#B3CFE5",
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
      {/* ── DESKTOP NAVBAR ── */}
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
        {/* ✅ Liquid glass desktop navbar */}
        <div
          style={{
            background: scrolled
              ? "rgba(255, 255, 255, 0.10)" // 0.06 → 0.10
              : "rgba(255, 255, 255, 0.06)", // 0.03 → 0.06
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: scrolled
              ? "1px solid rgba(255, 255, 255, 0.18)" // 0.12 → 0.18
              : "1px solid rgba(255, 255, 255, 0.10)", // 0.06 → 0.10
            borderRadius: "22px",
            transition: "all 0.3s ease",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)"
              : "inset 0 1px 0 rgba(255,255,255,0.04)",
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

              <div
                style={{ display: "flex", alignItems: "center", gap: "34px" }}
              >
                {NAV_LINKS.map((link) => (
                  <span
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    style={navLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#B3CFE5")
                    }
                  >
                    {link.label}
                  </span>
                ))}
              </div>
            </nav>
          </Container>
        </div>
      </header>

      {/* ── MOBILE BOTTOM NAVBAR — liquid glass ── */}
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
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.10)",
            borderRadius: "9999px",
            padding: "8px 20px",
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.4),
              0 2px 8px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.08)
            `,
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
                whileTap={{ scale: 0.88 }}
                whileHover={{ scale: 1.08 }}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: isActive
                    ? "rgba(74, 127, 167, 0.55)"
                    : "rgba(255, 255, 255, 0.04)",
                  backdropFilter: isActive ? "blur(12px)" : "none",
                  WebkitBackdropFilter: isActive ? "blur(12px)" : "none",
                  border: isActive
                    ? "1px solid rgba(179, 207, 229, 0.35)"
                    : "1px solid rgba(255, 255, 255, 0.06)",
                  color: isActive ? "#F6FAFD" : "#B3CFE5",
                  cursor: "pointer",
                  boxShadow: isActive
                    ? "inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 12px rgba(74,127,167,0.3)"
                    : "none",
                  transition:
                    "background 0.25s ease, color 0.25s ease, border 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <Icon size={17} />
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
