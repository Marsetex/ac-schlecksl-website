// Gesetzliche Feiertage in Baden-Württemberg, an denen kein Training stattfindet.
const HOLIDAYS = new Set([
  '2026-01-01',
  '2026-01-06',
  '2026-04-03',
  '2026-04-06',
  '2026-05-01',
  '2026-05-14',
  '2026-05-25',
  '2026-06-04',
  '2026-10-03',
  '2026-11-01',
  '2026-12-25',
  '2026-12-26',
  '2027-01-01',
  '2027-01-06',
  '2027-03-26',
  '2027-03-29',
  '2027-05-01',
  '2027-05-06',
  '2027-05-17',
  '2027-05-27',
  '2027-10-03',
  '2027-11-01',
  '2027-12-25',
  '2027-12-26',
])

const THURSDAY = 4

function toLocalIsoDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export type TrainingSeasonKey = 'summer' | 'winter'

export function getTrainingSeasonFor(date: Date): TrainingSeasonKey {
  const month = date.getMonth()
  return month === 11 || month <= 1 ? 'winter' : 'summer'
}

export function getNextTrainingDate(referenceDate: Date = new Date()): Date {
  const date = new Date(referenceDate)
  date.setHours(0, 0, 0, 0)
  while (date.getDay() !== THURSDAY || HOLIDAYS.has(toLocalIsoDate(date))) {
    date.setDate(date.getDate() + 1)
  }
  return date
}
