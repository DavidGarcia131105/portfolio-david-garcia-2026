import { useTranslation } from 'react-i18next'
import { useTypewriter } from '../../hooks/useTypewriter'

export default function TypedText() {
  const { t } = useTranslation()
  const words = t('hero.roles', { returnObjects: true }) as string[]
  const text = useTypewriter(words)

  return (
    <span>
      <span style={{ color: '#FF0038' }}>{text}</span>
      <span style={{ color: '#FF0038', animation: 'blink 1s step-end infinite' }}>|</span>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  )
}
