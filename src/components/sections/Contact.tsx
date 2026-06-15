import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../hooks/useBreakpoint'

type ContactItem = {
  label: string
  value: string
  href: string
  color: string
  bg: string
  icon: string
}

const items: ContactItem[] = [
  { label: 'Email', value: 'davgarcol05@gmail.com', href: 'mailto:davgarcol05@gmail.com', color: '#FF0038', bg: 'rgba(255,0,56,0.08)', icon: '@' },
  { label: 'LinkedIn', value: '/in/david-garcia-cola', href: 'https://www.linkedin.com/in/david-garcia-cola-726523266/', color: '#54c5f8', bg: 'rgba(84,197,248,0.08)', icon: 'in' },
  { label: 'GitHub', value: '/DavidGarcia131105', href: 'https://github.com/DavidGarcia131105', color: 'var(--text)', bg: 'var(--surface-3)', icon: 'Gh' },
]

function ContactCard({ item }: { item: ContactItem }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a href={item.href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface)', border: `1px solid ${hovered ? 'rgba(255,0,56,0.3)' : 'var(--border)'}`, borderRadius: 10, padding: '14px 16px', textDecoration: 'none', boxShadow: hovered ? '0 0 24px rgba(255,0,56,0.08)' : 'none', transition: 'border-color 0.3s, box-shadow 0.3s' }}
    >
      <div style={{ width: 36, height: 36, borderRadius: 9, background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{item.icon}</div>
      <div>
        <div style={{ fontSize: 10, color: 'var(--hint)', marginBottom: 2 }}>{item.label}</div>
        <div style={{ fontSize: 12, color: 'var(--text-sub)', fontWeight: 500 }}>{item.value}</div>
      </div>
    </a>
  )
}

export default function Contact() {
  const { isMobile } = useBreakpoint()
  const { t } = useTranslation()
  return (
    <section id="contact" style={{ padding: isMobile ? '48px 24px' : '64px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 24, alignItems: 'start' }}>
        <div>
          <p style={{ fontSize: 10, color: '#FF0038', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>{t('contact.label')}</p>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', margin: '0 0 12px', letterSpacing: -0.5 }}>
            {t('contact.title')}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
            {t('contact.subtitle')}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((item) => <ContactCard key={item.label} item={item} />)}
        </div>
      </div>
    </section>
  )
}
