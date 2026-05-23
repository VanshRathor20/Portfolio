import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const NavLink = ({ href, label, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-sm text-gray-300 hover:text-white transition-colors py-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      {hovered && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-accent"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </a>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-accent text-lg font-medium tracking-tight">
          Vansh
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-2xl text-gray-300 hover:text-accent transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-black/90 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} {...link} onClick={closeMobile} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
