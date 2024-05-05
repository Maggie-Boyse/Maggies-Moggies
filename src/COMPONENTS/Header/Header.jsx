import "../Header/Header.scss";
import logo from "../../assets/images/MM-logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Header() {
  const [userHeader, setUserHeader] = useState(null);

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    const decoded = jwtDecode(authToken);
    const currentDate = new Date();
    if (authToken === null || undefined) {
      return;
    }
    if (decoded.exp * 1000 < currentDate.getTime()) {
      setUserHeader(null);
      localStorage.removeItem("username");
      localStorage.removeItem("authToken");
      console.log("Token expired");
    } else {
      setUserHeader(decoded.username);
      console.log("Token NOT expired");
    }
  }, [authToken]);

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
      {userHeader ? (
        <div className="user-header__user">
          <p>Welcome {userHeader}</p>
        </div>
      ) : (
        <div className="header__signs">
          <Link to="/signup">
            <button className="header__sign-in">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="header__sign-up">Sign Up</button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
