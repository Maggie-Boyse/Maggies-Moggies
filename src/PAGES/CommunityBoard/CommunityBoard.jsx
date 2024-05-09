import "../CommunityBoard/CommunityBoard.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import UploadPost from "../../COMPONENTS/UploadPost/Uploadpost";
import CommBoard from "../../COMPONENTS/CommBoard/CommBoard";
import Footer from "../../COMPONENTS/Footer/Footer";

function CommunityBoard() {
  return (
    <div className="board">
      <Header />
      <NavBar />
      <h2 className="board__title">Posts From Our Community!</h2>
      <CommBoard />
      <UploadPost />
      <Footer />
    </div>
  );
}

export default CommunityBoard;
