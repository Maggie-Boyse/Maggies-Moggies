import "./App.css";
import Header from "./COMPONENTS/Header/Header";
import Footer from "./COMPONENTS/Footer/Footer";
import NavBar from "./COMPONENTS/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <NavBar />
        <Footer />
      </header>
    </div>
  );
}

export default App;
