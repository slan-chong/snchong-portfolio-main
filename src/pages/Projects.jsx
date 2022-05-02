import { useEffect } from "react";
import { ProjectCard } from "../components/ProjectCard";
export const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);
  return (
    <div className="Projects">
      <h1 className="title">MY WORK</h1>
      <ProjectCard />
    </div>
  );
};
