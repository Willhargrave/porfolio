import "./style/Project.css"
const ProjectCard = (props) => {
    return (
        <div className="Project_Card">
        <h2>{props.Project.name}</h2>
        <img src={props.Project.img} alt='' className='ProjectImg'/>
        <div className="overlay">
        <h2 className="info">{props.Project.info}</h2>
        </div>
        </div>
        
    )
}

export default ProjectCard;