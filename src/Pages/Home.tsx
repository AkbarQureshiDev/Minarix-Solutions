import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Stats from "../components/Stats"
import OurProcess from "../components/OurProcess"
import Testimonials from "../components/Testimonials"
import Team from "../components/Team"
import Faqs from "../components/Faqs"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Stats/>
      <OurProcess/>
      <Projects/>
      <Testimonials/>
      <Team/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Home
