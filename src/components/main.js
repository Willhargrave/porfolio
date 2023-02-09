import { render } from "@testing-library/react"
import Navbar from "./Navbar"
import Skills from "./Skills"
import About from "./About"
function Main() {
    return (
        <div className="all">
            <Navbar />
            <div className="details">
                <About />
                <Skills />
            </div>
        </div>
    )
};

export default Main;