import "./style/skills.css"
import SkillItems from "./SkillItems";
import SkillCard from "./SkillCard";
function Skills() {
    return(
        <div>
            <div className="grid">
            {SkillItems.map((Skill) => <SkillCard Skill={Skill}/>)}
            </div>
        </div>
    )
}

export default Skills;