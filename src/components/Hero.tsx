export default function Hero() {
  return (
    <section style={{ textAlign: 'center', padding: '80px 24px 64px' }}>
      <span style={{ display: 'inline-block', background: '#FF003815', border: '1px solid #FF003840', color: '#FF0038', fontSize: 11, padding: '4px 12px', borderRadius: 20, marginBottom: 20 }}>
        Web App Developer & AI Engineer
      </span>
      <h1 style={{ fontSize: 52, fontWeight: 700, color: '#f0f0f0', margin: '0 0 12px', letterSpacing: -2 }}>
        David Garcia
      </h1>
      <p style={{ fontSize: 15, color: '#888', margin: '0 0 36px', maxWidth: 480, marginInline: 'auto' }}>
        Building products at the intersection of software and intelligence.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <a href="#projects" style={{ background: '#FF0038', color: 'white', padding: '10px 24px', borderRadius: 8, fontSize: 13, textDecoration: 'none', fontWeight: 500 }}>
          View projects
        </a>
        <a href="#contact" style={{ background: 'transparent', color: '#f0f0f0', border: '1px solid #333', padding: '10px 24px', borderRadius: 8, fontSize: 13, textDecoration: 'none' }}>
          Contact me
        </a>
      </div>
    </section>
  )
}