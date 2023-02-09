const SkillCard = (props) => {
    return (
        <div className="Card">
        <button className='CardButton'>
        <img src={props.Skill.img} alt='' className='CardImg'/>
            <h2>{props.Skill.name}</h2>
        </button>
        </div>
        
    )
}

export default SkillCard;