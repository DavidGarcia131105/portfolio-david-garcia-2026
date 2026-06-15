import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'ghost' | 'primary'
  style?: CSSProperties
}

export default function Button({ children, onClick, href, variant = 'ghost', style }: Props) {
  const [hovered, setHovered] = useState(false)

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    border: 'none',
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
    ...( variant === 'primary' ? {
      background: hovered ? '#cc0029' : '#FF0038',
      color: 'white',
      padding: '10px 24px',
      boxShadow: hovered ? '0 6px 20px rgba(255,0,56,0.35)' : '0 2px 8px rgba(255,0,56,0.15)',
    } : {
      background: hovered ? 'rgba(255,0,56,0.06)' : 'transparent',
      color: hovered ? '#FF0038' : 'var(--muted)',
      border: `1px solid ${hovered ? 'rgba(255,0,56,0.4)' : 'var(--border-2)'}`,
      padding: '10px 24px',
      boxShadow: hovered ? '0 4px 12px rgba(255,0,56,0.1)' : 'none',
    }),
    ...style,
  }

  if (href) {
    return (
      <a href={href} style={base} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} style={base} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {children}
    </button>
  )
}
