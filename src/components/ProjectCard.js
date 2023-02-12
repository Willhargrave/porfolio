import "./style/Project.css"
const ProjectCard = (props) => {
    return (
        <div className="Project-all">
            <div className="Project-card">
                <img src={props.Project.img} alt='' className='ProjectImg' />
                </div>
                <div className="Project-info">
                <h2>{props.Project.name}</h2>
                <h3>{props.Project.info}</h3>
                </div>
        </div>

    )
}

export default ProjectCard;