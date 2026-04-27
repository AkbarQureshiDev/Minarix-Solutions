import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Stats from "../components/Stats"
import OurProcess from "../components/OurProcess"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials" 
import Brands from "../components/Brands"
import Team from "../components/Team"
import Faqs from "../components/Faqs"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div id="home"><Hero/></div>
      <Stats/>
      <div id="about"><About/></div>
      <div id="process"><OurProcess/></div>
      <div id="services"><Services/></div>
      <div id="testimonials"><Testimonials/></div>
      <Brands/>
      <div id="team"><Team/></div>
      <div id="faqs"><Faqs/></div>
      <div id="contact"><Footer/></div>
    </div>
  )
}

export default Home
