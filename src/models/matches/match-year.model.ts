import type { MatchResult } from './match-result.model'

export interface MatchYear {
  year: string
  summary: string[]
  note?: string
  tournaments?: string[]
  games: MatchResult[]
}
