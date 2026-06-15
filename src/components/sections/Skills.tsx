import { useState } from 'react'

function HoverCard({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style,
        boxShadow: hovered ? '0 0 24px rgba(255,0,56,0.08)' : 'none',
        transition: 'box-shadow 0.3s, border-color 0.3s',
        borderColor: hovered ? 'rgba(255,0,56,0.3)' : (style.borderColor ?? (style.border as string)?.split(' ')[2] ?? '#1a1a1a'),
      }}
    >
      {children}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '64px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <p style={{ fontSize: 10, color: '#FF0038', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>Expertise</p>
      <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f0f0f0', margin: '0 0 20px', letterSpacing: -0.5 }}>Tech Stack</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>

        <HoverCard style={{ gridColumn: 'span 4', borderRadius: 12, background: '#0d0808', border: '1px solid #FF003822', padding: 18, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: 40, height: 40, borderBottomLeftRadius: 12, background: '#FF003815', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: '#FF0038' }}>Re</div>
          <Pill color="#FF0038">Frontend</Pill>
          <div style={{ fontSize: 40, fontWeight: 900, color: '#FF0038', lineHeight: 1, marginBottom: 8, letterSpacing: -2 }}>React</div>
          <p style={{ fontSize: 11, color: '#444', margin: 0 }}>Primary framework · hooks, context, perf optimization</p>
          <span style={{ fontSize: 10, color: '#2a2a2a', position: 'absolute', bottom: 14, right: 16, fontWeight: 700, letterSpacing: 1 }}>since 2022</span>
        </HoverCard>

        <HoverCard style={{ gridColumn: 'span 2', borderRadius: 12, background: '#080810', border: '1px solid #3178c622', padding: 18, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 14, right: 16, fontSize: 36, fontWeight: 900, color: '#1a2535', lineHeight: 1 }}>TS</div>
          <Pill color="#3178c6">Language</Pill>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#3178c6', marginBottom: 4 }}>TypeScript</div>
          <p style={{ fontSize: 11, color: '#444', margin: 0 }}>Strict mode · generics</p>
        </HoverCard>

        <HoverCard style={{ gridColumn: 'span 6', borderRadius: 12, background: '#090810', border: '1px solid #a78bfa22', padding: '20px 22px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 20px,#fff 20px,#fff 21px),repeating-linear-gradient(90deg,transparent,transparent 20px,#fff 20px,#fff 21px)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <Pill color="#a78bfa">AI Engineering</Pill>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#a78bfa' }}>LLMs · RAG · Agents · LangChain · OpenAI API</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, color: '#2a2a2a', letterSpacing: 1 }}>FOCUS AREA</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#1e1535', letterSpacing: -1 }}>AI</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
            {['LangChain', 'RAG pipelines', 'AI Agents', 'OpenAI API', 'Vector DBs', 'Prompt Eng.'].map(t => (
              <span key={t} style={{ background: '#1a1530', border: '1px solid #2a2040', color: '#a78bfa', borderRadius: 8, padding: '6px 12px', fontSize: 11, fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </HoverCard>

        <HoverCard style={{ gridColumn: 'span 3', borderRadius: 12, background: '#080c10', border: '1px solid #54c5f822', padding: 18 }}>
          <Pill color="#54c5f8">Mobile</Pill>
          <div style={{ fontSize: 28, fontWeight: 900, color: '#54c5f8', lineHeight: 1, marginBottom: 8, letterSpacing: -1 }}>Flutter</div>
          <p style={{ fontSize: 11, color: '#444', margin: 0 }}>Cross-platform · Dart · Firebase integration</p>
        </HoverCard>

        <HoverCard style={{ gridColumn: 'span 3', borderRadius: 12, background: '#080e08', border: '1px solid #4caf5022', padding: 18 }}>
          <Pill color="#4caf50">Backend & Cloud</Pill>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 10 }}>
            {[['Python', 'Backend / scripting'], ['Node.js', 'Runtime'], ['Firebase', 'BaaS / realtime'], ['REST APIs', 'Integration']].map(([name, type]) => (
              <div key={name} style={{ background: '#141414', border: '1px solid #1e1e1e', borderRadius: 8, padding: '8px 12px' }}>
                <div style={{ fontSize: 12, color: '#bbb', fontWeight: 500 }}>{name}</div>
                <div style={{ fontSize: 10, color: '#444', marginTop: 1 }}>{type}</div>
              </div>
            ))}
          </div>
        </HoverCard>

        <HoverCard style={{ gridColumn: 'span 6', borderRadius: 12, background: '#0f0f0f', border: '1px solid #1a1a1a', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Pill color="#888" noMargin>Tools & Workflow</Pill>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {['Git', 'Docker', 'Vercel', 'Figma', 'VS Code', 'Vite'].map(t => (
              <span key={t} style={{ fontSize: 10, color: '#555', background: '#141414', border: '1px solid #1f1f1f', borderRadius: 5, padding: '3px 8px' }}>{t}</span>
            ))}
          </div>
        </HoverCard>

      </div>
    </section>
  )
}

function Pill({ color, children, noMargin }: { color: string; children: string; noMargin?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#1a1a1a', border: '1px solid #252525', borderRadius: 20, padding: '3px 10px', fontSize: 10, color: '#666', marginBottom: noMargin ? 0 : 12 }}>
      <div style={{ width: 5, height: 5, borderRadius: '50%', background: color }} />
      {children}
    </div>
  )
}
