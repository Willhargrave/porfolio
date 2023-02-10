import "./style/skills.css"
import SkillItems from "./SkillItems";
import SkillCard from "./SkillCard";
function Skills() {
    return(
        <div className="skills">
            <div className="grid">
            {SkillItems.map((Skill) => <SkillCard Skill={Skill}/>)}
            </div>
        </div>
    )
}

export default Skills;