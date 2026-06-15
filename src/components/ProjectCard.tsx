import type { Project } from '../data/projects'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div style={{ background: '#111', border: '1px solid #222', borderRadius: 12, padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <span style={{ fontSize: 10, color: '#FF0038', textTransform: 'uppercase', letterSpacing: 1 }}>
          {project.category} · {project.status}
        </span>
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 600, color: '#f0f0f0', margin: '0 0 8px' }}>
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
  )
}