import { render } from "@testing-library/react"
import Navbar from "./navbar"
import Skills from "./skills"
import About from "./about"
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