import type { NavLink } from '@/models/shared/nav-link.model'

export interface NewsItem {
  title: string
  /** ISO date, precision depending on what's known: 'YYYY-MM-DD', 'YYYY-MM', or 'YYYY'. */
  date: string
  image?: string
  imageCaption?: string
  paragraphs: string[]
  links?: NavLink[]
}
