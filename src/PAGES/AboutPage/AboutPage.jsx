import "../AboutPage/AboutPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import Footer from "../../COMPONENTS/Footer/Footer";
import AboutSection from "../../COMPONENTS/AboutSection/AboutSection";

function AboutPage() {
  return (
    <div className="aboutpage">
      <Header />
      <NavBar />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default AboutPage;
