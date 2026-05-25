import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleBreakpointChange = (event) => {
      if (event.matches) {
        setMobileOpen(false);
      }
    };

    handleBreakpointChange(mediaQuery);
    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () =>
      mediaQuery.removeEventListener("change", handleBreakpointChange);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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
    <header
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
          background: scrolled ? "rgba(10,10,10,0.75)" : "rgba(10,10,10,0.55)",

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
            className="navbar-inner"
            aria-label="Main navigation"
            style={{
              height: "72px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* LOGO */}
            <span
              className="navbar-logo"
              onClick={() => {
                scrollTo("home");
                closeMobile();
              }}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
              }}
            >
              {/* Logo Icon */}
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

            {/* DESKTOP LINKS (labels only) */}
            <div
              className="navbar-links hidden md:flex"
              style={{
                alignItems: "center",
                gap: "34px",
              }}
            >
              {NAV_LINKS.map((link) => (
                <span
                  key={link.id}
                  className="nav-link"
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

            {/* MOBILE TOGGLE (visible only on small screens) */}
            <button
              type="button"
              className="navbar-toggle md:hidden p-2 rounded-md"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {mobileOpen ? (
                <RiCloseLine size={24} />
              ) : (
                <RiMenuLine size={24} />
              )}
            </button>
          </nav>
        </Container>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            style={{
              marginTop: "12px",
              background: "rgba(10,10,10,0.92)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              padding: "18px 20px",
            }}
          >
            <div
              className="navbar-mobile-inner"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "14px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              {NAV_LINKS.map((link) => {
                const Icon = ICONS[link.id];

                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => {
                      scrollTo(link.id);
                      closeMobile();
                    }}
                    aria-label={link.label}
                    title={link.label}
                    className="mobile-nav-icon"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "9999px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.04)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "#fff",
                      cursor: "pointer",
                      transition: "transform 180ms ease, box-shadow 180ms ease",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-3px) scale(1.04)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(0,0,0,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow =
                        "0 6px 18px rgba(0,0,0,0.35)";
                    }}
                  >
                    <Icon size={18} />
                    <span className="sr-only">{link.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
