import "../LearningNavBar/LearningNavBar.scss";
import { Link } from "react-router-dom";

function LearningNavBar() {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <Link to="/learn" className="navbar__item">
          Slipknot & Chain
        </Link>
        <Link to="/singlecrochet" className="navbar__item">
          Single Crochet
        </Link>
        <Link to="/doublecrochet" className="navbar__item">
          Double Crochet
        </Link>
      </ul>
    </div>
  );
}

export default LearningNavBar;
