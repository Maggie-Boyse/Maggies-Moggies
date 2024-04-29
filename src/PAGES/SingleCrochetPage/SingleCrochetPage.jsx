import "../SingleCrochetPage/SingleCrochetPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import Footer from "../../COMPONENTS/Footer/Footer";
import SingleCrochet from "../../COMPONENTS/SingleCrochet/SingleCrochet";
import LearningNavBar from "../../COMPONENTS/LearningNavBar/LearningNavBar";

function SingleCrochetPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <LearningNavBar />
      <SingleCrochet />
      <Footer />
    </div>
  );
}

export default SingleCrochetPage;