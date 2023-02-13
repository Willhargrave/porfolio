import "./style/Project.css"
const ProjectCard = (props) => {
    function handleClick() {
        const popup = document.getElementById(props.Project.id);
        popup.classList.toggle("show");
      }
    return (

        <div className="Project-all">
            <div className="Project-card" onClick={() => handleClick()}>
                <img src={props.Project.img} alt='' className='ProjectImg' />
            </div>
            <div className="Project-info">
                <div className="popup">
                    <div className="popuptext" id={props.Project.id}>
                        <h2>{props.Project.name}</h2>
                        <h3>{props.Project.info}</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard;
