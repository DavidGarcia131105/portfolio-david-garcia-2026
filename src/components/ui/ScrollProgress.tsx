import { useScrollProgress } from '../../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, zIndex: 999, background: '#111' }}>
      <div style={{ height: '100%', width: `${progress}%`, background: '#FF0038', transition: 'width 0.1s linear' }} />
    </div>
  )
}
