import { useEffect, useState } from 'react'

const WORDS = ['Web App Developer', 'AI Engineer', 'Freelancer']
const TYPE_SPEED = 80
const DELETE_SPEED = 50
const PAUSE = 1800

export default function TypedText() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = WORDS[wordIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), PAUSE)
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % WORDS.length)
        }
      }
    }, deleting ? DELETE_SPEED : TYPE_SPEED)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex])

  return (
    <span>
      <span style={{ color: '#FF0038' }}>{text}</span>
      <span style={{ color: '#FF0038', animation: 'blink 1s step-end infinite' }}>|</span>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  )
}
