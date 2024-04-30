import "../SearchPatterns/SearchPatterns.scss";

function SearchPatterns() {
  return (
    <section className="search">
      <div>
        <form className="search__form">
          <p className="search__text">
            Simultaneously search Ravelry and Maggie's Moggies for patterns!
          </p>
          <div className="search__input-button">
            <input
              className="search__input"
              placeholder="Try, 'dish sponge'"
            ></input>
            <button className="search__button">search</button>
          </div>
        </form>
        {/* <div className="pattern-return"></div> */}
      </div>
    </section>
  );
}

export default SearchPatterns;
