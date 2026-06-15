import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 1, suffix: '+', label: 'App en beta' },
  { value: 2, suffix: '+', label: 'Años de experiencia' },
  { value: 100, suffix: '%', label: 'Disponible para freelance' },
]

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

export default function Stats() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 48, padding: '0 32px 64px', maxWidth: 1200, margin: '0 auto' }}>
      {STATS.map((s) => (
        <div key={s.label} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 36, fontWeight: 800, color: '#FF0038', letterSpacing: -1 }}>
            <Counter target={s.value} suffix={s.suffix} />
          </div>
          <div style={{ fontSize: 11, color: '#555', marginTop: 4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
