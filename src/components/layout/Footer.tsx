import { useBreakpoint } from '../../hooks/useBreakpoint'

const socials = [
  { label: 'in', color: '#54c5f8', href: 'https://linkedin.com/in/david-garcia' },
  { label: 'Gh', color: '#f0f0f0', href: 'https://github.com/davgarcol05' },
  { label: '@', color: '#FF0038', href: 'mailto:davgarcol05@gmail.com' },
]

export default function Footer() {
  const { isMobile } = useBreakpoint()

  return (
    <footer style={{ background: '#080808', padding: isMobile ? '20px 24px' : '24px 48px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'flex-end', marginBottom: 14, flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 0 }}>
        <span style={{ fontFamily: 'monospace', fontSize: isMobile ? 18 : 22, fontWeight: 900, color: '#f0f0f0', letterSpacing: -1 }}>
          <span style={{ color: '#FF0038' }}>david</span>.dev
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ width: 34, height: 34, borderRadius: 9, background: '#111', border: '1px solid #1f1f1f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: s.color, textDecoration: 'none' }}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div style={{ height: 1, background: '#111', marginBottom: 12 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 4 : 0 }}>
        <span style={{ fontSize: 10, color: '#333' }}>España 🇪🇸 · Full-stack + AI Engineer</span>
        <span style={{ fontSize: 10, color: '#333' }}>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
