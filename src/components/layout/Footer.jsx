import Container from "./Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-inner">
          <p className="site-footer-copy">© {year} Vansh</p>
          <p className="site-footer-note">React · Vite · CSS</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
