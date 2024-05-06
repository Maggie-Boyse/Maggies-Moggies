import "../PatternPage/PatternPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import SearchPatterns from "../../COMPONENTS/SearchPatterns/SearchPatterns";
import PatternItem from "../../COMPONENTS/PatternItem/PatternItem";
import Footer from "../../COMPONENTS/Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function PatternPage() {
  const [results, setResults] = useState([]);

  return (
    <div className="patterns">
      <Header />
      <NavBar />
      <h1 className="patterns__title">Search and Upload Patterns</h1>
      <SearchPatterns setResults={setResults} />

      <Link to="/upload" className="patterns__upload">
        Upload Here{" "}
      </Link>

      {results.map((pattern) => (
        <PatternItem
          key={pattern.id}
          pattern={pattern}
          patternToLoad={pattern.id}
        />
      ))}

      <Footer />
    </div>
  );
}

export default PatternPage;
