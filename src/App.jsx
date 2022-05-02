import Narbar from "./components/Narbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
//Pages
import { Introduction } from "./pages/Introduction";
import { AboutMe } from "./pages/AboutMe";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
//styles
import "./App.scss";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? `nav-toggle` : ``}`}>
        <Narbar />
      </div>
      <div className="nav-botton" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
