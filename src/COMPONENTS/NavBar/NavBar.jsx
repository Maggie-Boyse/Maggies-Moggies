import { Link } from "react-router-dom";
import "../NavBar/NavBar.scss";
import stitch from "../../assets/images/stitch-icon.png";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <Link to="/" className="navbar__item">
          <img src={stitch} alt="stitching" className="navbar__icon-left" />
          About
          <img src={stitch} alt="stitching" className="navbar__icon-right" />
        </Link>
        <Link to="/learn" className="navbar__item">
          <img src={stitch} alt="stitching" className="navbar__icon-left" />
          Learn to Crochet
          <img src={stitch} alt="stitching" className="navbar__icon-right" />
        </Link>
        <Link to="/communityboard" className="navbar__item">
          <img src={stitch} alt="stitching" className="navbar__icon-left" />
          Community Board
          <img src={stitch} alt="stitching" className="navbar__icon-right" />
        </Link>
        <Link to="/patterns" className="navbar__item">
          <img src={stitch} alt="stitching" className="navbar__icon-left" />
          Patterns
          <img src={stitch} alt="stitching" className="navbar__icon-right" />
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
