import React from 'react'
import {projects} from '../config'
export const ProjectCard = () => {
    const projectList = projects.map((project,index) => (
        <div key = {index} className="projectCard">
            <div className="workIMG">
                <img src={process.env.PUBLIC_URL +project.img} alt="" />
            </div>
            <div className="workContent">
                <h2>{project.title}</h2>
                <p>{project.discription}</p>
            </div>
            {Object.keys(project.categorise).map((item, index) => {
                return (
                    <span className="tag" key={index}>
                        {project.categorise[item]}
                    </span>
                )})
            }
        </div>
    ))  
    return (
        <div className = "projectContainer">
            {projectList}
        </div>
    )
}
