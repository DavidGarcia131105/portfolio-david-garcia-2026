import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimateIn, { staggerContainer } from '../ui/AnimateIn'
import ProjectCard from '../project/ProjectCard'
import { projects } from '../../data/projects'
import { useBreakpoint } from '../../hooks/useBreakpoint'

export default function Projects() {
  const { isMobile } = useBreakpoint()
  const { t } = useTranslation()

  return (
    <section id="projects" style={{ padding: isMobile ? '48px 24px' : '64px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <AnimateIn>
        <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: '#f0f0f0', marginBottom: 32 }}>
          {t('projects.title')}
        </h2>
      </AnimateIn>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
