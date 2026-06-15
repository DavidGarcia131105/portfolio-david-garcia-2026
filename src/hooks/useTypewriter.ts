import { useEffect, useState } from 'react'

const TYPE_SPEED = 80
const DELETE_SPEED = 50
const PAUSE = 1800

export function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), PAUSE)
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, deleting ? DELETE_SPEED : TYPE_SPEED)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return text
}
