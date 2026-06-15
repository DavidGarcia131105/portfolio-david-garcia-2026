import { useState } from 'react'

type ContactItem = {
  label: string
  value: string
  href: string
  color: string
  bg: string
  icon: string
}

const items: ContactItem[] = [
  { label: 'Email', value: 'davgarcol05@gmail.com', href: 'mailto:davgarcol05@gmail.com', color: '#FF0038', bg: '#FF003815', icon: '@' },
  { label: 'LinkedIn', value: '/in/david-garcia', href: 'https://linkedin.com/in/david-garcia', color: '#54c5f8', bg: '#1a2a3a', icon: 'in' },
  { label: 'GitHub', value: '/davgarcol05', href: 'https://github.com/davgarcol05', color: '#f0f0f0', bg: '#1a1a1a', icon: 'Gh' },
]

function ContactCard({ item }: { item: ContactItem }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      key={item.label}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#111', border: `1px solid ${hovered ? '#FF003850' : '#1f1f1f'}`, borderRadius: 10, padding: '14px 16px', textDecoration: 'none', boxShadow: hovered ? '0 0 24px rgba(255,0,56,0.08)' : 'none', transition: 'border-color 0.3s, box-shadow 0.3s' }}
    >
      <div style={{ width: 36, height: 36, borderRadius: 9, background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{item.icon}</div>
      <div>
        <div style={{ fontSize: 10, color: '#555', marginBottom: 2 }}>{item.label}</div>
        <div style={{ fontSize: 12, color: '#ccc', fontWeight: 500 }}>{item.value}</div>
      </div>
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '64px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>
        <div>
          <p style={{ fontSize: 10, color: '#FF0038', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>Contact</p>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f0f0f0', margin: '0 0 12px', letterSpacing: -0.5 }}>
            Let's work together
          </h2>
          <p style={{ fontSize: 13, color: '#555', margin: 0, lineHeight: 1.7 }}>
            Open to new opportunities and interesting projects. I usually reply within 24h.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((item) => <ContactCard key={item.label} item={item} />)}
        </div>
      </div>
    </section>
  )
}
