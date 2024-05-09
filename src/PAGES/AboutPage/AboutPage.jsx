import "../AboutPage/AboutPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import Footer from "../../COMPONENTS/Footer/Footer";
import AboutSection from "../../COMPONENTS/AboutSection/AboutSection";
import yarnball from "../../assets/images/yarn-ball.png";
// import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="about-page">
      <Header />
      <NavBar />
      <AboutSection />
      <Footer />
      <a href="https://dictionary.cambridge.org/dictionary/english/moggy">
        <img
          src={yarnball}
          className="about-page__yarnball"
          target="_blank"
          alt="secret yarnball"
          // rel="noopener"
          rel="noreferrer"
        />
      </a>
    </div>
  );
}

export default SignUpPage;
