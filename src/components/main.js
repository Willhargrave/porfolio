import { render } from "@testing-library/react"
import Navbar from "./Navbar"
import Skills from "./Skills"
import About from "./About"
import Project from "./Projects"
function Main() {
    return (
        <div>
            <Navbar />
            <About />
            <Skills />
            <Project />
        </div>
    )
};

export default Main;