import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import { useTheme } from '../../context/ThemeContext'
import NavButton from '../ui/Button'

const links = ['about', 'projects', 'skills', 'contact'] as const

export default function Nav() {
  const { isMobile } = useBreakpoint()
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { isDark, toggleTheme } = useTheme()

  const isES = i18n.language.startsWith('es')
  const toggleLang = () => i18n.changeLanguage(isES ? 'en' : 'es')

  const smallBtn = { fontSize: 11, padding: '3px 10px', borderRadius: 6 }

  return (
    <>
      <nav style={{ position: 'sticky', top: 0, backgroundColor: 'var(--nav-bg)', backdropFilter: 'blur(10px)', zIndex: 100, borderTop: '2px solid #FF0038' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px', height: 48 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
            <span style={{ color: '#FF0038' }}>david</span>.dev
          </span>

          {isMobile ? (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <NavButton onClick={toggleTheme} style={smallBtn}>{isDark ? '☀' : '◑'}</NavButton>
              <NavButton onClick={toggleLang} style={smallBtn}>{isES ? 'EN' : 'ES'}</NavButton>
              <button onClick={() => setOpen(o => !o)} style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: 20, cursor: 'pointer', padding: 4, lineHeight: 1 }}>
                {open ? '✕' : '☰'}
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 0, alignItems: 'center' }}>
              {links.map((link, i) => (
                <span key={link} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-2)', margin: '0 14px' }} />}
                  <a href={`#${link}`} style={{ fontSize: 12, color: 'var(--muted)', textDecoration: 'none' }}>
                    {t(`nav.${link}`)}
                  </a>
                </span>
              ))}
              <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-2)', margin: '0 14px' }} />
              <NavButton onClick={toggleTheme} style={smallBtn}>{isDark ? '☀' : '◑'}</NavButton>
              <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-2)', margin: '0 14px' }} />
              <NavButton onClick={toggleLang} style={smallBtn}>{isES ? 'EN' : 'ES'}</NavButton>
            </div>
          )}
        </div>
      </nav>

      {isMobile && open && (
        <div style={{ position: 'fixed', top: 50, left: 0, right: 0, background: 'var(--nav-bg)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)', zIndex: 99, display: 'flex', flexDirection: 'column' }}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)} style={{ fontSize: 15, color: 'var(--muted)', textDecoration: 'none', padding: '16px 32px', borderBottom: '1px solid var(--border)' }}>
              {t(`nav.${link}`)}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
