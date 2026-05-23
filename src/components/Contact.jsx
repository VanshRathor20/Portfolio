import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  staggerContainer,
  fadeSlideUp,
  viewportOnce,
} from "../motionVariants";

const SOCIAL_LINKS = [
  { Icon: FiMail, href: "mailto:hello@vansh.dev", label: "Email" },
  { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: FaGithub, href: "https://github.com", label: "GitHub" },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-2">Let&apos;s Build Something</h2>
        <div className="w-16 h-1 bg-accent mt-2 mb-12 mx-auto" />

        <motion.form
          onSubmit={handleSubmit}
          className="text-left space-y-5"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "you@email.com" },
          ].map((field) => (
            <motion.div key={field.id} variants={fadeSlideUp}>
              <label htmlFor={field.id} className="block text-sm text-gray-400 mb-2">
                {field.label}
              </label>
              <motion.input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                whileFocus={{
                  borderColor: "#22d3ee",
                  boxShadow: "0 0 20px rgba(34,211,238,0.15)",
                }}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-accent"
              />
            </motion.div>
          ))}

          <motion.div variants={fadeSlideUp}>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <motion.textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              whileFocus={{
                borderColor: "#22d3ee",
                boxShadow: "0 0 20px rgba(34,211,238,0.15)",
              }}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none resize-none transition-colors focus:border-accent"
            />
          </motion.div>

          <motion.button
            type="submit"
            variants={fadeSlideUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34,211,238,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg bg-accent text-black font-semibold"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          className="flex justify-center gap-6 mt-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={fadeSlideUp}
              whileHover={{ scale: 1.2, color: "#22d3ee" }}
              className="text-2xl text-gray-400 transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
