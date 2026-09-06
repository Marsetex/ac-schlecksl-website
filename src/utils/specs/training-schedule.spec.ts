import { describe, it, expect } from 'vitest'
import { getTrainingSeasonFor, getNextTrainingDate } from '../training-schedule'

function localIsoDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

describe('training-schedule', () => {
  describe('getTrainingSeasonFor', () => {
    it('treats December as winter', () => {
      expect(getTrainingSeasonFor(new Date(2026, 11, 15))).toBe('winter')
    })

    it('treats January as winter', () => {
      expect(getTrainingSeasonFor(new Date(2026, 0, 15))).toBe('winter')
    })

    it('treats February as winter', () => {
      expect(getTrainingSeasonFor(new Date(2026, 1, 15))).toBe('winter')
    })

    it('treats March as summer', () => {
      expect(getTrainingSeasonFor(new Date(2026, 2, 1))).toBe('summer')
    })

    it('treats November as summer', () => {
      expect(getTrainingSeasonFor(new Date(2026, 10, 30))).toBe('summer')
    })
  })

  describe('getNextTrainingDate', () => {
    it('returns the same day when the reference date already is a training Thursday', () => {
      // 2026-03-12 is a Thursday and not a holiday.
      const result = getNextTrainingDate(new Date(2026, 2, 12, 18, 30))

      expect(localIsoDate(result)).toBe('2026-03-12')
    })

    it('advances to the following Thursday from an earlier weekday', () => {
      // 2026-03-11 is a Wednesday.
      const result = getNextTrainingDate(new Date(2026, 2, 11))

      expect(localIsoDate(result)).toBe('2026-03-12')
    })

    it('skips a Thursday that falls on a public holiday', () => {
      // 2026-05-14 (Christi Himmelfahrt) is a holiday Thursday, so training moves to 2026-05-21.
      const result = getNextTrainingDate(new Date(2026, 4, 13))

      expect(localIsoDate(result)).toBe('2026-05-21')
    })

    it('skips to the week after when the reference date itself is a holiday Thursday', () => {
      // 2026-06-04 (Fronleichnam) is a holiday Thursday.
      const result = getNextTrainingDate(new Date(2026, 5, 4))

      expect(localIsoDate(result)).toBe('2026-06-11')
    })

    it('normalizes the returned date to midnight', () => {
      const result = getNextTrainingDate(new Date(2026, 2, 12, 23, 45))

      expect(result.getHours()).toBe(0)
      expect(result.getMinutes()).toBe(0)
      expect(result.getSeconds()).toBe(0)
      expect(result.getMilliseconds()).toBe(0)
    })
  })
})
