import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./PAGES/AboutPage/AboutPage";
import LearningPage from "./PAGES/LearningPage/LearningPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/learn" element={<LearningPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
