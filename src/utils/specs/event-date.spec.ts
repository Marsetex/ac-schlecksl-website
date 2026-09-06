import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getEventDateParts, formatEventDateLabel, getUpcomingEvents } from '../event-date'
import type { ClubEvent } from '@/models/events/club-event.model'

function makeEvent(overrides: Partial<ClubEvent> = {}): ClubEvent {
  return {
    date: '2026-03-12',
    title: 'Test-Event',
    ...overrides,
  }
}

describe('event-date', () => {
  beforeEach(() => {
    vi.setSystemTime(new Date('2026-06-01T00:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('getEventDateParts', () => {
    it('formats a single-day event in the current year without a year suffix', () => {
      const parts = getEventDateParts(makeEvent({ date: '2026-03-12' }))

      expect(parts).toEqual({
        weekday: 'Donnerstag',
        day: '12',
        month: 'MÄR',
        year: null,
      })
    })

    it('includes the year when a single-day event falls outside the current year', () => {
      const parts = getEventDateParts(makeEvent({ date: '2027-03-12' }))

      expect(parts.year).toBe(2027)
    })

    it('formats a multi-day event spanning a range', () => {
      const parts = getEventDateParts(makeEvent({ date: '2026-03-12', endDate: '2026-03-14' }))

      expect(parts).toEqual({
        weekday: 'Do/Sa',
        day: '12.–14.',
        month: 'MÄR',
        year: null,
      })
    })

    it('uses the end date to decide the year suffix for multi-day events', () => {
      const parts = getEventDateParts(
        makeEvent({ date: '2026-12-30', endDate: '2027-01-02' }),
      )

      expect(parts.year).toBe(2027)
    })
  })

  describe('formatEventDateLabel', () => {
    it('formats a single-day event without a year suffix in the current year', () => {
      expect(formatEventDateLabel(makeEvent({ date: '2026-03-12' }))).toBe('12. März')
    })

    it('appends the year for a single-day event outside the current year', () => {
      expect(formatEventDateLabel(makeEvent({ date: '2027-03-12' }))).toBe('12. März 2027')
    })

    it('formats a multi-day event as a day range with a single month', () => {
      expect(
        formatEventDateLabel(makeEvent({ date: '2026-03-12', endDate: '2026-03-14' })),
      ).toBe('12.–14. März')
    })

    it('uses the end date year for the suffix on a year-spanning multi-day event', () => {
      expect(
        formatEventDateLabel(makeEvent({ date: '2026-12-30', endDate: '2027-01-02' })),
      ).toBe('30.–2. Januar 2027')
    })
  })

  describe('getUpcomingEvents', () => {
    const reference = new Date('2026-06-15T12:00:00')

    it('excludes events that lie fully in the past', () => {
      const events = [makeEvent({ date: '2026-06-14' }), makeEvent({ date: '2026-06-15' })]

      const result = getUpcomingEvents(events, reference)

      expect(result.map((event) => event.date)).toEqual(['2026-06-15'])
    })

    it('keeps a multi-day event that has already started but not yet ended', () => {
      const events = [makeEvent({ date: '2026-06-10', endDate: '2026-06-20' })]

      const result = getUpcomingEvents(events, reference)

      expect(result).toHaveLength(1)
    })

    it('sorts the remaining events chronologically by start date', () => {
      const events = [
        makeEvent({ date: '2026-08-01', title: 'Später' }),
        makeEvent({ date: '2026-06-20', title: 'Früher' }),
      ]

      const result = getUpcomingEvents(events, reference)

      expect(result.map((event) => event.title)).toEqual(['Früher', 'Später'])
    })

    it('respects the optional limit', () => {
      const events = [
        makeEvent({ date: '2026-06-16' }),
        makeEvent({ date: '2026-06-17' }),
        makeEvent({ date: '2026-06-18' }),
      ]

      const result = getUpcomingEvents(events, reference, 2)

      expect(result).toHaveLength(2)
    })

    it('defaults to the current date when no reference date is given', () => {
      const events = [makeEvent({ date: '2026-05-31' }), makeEvent({ date: '2026-06-01' })]

      const result = getUpcomingEvents(events)

      expect(result.map((event) => event.date)).toEqual(['2026-06-01'])
    })
  })
})
