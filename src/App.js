import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./PAGES/AboutPage/AboutPage";
import LearningPage from "./PAGES/LearningPage/LearningPage";
import SingleCrochetPage from "./PAGES/SingleCrochetPage/SingleCrochetPage";
import DoubleCrochetPage from "./PAGES/DoubleCrochetPage/DoubleCrochetPage";
import PatternPage from "./PAGES/PatternPage/PatternPage";
import UploadPatternPage from "./PAGES/UploadPatternPage/UploadPatternPage";
import CommunityBoard from "./PAGES/CommunityBoard/CommunityBoard";
import SignUpPage from "./PAGES/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/learn" element={<LearningPage />} />
        <Route path="/singlecrochet" element={<SingleCrochetPage />} />
        <Route path="/doublecrochet" element={<DoubleCrochetPage />} />
        <Route path="/patterns" element={<PatternPage />} />
        <Route path="/upload" element={<UploadPatternPage />} />
        <Route path="/communityboard" element={<CommunityBoard />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
