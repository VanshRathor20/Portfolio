import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, transition, viewport } from "../../lib/motion";

const Reveal = ({
  children,
  className = "",
  delay = 0,
  as = "div",
  ...props
}) => {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Tag = as === "div" ? "div" : as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ ...transition, delay }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
