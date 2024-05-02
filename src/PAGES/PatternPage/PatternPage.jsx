import "../PatternPage/PatternPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import SearchPatterns from "../../COMPONENTS/SearchPatterns/SearchPatterns";
import Footer from "../../COMPONENTS/Footer/Footer";
import { Link } from "react-router-dom";

function PatternPage() {
  return (
    <div className="patterns">
      <Header />
      <NavBar />
      <h1 className="patterns__title">Search and Upload Patterns</h1>
      <SearchPatterns />
      <Link to="/upload" className="navbar__item">
        Upload Here
      </Link>
      <Footer />
    </div>
  );
}

export default PatternPage;
