import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Introduction = () => {
  useEffect(() => {
    document.title = "Introduction";
  }, []);
  return (
    <div className="Introduction">
      <header className="hero-section">
        <h1> Hi, I am</h1>
        <div className="hero-text">
          <h1>Slan Chong</h1>
        </div>
        <p className="hero-sub-text">and this is my portfolio...</p>
      </header>
      <div className="intro-content">
        <div className="header">
          <h2>ABOUT THIS SITE</h2>
          <h5>React application written with modern javascript.</h5>
        </div>
        <div className="info">
          <p>
            Welcome to my website. I make a stuff which are pretty and
            responsive. Please feel free to read{" "}
            <NavLink to="/about-me">
              <span>about me</span>
            </NavLink>
            , or you can check out my{" "}
            <NavLink to="/skills">
              <span>skills</span>
            </NavLink>
            ,{" "}
            <NavLink to="/projects">
              <span>projects</span>
            </NavLink>
            , or contact me.
          </p>
        </div>
      </div>
    </div>
  );
};
