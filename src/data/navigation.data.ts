import type { NavItem } from '@/models/shared/nav-item.model'

export const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Aktuelles', to: '/news' },
  { label: 'Mitgliedschaft', to: '/mitgliedschaft' },
  {
    label: 'Verein',
    children: [
      { label: 'Vorstand', to: '/vorstand' },
      { label: 'Training', to: '/training' },
      { label: 'Mannschaft', to: '/mannschaft' },
    ],
  },
  {
    label: 'Es war einmal',
    children: [
      { label: 'Historie', to: '/historie' },
      { label: 'Spiele', to: '/spiele' },
      { label: 'Galerie', to: '/galerie' },
    ],
  },
]
