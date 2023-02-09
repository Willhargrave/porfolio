import "./style/skills.css"
import SkillItems from "./SkillItems";
import SkillCard from "./SkillCard";
function Skills() {
    return(
        <div>
            <h1>Test</h1>
            {SkillItems.map((Skill) => <SkillCard Skill={Skill}/>)}
        </div>
    )
}

export default Skills;