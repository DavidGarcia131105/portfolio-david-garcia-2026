export type SkillCategory = {
  label: string
  color: string
  bg: string
  border: string
  items: { name: string; type: string }[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Backend & Cloud',
    color: '#4caf50',
    bg: '#080e08',
    border: '#4caf5022',
    items: [
      { name: 'Python', type: 'Backend / scripting' },
      { name: 'Node.js', type: 'Runtime' },
      { name: 'Firebase', type: 'BaaS / realtime' },
      { name: 'REST APIs', type: 'Integration' },
    ],
  },
]

export const aiChips = [
  'LangChain', 'RAG pipelines', 'AI Agents',
  'OpenAI API', 'Vector DBs', 'Prompt Eng.',
]

export const tools = ['Git', 'Docker', 'Vercel', 'Figma', 'VS Code', 'Vite']

export const stats = [
  { value: 1, suffix: '+', label: 'App en beta' },
  { value: 2, suffix: '+', label: 'Años de experiencia' },
  { value: 100, suffix: '%', label: 'Disponible para freelance' },
]
