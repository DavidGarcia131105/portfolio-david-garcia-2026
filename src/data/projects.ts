export type Project = {
    id: string;
    title: string;
    description: string;
    longDescription :string;
    tech: string[];
    category: 'mobile' | 'web' | 'ai' | 'freelance';
    images: string[]
    status: 'beta' | 'live' | 'wip'
}

export const projects: Project[] = [
  {
    id: 'entrena-tu-mente',
    title: 'Entrena tu Mente',
    description: 'Mobile app for mental performance in sports, built for a Mexican company.',
    longDescription:
      'Freelance project developed for a Mexican sports company. The app helps athletes improve their mental performance through guided breathing exercises, mood tracking, mental playlists, and competition calendar — all based on psychology techniques curated by a domain expert.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    category: 'freelance',
    images: [
      '/projects/entrena-1.png',
      '/projects/entrena-2.png',
      '/projects/entrena-3.png',
      '/projects/entrena-4.png',
    ],
    status: 'beta',
  },
]