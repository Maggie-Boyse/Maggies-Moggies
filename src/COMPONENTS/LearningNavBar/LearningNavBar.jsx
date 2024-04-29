import "../LearningNavBar/LearningNavBar.scss";
    
function LearningNavBar() {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <Link to="/" className="navbar__item">
          About
        </Link>
        <Link to="/learn" className="navbar__item">
          Learn to Crochet
        </Link>
        {/* <li className="navbar__item" component={Link} to="/learn">
          Learn to Crochet
        </li> */}
        <li className="navbar__item">Community Board</li>
        <li className="navbar__item">Search Patterns</li>
        {/* upload pattern modal or whatever, not new page */}
        {/* <li>Pattern Builder</li> */}
      </ul>
    </div>
  );
}

export default LearningNavBar;