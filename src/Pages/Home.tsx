import { useRef } from "react"
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

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.gsap-3d-section')
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          rotationX: 45, 
          y: 100, 
          scale: 0.9, 
          transformPerspective: 1000 
        },
        {
          opacity: 1,
          rotationX: 0,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        }
      )
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <Navbar/>
      <div id="home"><Hero/></div>
      <div className="gsap-3d-section"><Stats/></div>
      <div id="about" className="gsap-3d-section"><About/></div>
      <div id="process" className="gsap-3d-section"><OurProcess/></div>
      <div id="services" className="gsap-3d-section"><Services/></div>
      <div id="testimonials" className="gsap-3d-section"><Testimonials/></div>
      <div className="gsap-3d-section"><Brands/></div>
      <div id="team" className="gsap-3d-section"><Team/></div>
      <div id="faqs" className="gsap-3d-section"><Faqs/></div>
      <div id="contact" className="gsap-3d-section"><Footer/></div>
    </div>
  )
}

export default Home
