export interface NavLink {
  label: string
  to: string
}

export interface NavItem {
  label: string
  to?: string
  children?: NavLink[]
}

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
