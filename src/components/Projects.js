import "./style/Project.css"
import ProjectCard from "./ProjectCard";
import ProjectItems from "./ProjectItems";
function Skills() {
    return(
        <div>
            <div className="project">
            {ProjectItems.map((Project) => <ProjectCard Project={Project}/>)}
            </div>
        </div>
    )
}

export default Skills;