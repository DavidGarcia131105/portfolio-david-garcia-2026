import { useState } from 'react'
import { useBreakpoint } from '../../hooks/useBreakpoint'

const links = ['about', 'projects', 'skills', 'contact']

export default function Nav() {
  const { isMobile } = useBreakpoint()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{ position: 'sticky', top: 0, backgroundColor: '#0a0a0aee', backdropFilter: 'blur(10px)', zIndex: 100, borderTop: '2px solid #FF0038' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px', height: 48 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700, color: '#f0f0f0' }}>
            <span style={{ color: '#FF0038' }}>david</span>.dev
          </span>

          {isMobile ? (
            <button onClick={() => setOpen(o => !o)} style={{ background: 'none', border: 'none', color: '#f0f0f0', fontSize: 20, cursor: 'pointer', padding: 4, lineHeight: 1 }}>
              {open ? '✕' : '☰'}
            </button>
          ) : (
            <div style={{ display: 'flex', gap: 0, alignItems: 'center' }}>
              {links.map((link, i) => (
                <span key={link} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#2a2a2a', margin: '0 14px' }} />}
                  <a href={`#${link}`} style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>{link}</a>
                </span>
              ))}
            </div>
          )}
        </div>
      </nav>

      {isMobile && open && (
        <div style={{ position: 'fixed', top: 50, left: 0, right: 0, background: '#0a0a0af5', backdropFilter: 'blur(10px)', borderBottom: '1px solid #1f1f1f', zIndex: 99, display: 'flex', flexDirection: 'column' }}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)} style={{ fontSize: 15, color: '#888', textDecoration: 'none', padding: '16px 32px', borderBottom: '1px solid #111' }}>
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
