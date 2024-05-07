import { Link } from "react-router-dom";
import "../NavBar/NavBar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <Link to="/" className="navbar__item">
          About
        </Link>
        <Link to="/learn" className="navbar__item">
          Learn to Crochet
        </Link>
        <Link to="/communityboard" className="navbar__item">
          Community Board
        </Link>
        <Link to="/patterns" className="navbar__item">
          Patterns
        </Link>
        {/* <Link to="/builder" className="navbar__item">
          Pattern Builder
        </Link> */}
        {/* upload pattern modal or whatever, not new page */}
      </ul>
    </div>
  );
}

export default NavBar;
