import AboutSection from "./pages/sections/About/AboutSection"
import HeroSection from "./pages/sections/Hero/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./pages/sections/ProjectsSection/ProjectsSection"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
