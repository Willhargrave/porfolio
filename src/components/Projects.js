import "./style/Project.css"
import ProjectCard from "./ProjectCard";
import ProjectItems from "./ProjectItems";
function Skills() {
    return(
        <div>
           <h2>Projects</h2>
            <hr></hr>
            <div className="project">
            {ProjectItems.map((Project) => <ProjectCard Project={Project}/>)}
            </div>
        </div>
    )
}

export default Skills;