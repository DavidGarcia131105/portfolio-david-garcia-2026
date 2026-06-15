export default function Nav() {
  const links = ['projects', 'experience', 'contact']

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', borderBottom: '1px solid #1f1f1f', position: 'sticky', top: 0, backgroundColor: '#0a0a0aee', backdropFilter: 'blur(10px)', zIndex: 100 }}>
      <span style={{ fontFamily: 'monospace', fontSize: 14, color: '#f0f0f0' }}>
        <span style={{ color: '#FF0038' }}>david</span>.dev
      </span>
      <div style={{ display: 'flex', gap: 24 }}>
        {links.map((link) => (
          <a key={link} href={`#${link}`} style={{ fontSize: 13, color: '#888', textDecoration: 'none' }}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}