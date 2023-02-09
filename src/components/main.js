import { render } from "@testing-library/react"
import Navbar from "./Navbar"
import Skills from "./Skills"
import About from "./About"
function Main()  {
    return (
        <div>
        <Navbar />
        <About />
        <Skills />
        </div>
    )
}

export default Main