import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "#1A3D63",
            border: "1px solid #4A7FA7",
            color: "#4A7FA7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 999,
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#4A7FA7";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.boxShadow =
              "0 0 12px rgba(74, 127, 167, 0.9), 0 0 28px rgba(74, 127, 167, 0.6)";
            e.currentTarget.style.borderColor = "rgba(74, 127, 167, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1A3D63";
            e.currentTarget.style.color = "#4A7FA7";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = "#4A7FA7";
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
