const SkillCard = (props) => {
    return (
        <div className="Card">
        <img src={props.Skill.img} alt='' className='CardImg'/>
        </div>
        
    )
}

export default SkillCard;