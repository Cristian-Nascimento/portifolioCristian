import Footer from "./Footer/Footer"
import About from "./sections/About/About"
import HardSkills from "./sections/HardSkills/HardSkills"
import Hero from "./sections/Hero/Hero"
import Navbar from "./sections/Navbar/Navbar"
import Projects from "./sections/Projects/Projects"
import SoftSkills from "./sections/SoftSkills/SoftSkills"
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <Navbar />
            <Hero />
            <Projects />
            <HardSkills />
            <SoftSkills />
            <About />
            <Footer />
        </div>
    )
}

export default Home
