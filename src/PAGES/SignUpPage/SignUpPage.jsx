import "../AboutPage/AboutPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import Footer from "../../COMPONENTS/Footer/Footer";
import SignUp from "../../COMPONENTS/SignUp/SignUp";
import SignIn from "../../COMPONENTS/SignIn/SignIn";

function AboutPage() {
  return (
    <div className="aboutpage">
      <Header />
      <NavBar />
      <SignUp />
      <SignIn />
      <Footer />
    </div>
  );
}

export default AboutPage;
