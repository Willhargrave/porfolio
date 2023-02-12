import "./style/Project.css"
const ProjectCard = (props) => {
    return (
        <div className="Project-all">
            <div className="Project-card">
                <img src={props.Project.img} alt='' className='ProjectImg' />
                </div>
                <h2>{props.Project.name}</h2>
                <h3 className="info">{props.Project.info}</h3>
        </div>

    )
}

export default ProjectCard;