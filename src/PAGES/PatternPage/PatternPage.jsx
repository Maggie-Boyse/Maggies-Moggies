import "../PatternPage/PatternPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import SearchPatterns from "../../COMPONENTS/SearchPatterns/SearchPatterns";
import UploadPatterns from "../../COMPONENTS/UploadPatterns/UploadPatterns";
import Footer from "../../COMPONENTS/Footer/Footer";

function PatternPage() {
  return (
    <div className="patterns">
      <Header />
      <NavBar />
      <h1 className="patterns__title">Search and Upload Patterns</h1>
      <SearchPatterns />
      <UploadPatterns />
      <Footer />
    </div>
  );
}

export default PatternPage;
