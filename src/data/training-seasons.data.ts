import type { TrainingSeason } from '@/models/training/training-season.model'

export const trainingSeasons: TrainingSeason[] = [
  {
    season: 'summer',
    label: 'Sommer',
    months: 'März – November',
    time: '20:15 Uhr',
    venueName: 'FV Baden-Oos',
    address: 'Im Ried 1, 76532 Baden-Baden',
  },
  {
    season: 'winter',
    label: 'Winter',
    months: 'Dezember – Februar',
    time: '20:00 Uhr',
    venueName: 'Soccer Palace',
    address: 'Großaustraße 7, 76456 Kuppenheim',
  },
]
