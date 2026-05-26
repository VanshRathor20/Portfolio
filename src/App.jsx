import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import ScrollToTop from "./components/ScrollToTop";
import SkeletonLoader from "./components/ui/SkeletonLoader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.main
            key="skeleton"
            className="bg-matte"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <SkeletonLoader />
          </motion.main>
        ) : (
          <motion.main
            key="content"
            className="bg-matte"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
