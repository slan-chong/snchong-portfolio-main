import { SKILLS } from "../config/config";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {
    document.title = "Skills";
  }, []);
  const contentHandler = (skill) => {
    return (
      <div className="skills" key={uuidv4()}>
        <img src={skill.src} alt="" />
        <p>{skill.name}</p>
      </div>
    );
  };
  return (
    <div className="Skills">
      <h2 className="title">Programming languages</h2>
      <div className="skillsContainer">
        {SKILLS.map((skill) => skill.type === "PL" && contentHandler(skill))}
      </div>
      <h2 className="title">Libraries/Frameworks</h2>
      <div className="skillsContainer">
        {SKILLS.map(
          (skill) => skill.type === "Frameworks" && contentHandler(skill)
        )}
      </div>
      <h2 className="title">Others</h2>
      <div className="skillsContainer">
        {SKILLS.map((skill) => skill.type === "Other" && contentHandler(skill))}
      </div>
      <h2 className="title">Software</h2>
      <div className="skillsContainer">
        {SKILLS.map(
          (skill) => skill.type === "Software" && contentHandler(skill)
        )}
      </div>
    </div>
  );
};
