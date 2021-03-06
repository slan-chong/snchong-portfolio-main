import { MdLocationPin } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { useEffect } from "react";

export const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me";
  }, []);
  return (
    <div className="AboutMe">
      <h1 className="title">ABOUT ME</h1>
      <div className="card">
        <img src={process.env.PUBLIC_URL + "/img/avatar2.webp"} alt="" />
        <p>
          My name is Chong Shing Nam. A responsible person with problem-solving
          skills and a quick learner.
        </p>
        <p>
          I'm graduated from Electronic Engineering at Feng Chia University in
          June 2021 in Taiwan. Passionate about changing the world with
          technology. In my free time, I like working on side projects.
        </p>
        <div className="center">
          <a
            href="https://github.com/slan-chong/snchong-portfolio-main/raw/main/ChongShingNam.pdf"
            download
          >
            Resume
            <FaDownload />
          </a>
        </div>
      </div>
      <h1 className="title">EDUCATION</h1>
      <div className="card">
        <h2>Feng Chia University</h2>
        <h5>
          <MdLocationPin />
          Taichung City, Taiwan
        </h5>
        <h6>2017-2021</h6>
        <p>
          <strong>Degree : </strong>Bachelor of Science in Electronic
          Engineering{" "}
        </p>
        <p>
          <strong>Specialization : </strong>IC Design
        </p>
        <p>
          <strong>Relevant Courseworks : </strong>{" "}
        </p>
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>Database Management Systems</li>
          <li>Object-oriented programming</li>
        </ul>
        <a
          href="https://sites.google.com/mail.fcu.edu.tw/cacv/team-member"
          className="link"
        >
          <h2>Computational Analytics & Cognitive Vision Lab</h2>
        </a>
        <h5>
          <MdLocationPin />
          Feng Chia University, CACV Lab
        </h5>
        <h6>2018-2021</h6>
        <span>Research Assistant</span>
        <p>
          <strong>Specialization :</strong>{" "}
        </p>
        <span>Computer Vision</span> <br />
        <span>Machine Learning(Convolutional Neural Network)</span>
        <br />
        <p>
          <strong>Access :</strong>How Many Bedrooms Do You Need? A Real-Estate
          Recommender System from Architectural Floor Plan Images
        </p>
        <h2>Cognitio College(Hong Kong)</h2>
        <h5>
          <MdLocationPin />
          Chai Wan, Hong Kong
        </h5>
        <h6>2011-2017</h6>
        <span>Secondary Education</span> <br />
      </div>
    </div>
  );
};
