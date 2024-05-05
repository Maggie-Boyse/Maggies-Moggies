import "../SearchPatterns/SearchPatterns.scss";
import { API_URL } from "../../utils/api";
import { useParams } from "react-router-dom";
import URLSearchParams from "url-search-params";


function SearchPatterns() {
  // Retrieve params via url.search, passed into constructor
  const url = new URL("https://example.com?foo=1&bar=2");

const params1 = new URLSearchParams(url.search);

// Get the URLSearchParams object directly from a URL object
const params1a = url.searchParams;

// Pass in a string literal
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

// Pass in a sequence of pairs
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);

// Pass in a record
const params4 = new URLSearchParams({ foo: "1", bar: "2" });

  return (
    <section className="search">
      <div>
        <form className="search__form">
          <label className="search__text" htmlFor="search__input">
            Simultaneously search Ravelry and Maggie's Moggies for patterns!
          </label>
          <div className="search__input-button">
            <input
              className="search__input"
              placeholder="Try, 'dish sponge'"
            ></input>
            <button className="search__button">search</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchPatterns;
