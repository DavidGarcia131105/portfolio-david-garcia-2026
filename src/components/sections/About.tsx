import { useBreakpoint } from '../../hooks/useBreakpoint'

export default function About() {
  const { isMobile } = useBreakpoint()

  return (
    <section id="about" style={{ padding: isMobile ? '48px 24px' : '64px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto', gap: isMobile ? 24 : 48, alignItems: 'center' }}>

        {isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/david.jpeg" alt="David Garcia" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%', border: '2px solid rgba(255,0,56,0.25)' }} />
          </div>
        )}

        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#0a1a0a', border: '1px solid #1a4a1a', borderRadius: 20, padding: '4px 12px', fontSize: 11, color: '#4caf50', marginBottom: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf50' }} />
            Open to work
          </div>
          <p style={{ fontSize: 10, color: '#FF0038', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>About me</p>
          <h2 style={{ fontSize: isMobile ? 22 : 24, fontWeight: 700, color: '#f0f0f0', margin: '0 0 14px', letterSpacing: -0.5 }}>
            Hey, soy David <span style={{ color: '#FF0038' }}>Garcia</span>
          </h2>
          <p style={{ fontSize: 13, color: '#666', lineHeight: 1.85, margin: '0 0 12px' }}>
            Desarrollador español con experiencia en{' '}
            <strong style={{ color: '#f0f0f0', fontWeight: 500 }}>aplicaciones web full-stack</strong> e{' '}
            <strong style={{ color: '#f0f0f0', fontWeight: 500 }}>ingeniería de IA</strong>. Me especializo
            en construir productos reales — desde apps móviles hasta pipelines de LLMs y agentes inteligentes.
          </p>
          <p style={{ fontSize: 13, color: '#666', lineHeight: 1.85, margin: 0 }}>
            Lo que me diferencia es la combinación de ambos mundos: puedo diseñar la arquitectura,
            desarrollar el frontend e integrar inteligencia artificial. Busco un equipo donde seguir
            creciendo en ambas disciplinas.
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
            {[
              { label: 'España 🇪🇸', color: '#FF0038' },
              { label: 'Full-stack + AI', color: '#54c5f8' },
              { label: 'Remote friendly', color: '#a78bfa' },
            ].map(({ label, color }) => (
              <span key={label} style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: 6, padding: '5px 12px', fontSize: 11, color: '#aaa', display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: color }} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {!isMobile && (
          <img src="/david.jpeg" alt="David Garcia" style={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%', border: '2px solid rgba(255,0,56,0.25)' }} />
        )}
      </div>
    </section>
  )
}
