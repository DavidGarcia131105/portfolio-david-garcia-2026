import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeUp } from '../ui/AnimateIn'
import TypedText from '../ui/TypedText'
import Button from '../ui/Button'
import { useBreakpoint } from '../../hooks/useBreakpoint'

export default function Hero() {
  const { isMobile } = useBreakpoint()
  const { t } = useTranslation()

  return (
    <section style={{ textAlign: 'center', padding: isMobile ? '48px 24px 32px' : '80px 24px 48px' }}>
      <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}>
        <span style={{ display: 'inline-block', background: 'rgba(255,0,56,0.08)', border: '1px solid rgba(255,0,56,0.25)', color: '#FF0038', fontSize: 11, padding: '4px 12px', borderRadius: 20, marginBottom: 20 }}>
          <TypedText />
        </span>
      </motion.div>
      <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }} style={{ fontSize: isMobile ? 36 : 52, fontWeight: 700, color: 'var(--text)', margin: '0 0 12px', letterSpacing: isMobile ? -1 : -2 }}>
        David Garcia
      </motion.h1>
      <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }} style={{ fontSize: isMobile ? 13 : 15, color: 'var(--muted)', margin: '0 0 36px', maxWidth: 480, marginInline: 'auto' }}>
        {t('hero.subtitle')}
      </motion.p>
      <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button href="#projects" variant="primary">{t('hero.cta_projects')}</Button>
        <Button href="#contact" variant="ghost">{t('hero.cta_contact')}</Button>
      </motion.div>
    </section>
  )
}
