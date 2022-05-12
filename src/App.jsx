import Narbar from "./components/Narbar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//Pages
import { Introduction } from "./pages/Introduction";
import { AboutMe } from "./pages/AboutMe";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
//styles
import "./App.scss";
import { SKILLS } from "./config/config";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  const catchImages = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  };
  useEffect(() => {
    try {
      SKILLS.map((skill) => catchImages(skill.src));
      catchImages(process.env.PUBLIC_URL + "/img/avatar2.png");
    } catch (e) {
      console.log(e);
    }
  }, []);
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
