import "./style/skills.css"
import SkillItems from "./SkillItems";
import SkillCard from "./SkillCard";
function Skills() {
    return (
        <div>
            <h2>Skills</h2>
            <hr></hr>
            <div className="skills" id="skill">
                <div className="grid">
                    {SkillItems.map((Skill) => <SkillCard Skill={Skill} />)}
                </div>
            </div>
        </div>
    )
}

export default Skills;