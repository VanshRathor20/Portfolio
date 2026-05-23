import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:hello@vansh.dev", Icon: FiMail },
  { label: "GitHub", href: "https://github.com", Icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: FaLinkedin },
];

const linkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="section section-sm">
      <Container>
        <div className="contact-layout">
          <Reveal>
            <SectionHeading
              label="Contact"
              title="Get in touch"
              description="Short note is fine — tell me what you're building and your timeline."
            />
          </Reveal>

          <Reveal delay={0.06}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Alex"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="alex@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="A few lines on the role or project."
                  required
                />
              </div>

              <Button type="submit" variant="primary" className="contact-submit">
                Send
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <nav className="contact-social" aria-label="Social links">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="contact-social-link"
                  aria-label={label}
                  {...(label !== "Email" ? linkProps : {})}
                >
                  <Icon />
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
