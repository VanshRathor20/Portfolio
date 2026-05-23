import { useState, useEffect } from "react";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import Container from "./Container";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <Container>
        <nav className="navbar-inner" aria-label="Main navigation">
          <a href="#hero" className="navbar-logo" onClick={closeMobile}>
            Vansh
          </a>

          <div className="navbar-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <HiXMark size={22} />
            ) : (
              <HiOutlineBars3 size={22} />
            )}
          </button>
        </nav>
      </Container>

      <div className={`navbar-mobile ${mobileOpen ? "is-open" : ""}`}>
        <Container>
          <div className="navbar-mobile-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-mobile"
                onClick={closeMobile}
              >
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
