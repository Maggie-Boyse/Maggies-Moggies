import "../PatternPage/PatternPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import SearchPatterns from "../../COMPONENTS/SearchPatterns/SearchPatterns";
import PatternItem from "../../COMPONENTS/PatternItem/PatternItem";
import Footer from "../../COMPONENTS/Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PatternPage() {
  const { patternId } = useParams();
  const [patternsData, setPatternsData] = useState([]);
  const [patternList, setPatternList] = useState([]);

  const fetchPatterns = async () => {
    const patternsReq = await axios.get(`${API_URL}/patterns`);
    const patternsData = patternsReq.data;
    setPatternList(patternsData);
    setPatternsData(patternsData);
  };
  useEffect(() => {
    fetchPatterns();
  }, [patternId]);
  if (patternsData.length === 0) {
    return <p>... Loading Pattern details ...</p>;
  }
  const patternToLoad = patternId ? patternId : patternList[0].id;

  return (
    <div className="patterns">
      <Header />
      <NavBar />
      <h1 className="patterns__title">Search and Upload Patterns</h1>
      <SearchPatterns />
      <Link to="/upload" className="patterns__item">
        Upload Here{" "}
      </Link>

      {patternsData.map((pattern) => (
        <PatternItem
          key={pattern.id}
          pattern={pattern}
          patternToLoad={patternToLoad}
        />
      ))}
      <Footer />
    </div>
  );
}

export default PatternPage;
