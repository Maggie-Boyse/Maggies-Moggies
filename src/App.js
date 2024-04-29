import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./PAGES/AboutPage/AboutPage";
import LearningPage from "./PAGES/LearningPage/LearningPage";
import SingleCrochetPage from "./PAGES/SingleCrochetPage/SingleCrochetPage";
import DoubleCrochetPage from "./PAGES/DoubleCrochetPage/DoubleCrochetPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/learn" element={<LearningPage />} />
        <Route path="/singlecrochet" element={<SingleCrochetPage />} />
        <Route path="/doublecrochet" element={<DoubleCrochetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
