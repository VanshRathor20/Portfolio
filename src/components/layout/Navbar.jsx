import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Container from "./Container";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  const closeMobile = () => setMobileOpen(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const navLinkStyle = {
    color: "#A1A1AA",
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
    transition: "color 0.2s",
  };

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <Container className="navbar-container">
        <nav className="navbar-inner" aria-label="Main navigation">
          <span
            className="navbar-logo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              scrollTo("home");
              closeMobile();
            }}
          >
            Vansh
          </span>

          <div className="navbar-links">
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

          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "56px",
              left: 0,
              right: 0,
              background: "#0A0A0A",
              borderBottom: "1px solid #1a1a1a",
              zIndex: 999,
              padding: "16px 24px 24px",
            }}
          >
            <Container className="navbar-container">
              <div className="navbar-mobile-inner">
                {NAV_LINKS.map((link) => (
                  <span
                    key={link.id}
                    className="nav-link-mobile"
                    style={navLinkStyle}
                    onClick={() => {
                      scrollTo(link.id);
                      closeMobile();
                    }}
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
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
