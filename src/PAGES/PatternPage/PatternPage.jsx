import "../PatternPage/PatternPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import SearchPatterns from "../../COMPONENTS/SearchPatterns/SearchPatterns";
import Footer from "../../COMPONENTS/Footer/Footer";

function PatternPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <SearchPatterns />
      <Footer />
    </div>
  );
}

export default PatternPage;
