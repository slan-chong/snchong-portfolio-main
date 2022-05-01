import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaMailBulk, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function Narbar() {
<<<<<<< HEAD
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={process.env.PUBLIC_URL + "/img/avatar.png"} alt="" />
=======
    return (
        <div className="NavBar">
            <nav className="nav"> 
                <div className="profile">
                    <img src={process.env.PUBLIC_URL +'/img/avatar.png'} alt="" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/#" activeclassname="active">
                            Introduction
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about-me" activeclassname="active">
                            About Me
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/skills" activeclassname="active">
                            Skills
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" activeclassname="active">
                            Projects
                        </NavLink>
                    </li>
                </ul>
                <div className="icons">
                    <a href="https://www.facebook.com/w10245123/"><FaFacebook className="icon fb"/></a>
                    <a href="https://twitter.com/slan1024"><FaTwitter className="icon twi"/></a>
                    <a href="https://wa.me/85296552105"><FaWhatsapp className="icon ws"/></a>
                    <a href="https://github.com/slan-chong"><BsGithub className="icon gh"/></a>
                    <a href="mailto:snchong.slan@gmail.com"><FaMailBulk className="icon ma"/></a>
                </div>
                <footer className="footer">
                    <p>
                        ©2021 Chong Shing Nam
                    </p>
                </footer>
            </nav>
>>>>>>> 845f61d09b11a9c0c7d6ac828f827abc9b2c2be4
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/#" activeclassname="active">
              Introduction
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-me" activeclassname="active">
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" activeclassname="active">
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" activeclassname="active">
              Projects
            </NavLink>
          </li>
        </ul>
        <div className="icons">
          <a href="https://www.facebook.com/w10245123/">
            <FaFacebook className="icon fb" />
          </a>
          <a href="https://twitter.com/slan1024">
            <FaTwitter className="icon twi" />
          </a>
          <a href="https://wa.me/85296552105">
            <FaWhatsapp className="icon ws" />
          </a>
          <a href="https://github.com/slan-chong">
            <BsGithub className="icon gh" />
          </a>
          <a href="mailto:snchong.slan@gmail.com">
            <FaMailBulk className="icon ma" />
          </a>
        </div>
        <footer className="footer">
          <p>©2021 Chong Shing Nam</p>
        </footer>
      </nav>
    </div>
  );
}

export default Narbar;
