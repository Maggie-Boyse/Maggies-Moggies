import "../SearchPatterns/SearchPatterns.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const SearchPatterns = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = async (value) => {
    await axios.fetch(`${API_URL}/patterns`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((pattern) => {
          return (
            value &&
            pattern &&
            pattern.patten_title &&
            pattern.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
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
            <button className="search__button">search</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchPatterns;
