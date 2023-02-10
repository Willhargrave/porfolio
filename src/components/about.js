import "./style/about.css"
function About() {
    return(
        <div className="about">
            <div className="about_content">
            <img src={require('./images/profile.jpg')}alt="profile" className='image'></img>
            <h1>Hi, I'm Will a full-stack developer</h1>
            <p>I'm currently living in Tokyo. Please feel free to take a look at some of the projects I've been working on.</p>
            </div>
        </div>
    )
}

export default About
