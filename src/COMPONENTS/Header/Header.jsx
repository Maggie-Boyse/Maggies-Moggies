import "../Header/Header.scss";
import logo from "../../assets/images/MM-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { API_URL } from "../../utils/api";
// import axios from "axios";

function Header() {
  const [userHeader, setUserHeader] = useState();
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");
  if (authToken === null) {
    return navigate("/");
  } if authToken 
  
  // localStorage.getItem("username", loginRes.data.username);

  // fetch auth token from local Storage
  // if auth token exists, decode
  // check expiration of auth token
  // if expired, delete auth token and username from localStorage
  // else, show username in header

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
