import "../Header/Header.scss";
import logo from "../../assets/images/MM-logo.png";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { jwtDecode } from "jwt-decode";

function Header() {
  // const [userHeader, setUserHeader] = useState(false);
  // const [header, setHeader] = useState(Boolean);

  // const username = localStorage.getItem("username");
  // // const navigate = useNavigate();

  // const authToken = localStorage.getItem("authToken");
  // const decoded = jwtDecode(authToken);
  // console.log(decoded);
  // if (localStorage.getItem("authToken") === null) {
  //   setHeader(true);

  //   if (decoded.exp * 1000 < new Date().getTime()) {
  //     localStorage.clear();
  //     console.log("Time Expired");
  //     setHeader(true);
  //   } else {
  //     setHeader(false);
  //     setUserHeader(true);
  //   }

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
      {/* {header && ( */}
      <div className="header__signs">
        <Link to="/signup">
          <button className="header__sign-in">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="header__sign-up">Sign Up</button>
        </Link>
      </div>
      {/* )}
        {userHeader && (
          <div className="user-header__user">
            <p>Welcome {username}</p>
          </div>
        )} */}
    </header>
  );
}
// }

export default Header;
