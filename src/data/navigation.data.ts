import type { NavItem } from '@/models/shared/nav-item.model'

export const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Aktuelles', to: '/news' },
  { label: 'Mitgliedschaft', to: '/mitgliedschaft' },
  {
    label: 'Verein',
    children: [
      { label: 'Training', to: '/training' },
      { label: 'Vorstand', to: '/vorstand' },
      { label: 'Mannschaft', to: '/mannschaft' },
    ],
  },
  {
    label: 'Es war einmal',
    children: [
      { label: 'Vereinshistorie', to: '/historie' },
      { label: 'Spiele & Ergebnisse', to: '/spiele' },
      { label: 'Fotogalerie', to: '/galerie' },
    ],
  },
  {
    label: 'Schichtplan',
    to: 'https://www.ac-schlecksl.de/pages/shift-schedule/shift-schedule.php',
    isExternalLink: true,
  },
]
