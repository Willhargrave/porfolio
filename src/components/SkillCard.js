const SkillCard = (props) => {
    return (
        <div className="Card">
        <button className='CardButton'>
        <img src={props.Skill.img} alt='' className='CardImg'/>
        </button>
        </div>
        
    )
}

export default SkillCard;