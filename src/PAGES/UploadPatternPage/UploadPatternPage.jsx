import "../PatternPage/PatternPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import UploadPatterns from "../../COMPONENTS/UploadPatterns/UploadPatterns";
import Footer from "../../COMPONENTS/Footer/Footer";

function UploadPatternPage() {
  return (
    <div className="patterns">
      <Header />
      <NavBar />
      <h1 className="patterns__title">Upload Patterns</h1>
      <UploadPatterns />
      <Footer />
    </div>
  );
}

export default UploadPatternPage;
