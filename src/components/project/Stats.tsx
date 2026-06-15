import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { stats } from '../../data/skills'
import { useBreakpoint } from '../../hooks/useBreakpoint'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(target / 40)
        const interval = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(interval) }
          else setCount(start)
        }, 30)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

const STAT_KEYS = ['app', 'years', 'available'] as const

export default function Stats() {
  const { isMobile } = useBreakpoint()
  const { t } = useTranslation()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? 24 : 48, padding: isMobile ? '0 24px 48px' : '0 32px 64px', maxWidth: 1200, margin: '0 auto', flexWrap: 'wrap' }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 36, fontWeight: 800, color: '#FF0038', letterSpacing: -1 }}>
            <Counter target={s.value} suffix={s.suffix} />
          </div>
          <div style={{ fontSize: 11, color: '#555', marginTop: 4 }}>{t(`stats.${STAT_KEYS[i]}`)}</div>
        </div>
      ))}
    </div>
  )
}
