export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1a1a1a', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto' }}>
      <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#333' }}>
        <span style={{ color: '#FF0038' }}>david</span>.dev
      </span>
      <span style={{ fontSize: 11, color: '#333' }}>
        Built with React + TypeScript · {new Date().getFullYear()}
      </span>
    </footer>
  )
}