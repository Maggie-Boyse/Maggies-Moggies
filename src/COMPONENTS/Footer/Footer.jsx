import "../Footer/Footer.scss";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer__item"
        href="https://www.instagram.com/maggiesmoggies/"
        target="_blank"
        rel="noopener"
      >
        Instagram
      </a>
      <a
        className="footer__item"
        href="https://www.ravelry.com/"
        target="_blank"
        rel="noopener"
      >
        Ravelry
      </a>
    </footer>
  );
}

export default Footer;
