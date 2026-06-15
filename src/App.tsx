import Nav from './components/Nav'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'
import Skills from './components/Skills'

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <section id="projects" style={{ padding: '64px 32px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#f0f0f0', marginBottom: 32 }}>
          Projects
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
        </div>
      </section>
      <section>
        <Skills />
      </section>
    </main>
  )
}

export default App