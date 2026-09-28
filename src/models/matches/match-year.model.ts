import type { NavLink } from '@/models/shared/nav-link.model'
import type { MatchResult } from './match-result.model'

export interface MatchYear {
  year: string
  summary: string[]
  note?: NavLink
  tournaments?: string[]
  games: MatchResult[]
}
