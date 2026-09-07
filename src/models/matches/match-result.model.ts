import type { NavLink } from '@/models/shared/nav-link.model'

export interface MatchResult {
  result: string
  lineup?: string
  scorers?: string
  details?: string[]
  galleryLink?: NavLink
}
