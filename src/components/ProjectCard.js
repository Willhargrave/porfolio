import "./style/Project.css"
const ProjectCard = (props) => {
    return (
        <div className="Card">
        <h2>{props.Project.name}</h2>
        <img src={props.Project.img} alt='' className='ProjectImg'/>
        <h2 className="info">{props.Project.info}</h2>
        </div>
        
    )
}

export default ProjectCard;