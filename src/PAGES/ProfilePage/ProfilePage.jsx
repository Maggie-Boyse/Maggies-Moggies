import "../AboutPage/AboutPage.scss";
import Header from "../../COMPONENTS/Header/Header";
import NavBar from "../../COMPONENTS/NavBar/NavBar";
import Footer from "../../COMPONENTS/Footer/Footer";
import ProfileSection from "../../COMPONENTS/ProfileSection/ProfileSection";

function ProfilePage() {
  return (
    <div className="aboutpage">
      <Header />
      <NavBar />
      <ProfileSection />
      <Footer />
    </div>
  );
}

export default ProfilePage;
