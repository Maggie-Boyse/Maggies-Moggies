

import "../SearchPatterns/SearchPatterns.scss";

function SearchPatterns() {
  return (
    <section className="search">
      <h2 className="search__title">Search and Upload Patterns</h2>
      <div>
        <form className="search__form">
          <p className="search__text">
            Simultaneously search Ravelry and Maggie's Moggies for patterns!
          </p>
          <input className="search__input"></input>
          <button className="search__button">search</button>
        </form>
      </div>
    </section>
  );
}

export default SearchPatterns;