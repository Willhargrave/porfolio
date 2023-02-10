const ProjectCard = (props) => {
    return (
        <div className="Card">
        <h2>{props.Project.name}</h2>
        <img src={props.Project.img} alt='' className='ProjectImg'/>
        </div>
        
    )
}

export default ProjectCard;