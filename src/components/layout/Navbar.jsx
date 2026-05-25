import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Container from "./Container";
import logo from "../../assets/logo.png";

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
                style={{ width: "200px", height: "100px", objectFit: "contain" }}
              />
            </span>

            {/* DESKTOP LINKS */}
            <div
              className="navbar-links"
              style={{
                display: "flex",
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

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                display: "none",
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
              padding: "24px",
            }}
          >
            <div
              className="navbar-mobile-inner"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
              }}
            >
              {NAV_LINKS.map((link) => (
                <span
                  key={link.id}
                  className="nav-link-mobile"
                  style={{
                    color: "#A1A1AA",
                    fontSize: "15px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
