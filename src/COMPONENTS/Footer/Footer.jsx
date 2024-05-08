import "../Footer/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer__item"
        href="https://www.instagram.com/maggiesmoggies/"
        target="_blank"
        // rel="noopener"
        rel="noreferrer"
      >
        Instagram
      </a>
      <a
        className="footer__item"
        href="https://www.ravelry.com/"
        target="_blank"
        // rel="noopener"
        rel="noreferrer"
      >
        Ravelry
      </a>
    </footer>
  );
}

export default Footer;
