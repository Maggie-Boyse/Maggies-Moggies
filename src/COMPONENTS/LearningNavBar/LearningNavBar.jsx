import "../LearningNavBar/LearningNavBar.scss";
import { Link } from "react-router-dom";

function LearningNavBar() {
  return (
    <div className="learn-navbar">
      <ul className="learn-navbar__list">
        <Link to="/learn" className="learn-navbar__item">
          Slipknot & Chain
        </Link>
        <Link to="/singlecrochet" className="learn-navbar__item">
          Single Crochet
        </Link>
        <Link to="/doublecrochet" className="learn-navbar__item">
          Double Crochet
        </Link>
      </ul>
    </div>
  );
}

export default LearningNavBar;
