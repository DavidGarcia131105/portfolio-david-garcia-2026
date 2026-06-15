import { useTypewriter } from '../../hooks/useTypewriter'

const WORDS = ['Web App Developer', 'AI Engineer', 'Freelancer']

export default function TypedText() {
  const text = useTypewriter(WORDS)

  return (
    <span>
      <span style={{ color: '#FF0038' }}>{text}</span>
      <span style={{ color: '#FF0038', animation: 'blink 1s step-end infinite' }}>|</span>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  )
}
