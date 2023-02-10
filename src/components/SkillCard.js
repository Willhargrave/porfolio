const SkillCard = (props) => {
    return (
        <div className="Card">
        <img src={props.Skill.img} alt='' className='CardImg'/>
        <h3>{props.Skill.name}</h3>
        </div>
        
    )
}

export default SkillCard;