import type { YearSummary } from '@/models/matches/year-summary.model'
import img2009 from '@/assets/matches/2009.jpg'
import img2008 from '@/assets/matches/2008.jpg'
import img2007 from '@/assets/matches/2007.jpg'
import img2006 from '@/assets/matches/2006.jpg'
import img2005 from '@/assets/matches/2005.jpg'

export const matchesYearSummaries: YearSummary[] = [
  { year: '2025', spiele: 0, siege: 0, unentschieden: 0, niederlagen: 0, turniere: ['2. Platz'] },
  { year: '2024', spiele: 0, siege: 0, unentschieden: 0, niederlagen: 0, turniere: ['1. Platz'] },
  { year: '2011', spiele: 1, siege: 1, unentschieden: 0, niederlagen: 0, turniere: [] },
  { year: '2010', spiele: 3, siege: 3, unentschieden: 0, niederlagen: 0, turniere: [] },
  {
    year: '2009',
    image: img2009,
    spiele: 6,
    siege: 4,
    unentschieden: 0,
    niederlagen: 2,
    turniere: ['in der Vorrunde ausgeschieden', '7. Platz'],
  },
  {
    year: '2008',
    image: img2008,
    spiele: 8,
    siege: 4,
    unentschieden: 2,
    niederlagen: 2,
    turniere: ['2. Platz'],
  },
  {
    year: '2007',
    image: img2007,
    spiele: 7,
    siege: 5,
    unentschieden: 0,
    niederlagen: 2,
    turniere: ['11. Platz'],
  },
  {
    year: '2006',
    image: img2006,
    spiele: 5,
    siege: 3,
    unentschieden: 2,
    niederlagen: 0,
    turniere: ['4. Platz', '3. Platz'],
  },
  {
    year: '2005',
    image: img2005,
    spiele: 6,
    siege: 3,
    unentschieden: 1,
    niederlagen: 2,
    turniere: ['im Viertelfinale ausgeschieden', '1. Platz'],
  },
]
