import type { ClubEvent } from '@/models/events/club-event.model'

export const events: ClubEvent[] = [
  {
    date: '2026-05-01',
    title: 'Wanderer- und Radfahrertreff',
    location: 'Bei Klaus und Carmen',
    note: 'Wie in den letzten Jahren',
  },
  {
    date: '2026-06-07',
    title: 'Mitgliederversammlung',
    location: 'OGV-Gelände',
  },
  {
    date: '2026-08-01',
    title: 'Grillfest',
    location: 'OGV-Gelände, Kuppenheim',
  },
  {
    date: '2026-09-05',
    title: 'Vereinsausflug',
    note: 'Ausweichtermin: 26.09.',
  },
  {
    date: '2026-10-10',
    endDate: '2026-10-11',
    title: 'Jahrmarkt',
    location: 'Kuppenheim Rathaus',
  },
  {
    date: '2027-01-30',
    title: 'Winterfeier',
    location: 'Bei Olga',
  },
]
