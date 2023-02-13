import "./style/about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function About() {
    return (
        <div className="about" id="about">
            <div className="about_content">
                <div className="Head">
                    <h1>Will Hargrave <hr></hr> Full Stack Engineer</h1>
                    <div className="about-image">
                        <img src={require('./images/profile.jpg')} alt="profile" className='image'></img>
                    </div>
                </div>
                <p>Born in the UK. Currently living in Tokyo, please take a look at some the projects I've been working on!</p>
                <div className="links">
                    <a className="button" href="https://www.linkedin.com/in/will-r-hargrave/"><FontAwesomeIcon icon="fa-brands fa-linkedin" />Linkedin</a>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    <a className="button" href="https://github.com/Willhargrave">Github</a>
                    <a className="button" href="">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About
