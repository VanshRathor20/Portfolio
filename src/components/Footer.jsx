import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { viewportOnce } from "../motionVariants";

const SOCIAL_LINKS = [
  { Icon: FiMail, href: "mailto:hello@vansh.dev", label: "Email" },
  { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: FaGithub, href: "https://github.com", label: "GitHub" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
      className="border-t border-border py-12 max-w-6xl mx-auto px-6"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex gap-6">
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, color: "#22d3ee" }}
              className="text-xl text-gray-400 transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-400 text-sm">
          Designed &amp; Built by{" "}
          <span className="text-accent font-mono">Vansh</span>
        </p>
        <p className="text-gray-600 text-xs font-mono">
          React · Tailwind · Framer Motion
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
