const dayFormatter = new Intl.DateTimeFormat('de-DE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})
const monthFormatter = new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric' })

export function formatNewsDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number)

  if (day !== undefined) {
    return dayFormatter.format(new Date(year!, month! - 1, day))
  }
  if (month !== undefined) {
    return monthFormatter.format(new Date(year!, month - 1, 1))
  }
  return String(year)
}
