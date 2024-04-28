import "../NavBar/NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">About</li>
        <li className="navbar__item">Learn to Crochet</li>
        <li className="navbar__item">Community Board</li>
        <li className="navbar__item">Search Patterns</li>
        {/* upload pattern modal or whatever, not new page */}
        {/* <li>Pattern Builder</li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
