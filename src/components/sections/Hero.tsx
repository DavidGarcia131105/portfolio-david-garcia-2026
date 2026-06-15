import { motion } from 'framer-motion'
import { fadeUp } from '../ui/AnimateIn'
import TypedText from '../ui/TypedText'

export default function Hero() {
  return (
    <section style={{ textAlign: 'center', padding: '80px 24px 48px' }}>
      <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}>
        <span style={{ display: 'inline-block', background: '#FF003815', border: '1px solid #FF003840', color: '#FF0038', fontSize: 11, padding: '4px 12px', borderRadius: 20, marginBottom: 20 }}>
          <TypedText />
        </span>
      </motion.div>
      <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }} style={{ fontSize: 52, fontWeight: 700, color: '#f0f0f0', margin: '0 0 12px', letterSpacing: -2 }}>
        David Garcia
      </motion.h1>
      <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }} style={{ fontSize: 15, color: '#888', margin: '0 0 36px', maxWidth: 480, marginInline: 'auto' }}>
        Building products at the intersection of software and intelligence.
      </motion.p>
      <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }} style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <a href="#projects" style={{ background: '#FF0038', color: 'white', padding: '10px 24px', borderRadius: 8, fontSize: 13, textDecoration: 'none', fontWeight: 500 }}>View projects</a>
        <a href="#contact" style={{ background: 'transparent', color: '#f0f0f0', border: '1px solid #333', padding: '10px 24px', borderRadius: 8, fontSize: 13, textDecoration: 'none' }}>Contact me</a>
      </motion.div>
    </section>
  )
}
