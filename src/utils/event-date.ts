import type { ClubEvent } from '@/models/events/club-event.model'

const CURRENT_YEAR = new Date().getFullYear()

const weekdayLongFormatter = new Intl.DateTimeFormat('de-DE', { weekday: 'long' })
const weekdayShortFormatter = new Intl.DateTimeFormat('de-DE', { weekday: 'short' })
const monthShortFormatter = new Intl.DateTimeFormat('de-DE', { month: 'short' })
const monthLongFormatter = new Intl.DateTimeFormat('de-DE', { month: 'long' })

function parseEventDate(value: string): Date {
  return new Date(`${value}T12:00:00`)
}

function toLocalIsoDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export interface EventDateParts {
  weekday: string
  day: string
  month: string
  year: number | null
}

export function getEventDateParts(event: ClubEvent): EventDateParts {
  const start = parseEventDate(event.date)

  if (!event.endDate) {
    return {
      weekday: weekdayLongFormatter.format(start),
      day: String(start.getDate()),
      month: monthShortFormatter.format(start).toUpperCase(),
      year: start.getFullYear() !== CURRENT_YEAR ? start.getFullYear() : null,
    }
  }

  const end = parseEventDate(event.endDate)
  return {
    weekday: `${weekdayShortFormatter.format(start)}/${weekdayShortFormatter.format(end)}`,
    day: `${start.getDate()}.–${end.getDate()}.`,
    month: monthShortFormatter.format(end).toUpperCase(),
    year: end.getFullYear() !== CURRENT_YEAR ? end.getFullYear() : null,
  }
}

export function formatEventDateLabel(event: ClubEvent): string {
  const start = parseEventDate(event.date)
  const end = event.endDate ? parseEventDate(event.endDate) : null
  const referenceYear = (end ?? start).getFullYear()
  const yearSuffix = referenceYear !== CURRENT_YEAR ? ` ${referenceYear}` : ''

  if (!end) {
    return `${start.getDate()}. ${monthLongFormatter.format(start)}${yearSuffix}`
  }

  return `${start.getDate()}.–${end.getDate()}. ${monthLongFormatter.format(end)}${yearSuffix}`
}

export function getUpcomingEvents(
  events: ClubEvent[],
  referenceDate: Date = new Date(),
  limit?: number,
): ClubEvent[] {
  const today = toLocalIsoDate(referenceDate)
  const upcoming = events
    .filter((event) => (event.endDate ?? event.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
  return limit ? upcoming.slice(0, limit) : upcoming
}
