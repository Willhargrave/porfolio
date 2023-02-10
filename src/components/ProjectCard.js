const ProjectCard = (props) => {
    return (
        <div className="Card">
        <img src={props.Project.img} alt='' className='ProjectImg'/>
        <h2>{props.Project.name}</h2>
        </div>
        
    )
}

export default ProjectCard;