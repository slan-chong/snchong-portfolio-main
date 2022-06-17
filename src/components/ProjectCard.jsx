import React from "react";
import { projects } from "../config";
import { BsGithub } from "react-icons/bs";

export const ProjectCard = () => {
  const projectList = projects.map((project, index) => (
    <div key={index} className="projectCard">
      <div className="workIMG">
        <img src={process.env.PUBLIC_URL + project.img} alt="" />
      </div>
      <div className="workContent">
        <h2>{project.title}</h2>
        <p>
          {project.description}
          {project.sourceCodeUrl ? (
            <a href={project.sourceCodeUrl}>
              <BsGithub className="icon gh" />
            </a>
          ) : null}
        </p>
      </div>
      <span className="tagList">
        {Object.keys(project.categorise).map((item, index) => {
          return (
            <span className="tag" key={index}>
              {project.categorise[item]}
            </span>
          );
        })}
      </span>
    </div>
  ));
  return <div className="projectContainer">{projectList}</div>;
};
