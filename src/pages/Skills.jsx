import { SKILLS } from "../config/config";
import { v4 as uuidv4 } from "uuid";
export const Skills = () => {
  return (
    <div className="Skills">
      <h2 className="title">Programming languages</h2>
      <div className="skillsContainer">
        {SKILLS.map(
          (skill) =>
            skill.type === "PL" && (
              <div className="skills" key={uuidv4()}>
                <img src={skill.src} alt="" />
                <p>{skill.name}</p>
              </div>
            )
        )}
      </div>
      <h2 className="title">Libraries/Frameworks</h2>
      <div className="skillsContainer">
        {SKILLS.map(
          (skill) =>
            skill.type === "Frameworks" && (
              <div className="skills" key={uuidv4()}>
                <img src={skill.src} alt="" />
                <p>{skill.name}</p>
              </div>
            )
        )}
      </div>
      <h2 className="title">Others</h2>
      <div className="skillsContainer">
        {SKILLS.map(
          (skill) =>
            skill.type === "Other" && (
              <div className="skills" key={uuidv4()}>
                <img src={skill.src} alt="" />
                <p>{skill.name}</p>
              </div>
            )
        )}
      </div>
      <h2 className="title">Software</h2>
      <div className="skillsContainer">
        {SKILLS.map(
          (skill) =>
            skill.type === "Software" && (
              <div className="skills" key={uuidv4()}>
                <img src={skill.src} alt="" />
                <p>{skill.name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};
