import { useEffect } from 'react'

type Props = {
  images: string[]
  current: number
  title: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, current, title, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>{title}</span>
          <button onClick={onClose} style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontSize: 13 }}>✕ esc</button>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={onPrev} style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: 8, width: 40, height: 40, fontSize: 20, cursor: 'pointer' }}>‹</button>
          <img src={images[current]} alt={`${title} ${current + 1}`} style={{ maxHeight: '80vh', maxWidth: '60vw', borderRadius: 12, objectFit: 'contain' }} />
          <button onClick={onNext} style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: 8, width: 40, height: 40, fontSize: 20, cursor: 'pointer' }}>›</button>
        </div>
        <span style={{ fontSize: 12, color: 'var(--hint)' }}>{current + 1} / {images.length}</span>
      </div>
    </div>
  )
}
