import "../SearchPatterns/SearchPatterns.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const SearchPatterns = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = async () => {

    const patternsReq = await axios.get(
      `${API_URL}/patterns?keywords=${encodeURI(input)}`
    );
    const patternsData = patternsReq.data;
    setResults(patternsData);
  };
  const handleChange = (value) => {
    setInput(value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("From submitted!", input);
    fetchData();
  };
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
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            ></input>
            <button className="search__button" onClick={handleSearch}>
              search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchPatterns;
