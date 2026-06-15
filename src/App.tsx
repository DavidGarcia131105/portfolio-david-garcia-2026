import { motion } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimateIn, { staggerContainer } from './components/AnimateIn'
import ParticleBackground from './components/ParticleBackground'
import ScrollProgress from './components/ScrollProgress'
import Stats from './components/Stats'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
    <CustomCursor />
    <ScrollProgress />
    <ParticleBackground />
    <main>
      <Nav />
      <Hero />
      <Stats />
      <section id="projects" style={{ padding: '64px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <AnimateIn>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#f0f0f0', marginBottom: 32 }}>
            Projects
          </h2>
        </AnimateIn>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>
      <AnimateIn>
        <Skills />
      </AnimateIn>
      <AnimateIn>
        <Contact />
      </AnimateIn>
    </main>
    <Footer />
    </>
  )
}

export default App