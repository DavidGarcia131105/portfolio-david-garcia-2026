import { motion } from 'framer-motion'
import AnimateIn, { staggerContainer } from '../ui/AnimateIn'
import ProjectCard from '../project/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
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
  )
}
