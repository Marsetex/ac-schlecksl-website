import type { TeamGroup } from '@/models/team/team-group.model'
import imgDenisDelic from '@/assets/team/denis-delic.jpg'
import imgHeinrichEiermann from '@/assets/team/heinrich-eiermann.jpg'
import imgStephanFunke from '@/assets/team/stephan-funke.jpg'
import imgHansiHertweck from '@/assets/team/hansi-hertweck.jpg'
import imgGuenterHirn from '@/assets/team/guenter-hirn.jpg'
import imgHaraldKolb from '@/assets/team/harald-kolb.jpg'
import imgJanStemmle from '@/assets/team/jan-stemmle.jpg'
import imgMatthiasStrolz from '@/assets/team/matthias-strolz.jpg'
import imgJochenUhrig from '@/assets/team/jochen-uhrig.jpg'
import imgAlexanderWarth from '@/assets/team/alexander-warth.jpg'
import imgIngoWarth from '@/assets/team/ingo-warth.jpg'
import imgRobertWozniak from '@/assets/team/robert-wozniak.jpg'
import imgFreddyZeich from '@/assets/team/freddy-zeich.gif'
import imgAlexanderSchikalow from '@/assets/team/alexander-schikalow.jpg'
import imgSergejSchikalow from '@/assets/team/sergej-schikalow.gif'
import imgBerndPlaisance from '@/assets/team/bernd-plaisance.jpg'
import imgKlausReiss from '@/assets/team/klaus-reiss.jpg'
import imgWilfriedRoesner from '@/assets/team/wilfried-roesner.gif'
import imgPeterGrohmann from '@/assets/team/peter-grohmann.jpg'
import imgFranzIkker from '@/assets/team/franz-ikker.jpg'
import imgDominikJoerger from '@/assets/team/dominik-joerger.jpg'
import imgAndiStemmle from '@/assets/team/andi-stemmle.jpg'
import imgDavidEckert from '@/assets/team/david-eckert.jpg'
import imgMatthiasKuehnle from '@/assets/team/matthias-kuehnle.jpg'
import imgPatrikHirn from '@/assets/team/patrik-hirn.jpg'

export const teamGroups: TeamGroup[] = [
  {
    heading: 'Aktueller Kader',
    players: [
      { name: 'Denis Delic', image: imgDenisDelic },
      { name: 'Heinrich Eiermann', image: imgHeinrichEiermann },
      { name: 'Stephan Funke', image: imgStephanFunke },
      { name: 'Hansi Hertweck', image: imgHansiHertweck },
      { name: 'Günter Hirn', image: imgGuenterHirn },
      { name: 'Harald Kolb', image: imgHaraldKolb },
      { name: 'Jan Stemmle', image: imgJanStemmle },
      { name: 'Matthias Strolz', image: imgMatthiasStrolz },
      { name: 'Jochen Uhrig', image: imgJochenUhrig },
      { name: 'Alexander Warth', image: imgAlexanderWarth },
      { name: 'Ingo Warth', image: imgIngoWarth },
      { name: 'Robert Wozniak', image: imgRobertWozniak },
      { name: 'Freddy Zeich', image: imgFreddyZeich },
    ],
  },
  {
    heading: 'Ehemalige',
    players: [
      { name: 'Alexander Schikalow', image: imgAlexanderSchikalow },
      { name: 'Sergej Schikalow', image: imgSergejSchikalow },
      { name: 'Bernd Plaisance', image: imgBerndPlaisance },
      { name: 'Klaus Reiss', image: imgKlausReiss },
      { name: 'Wilfried Rösner', image: imgWilfriedRoesner },
      { name: 'Peter Grohmann', image: imgPeterGrohmann },
      { name: 'Franz Ikker', image: imgFranzIkker },
    ],
  },
  {
    heading: '"Legionäre"',
    players: [
      { name: 'Dominik Jörger', image: imgDominikJoerger },
      { name: 'Andi Stemmle', image: imgAndiStemmle },
      { name: 'David Eckert', image: imgDavidEckert },
      { name: 'Matthias Kühnle', image: imgMatthiasKuehnle },
      { name: 'Patrik Hirn', image: imgPatrikHirn },
    ],
  },
]
