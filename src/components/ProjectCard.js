import "./style/Project.css"
const ProjectCard = (props) => {
    return (
        <div className="Project-card">
            <h2>{props.Project.name}</h2>
            <img src={props.Project.img} alt='' className='ProjectImg' />
                <h3 className="info">{props.Project.info}</h3>
        </div>

    )
}

export default ProjectCard;