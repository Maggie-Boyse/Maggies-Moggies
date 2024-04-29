import "../LearningPage/LearningPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import Footer from "../../COMPONENTS/Footer/Footer";
import Chaining from "../../COMPONENTS/Chaining/Chaining";
import SingleCrochet from "../../COMPONENTS/SingleCrochet/SingleCrochet";
import DoubleCrochet from "../../COMPONENTS/DoubleCrochet/DoubleCrochet";

function LearningPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Chaining />
      <SingleCrochet />
      <DoubleCrochet />
      <Footer />
    </div>
  );
}

export default LearningPage;
