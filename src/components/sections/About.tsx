import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../hooks/useBreakpoint'

export default function About() {
  const { isMobile } = useBreakpoint()
  const { t } = useTranslation()

  const chips = [
    { key: 'chip1', color: '#FF0038' },
    { key: 'chip2', color: '#54c5f8' },
    { key: 'chip3', color: '#a78bfa' },
  ]

  return (
    <section id="about" style={{ padding: isMobile ? '48px 24px' : '64px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto', gap: isMobile ? 24 : 48, alignItems: 'center' }}>

        {isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/david.jpeg" alt="David Garcia" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%', border: '2px solid rgba(255,0,56,0.25)' }} />
          </div>
        )}

        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(76,175,80,0.08)', border: '1px solid rgba(76,175,80,0.2)', borderRadius: 20, padding: '4px 12px', fontSize: 11, color: '#4caf50', marginBottom: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf50' }} />
            {t('about.badge')}
          </div>
          <p style={{ fontSize: 10, color: '#FF0038', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>{t('about.label')}</p>
          <h2 style={{ fontSize: isMobile ? 22 : 24, fontWeight: 700, color: 'var(--text)', margin: '0 0 14px', letterSpacing: -0.5 }}>
            {t('about.title')} <span style={{ color: '#FF0038' }}>Garcia</span>
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.85, margin: '0 0 12px' }} dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.85, margin: 0 }}>{t('about.p2')}</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
            {chips.map(({ key, color }) => (
              <span key={key} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 12px', fontSize: 11, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: color }} />
                {t(`about.${key}`)}
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
