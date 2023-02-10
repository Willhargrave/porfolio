import "./style/about.css"
function About() {
    return(
        <div className="about">
            <div className="about_content">
            <div className="Head">
            <h1>Will Hargrave | Full Stack Engineer</h1>
            <img src={require('./images/profile.jpg')}alt="profile" className='image'></img>
            </div>
            <p>Born in the UK. Currently living in Tokyo, please take a look at some the projects I've been working on!</p>
            </div>
        </div>
    )
}

export default About
