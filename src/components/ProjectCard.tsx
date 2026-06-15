import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import Lightbox from './Lightbox'
import { staggerItem } from './AnimateIn'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)

  const openLightbox = (index: number) => {
    setCurrent(index)
    setLightboxOpen(true)
  }

  const prev = () => setCurrent((c) => (c - 1 + project.images.length) % project.images.length)
  const next = () => setCurrent((c) => (c + 1) % project.images.length)

  return (
    <>
      <motion.div
        variants={staggerItem}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: '#111', border: `1px solid ${hovered ? '#FF003850' : '#222'}`, borderRadius: 12, overflow: 'hidden', boxShadow: hovered ? '0 0 24px rgba(255,0,56,0.08)' : 'none', transition: 'border-color 0.3s, box-shadow 0.3s' }}
      >
        <div
          onClick={() => openLightbox(0)}
          style={{ height: 200, background: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}
        >
          <img
            src={project.images[0]}
            alt={project.title}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
          >
            <span style={{ background: 'rgba(0,0,0,0.7)', color: '#f0f0f0', fontSize: 12, padding: '6px 14px', borderRadius: 20 }}>
              Ver {project.images.length} capturas
            </span>
          </div>
        </div>
        <div style={{ padding: 20 }}>
          <span style={{ fontSize: 10, color: '#FF0038', textTransform: 'uppercase', letterSpacing: 1 }}>
            {project.category} · {project.status}
          </span>
          <h3 style={{ fontSize: 18, fontWeight: 600, color: '#f0f0f0', margin: '6px 0 8px' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, margin: '0 0 16px' }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {project.tech.map((t) => (
              <span key={t} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#888', fontSize: 11, padding: '3px 8px', borderRadius: 4 }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {lightboxOpen && (
        <Lightbox
          images={project.images}
          current={current}
          title={project.title}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}