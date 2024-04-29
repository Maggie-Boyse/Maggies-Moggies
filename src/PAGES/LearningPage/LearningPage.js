import "../LearningPage/LearningPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import Footer from "../../COMPONENTS/Footer/Footer";
import Chaining from "../../COMPONENTS/Chaining/Chaining";
import DoubleCrochet from "../../COMPONENTS/DoubleCrochet/DoubleCrochet";
import LearningNavBar from "../../COMPONENTS/LearningNavBar/LearningNavBar";

function LearningPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <LearningNavBar />
      <Chaining />
      <Footer />
    </div>
  );
}

export default LearningPage;
