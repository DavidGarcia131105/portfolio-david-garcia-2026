import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import Stats from './components/project/Stats'
import CustomCursor from './components/ui/CustomCursor'
import ParticleBackground from './components/ui/ParticleBackground'
import ScrollProgress from './components/ui/ScrollProgress'

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
