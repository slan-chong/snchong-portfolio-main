import { useEffect, useState } from "react";
import { projects, filters } from "../config";
import { BsGithub } from "react-icons/bs";
export const Projects = () => {
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempCategorie = categories.map((categorie) => {
        return { ...categorie, isChecked: checked };
      });
      setCategories(tempCategorie);
    } else {
      let tempCategorie = categories.map((categorie) =>
        categorie.name === name
          ? { ...categorie, isChecked: checked }
          : categorie
      );
      setCategories(tempCategorie);
    }
  };
  useEffect(() => {
    document.title = "Projects";
    let tempCategorie = filters.map((categorie) => {
      return { ...categorie, isChecked: true };
    });
    setCategories(tempCategorie);
  }, []);
  return (
    <div className="Projects">
      <h1 className="title">MY WORK</h1>
      <div className="categorie">
        <h2>Categories</h2>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              name="allSelect"
              checked={
                !categories.some((categorie) => categorie?.isChecked !== true)
              }
              onChange={handleChange}
            />
            All Select
          </label>
        </div>
        {categories.map((categorie) => (
          <div className="form-check">
            <label className="form-check-label" key={categorie.id}>
              <input
                type="checkbox"
                className="form-check-input"
                name={categorie.name}
                checked={categorie?.isChecked || false}
                onChange={handleChange}
              />
              {categorie.name}
            </label>
          </div>
        ))}
      </div>
      <div className="projectContainer">
        {projects.map((project) => {
          if (
            project.categorise.some(
              (tag) =>
                categories
                  .map((filter) => (filter.isChecked ? filter.name : null))
                  .indexOf(tag) > -1
            )
          ) {
            return (
              <div className="project">
                <div className="hero-section">
                  <h3>{project.title}</h3>
                  <img
                    src={process.env.PUBLIC_URL + project.img}
                    alt={project.title}
                  />
                </div>
                <div className="info">
                  <div className="discription">{project.discription}</div>
                  <div className="link">
                    {project.demoUrl ? (
                      <a href={project.demoUrl}>
                        <span className="demo">Demo</span>
                      </a>
                    ) : null}
                    {project.sourceCodeUrl ? (
                      <a href={project.sourceCodeUrl}>
                        <BsGithub className="icon gh" />
                      </a>
                    ) : null}
                  </div>
                  {project.categorise.map((tag) => {
                    return <div className="tag">{tag}</div>;
                  })}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
