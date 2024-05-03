import "../Header/Header.scss";
import logo from "../../assets/images/MM-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-title">
        <Link to="/">
          <img
            src={logo}
            path="/"
            alt="Maggie's Moggies Logo"
            className="header__logo"
          />
        </Link>
        <h1 className="header__title">Maggie's Moggies</h1>
      </div>
      <div className="header__signs">
        <Link to="/signup">
          <button className="header__sign-in">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="header__sign-up">Sign Up</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
