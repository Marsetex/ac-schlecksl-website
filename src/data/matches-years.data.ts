import type { MatchYear } from '@/models/matches/match-year.model'

export const matchYears: MatchYear[] = [
  {
    year: '2005',
    summary: [
      '6 Großfeldspiele: davon 3 Siege 1 Unentschieden und 2 Niederlagen',
      '2 Turniere: im Viertelfinale ausgeschieden und einmal 1. Platz',
    ],
    note: 'Bilder aus dem Jahr 2005 findest Du auf den Galerien',
    tournaments: [
      'Badenia Cup Pretzschendorf: im Viertelfinale nach 7 Meterschießen ausgeschieden',
      'Handballfest Kuppenheim: Turniersieger',
    ],
    games: [
      { result: '16.05. SC Mahlberg Freiolsheim - AC Schlecksl: 5:1' },
      { result: '09.07. Sasbachwalden AH - AC Schlecksl: 1:0' },
      { result: '25.07. Sportfest Schluttenbach: West Bombers - AC Schlecksl: 1:3' },
      { result: '30.07. CRK Eggenstein - AC Schlecksl: 1:1' },
      { result: '06.08. Victoria - AC Schlecksl: 0:2' },
      { result: '08.10. AC Schlecksl - CRK Eggenstein: 2:0' },
    ],
  },
  {
    year: '2006',
    summary: ['5 Großfeldspiele: davon 3 Siege und 2 Unentschieden', '2 Turniere: 4. und 3. Platz'],
    note: 'Bilder aus dem Jahr 2006 findest Du auf den Galerien',
    tournaments: ['Badenia Cup Pretzschendorf: 4. Platz', 'Handballfest Kuppenheim: 3. Platz'],
    games: [
      { result: '08.04. CRK Eggenstein - AC Schlecksl: 1:1' },
      { result: '29.04. Sasbachwalden AH - AC Schlecksl: 1:1' },
      { result: '03.06. Sportfest Waldprechtsweier: Mahlberg Freiolsheim - AC Schlecksl: 2:5' },
      { result: '29.07. Sportfest Schluttenbach: West Bombers - AC Schlecksl: 0:1' },
      { result: '27.08. Münchhausen - AC Schlecksl: 0:4' },
    ],
  },
  {
    year: '2007',
    summary: ['7 Großfeldspiele: davon 5 Siege 2 Niederlagen', '1 Turnier: 11.Platz'],
    note: 'Bilder aus dem Jahr 2007 findest Du auf den Galerien',
    tournaments: ['Badenia Cup Pretzschendorf: 11. Platz'],
    games: [
      { result: '05.05. CRK Eggenstein - AC Schlecksl: 1:3' },
      { result: '26.05. Munchhausen - AC Schlecksl: 0:4' },
      { result: '26.06. Sportfest Rauental: AH Obertsrot - AC Schlecksl: 1:0' },
      { result: '29.07. Sportfest Schluttenbach: West Bombers - AC Schlecksl: 1:3' },
      { result: '01.10. Sasbachwalden AH - AC Schlecksl: 0:1' },
      { result: '01.11. Keschte Igel - AC Schlecksl: 1:0' },
      { result: '10.11. CRK Eggenstein - AC Schlecksl: 0:4' },
    ],
  },
  {
    year: '2008',
    summary: [
      '8 Großßfeldspiele: davon 4 Siege, 2 Niederlagen und 2 Unentschieden',
      '1 Turnier: 2.Platz',
    ],
    note: 'Bilder aus dem Jahr 2008 findest Du auf den Galerien',
    tournaments: ['12.07.Kleinfeldturnier Keschte Igel: 2 Platz'],
    games: [
      { result: '10.05. Sportfest Waldprechtsweier: Blau Weiß Malsch - AC Schlecksl: 3:5' },
      { result: '10.05. Sportfest Waldprechtsweier: AC Schlecksl - Mahlberg Freiolsheim: 1:2' },
      { result: '07.06. AH Sasbachwalden - AC Schlecksl: 3:4' },
      { result: '23.06. CRK Eggenstein - AC Schlecksl: 3:3' },
      { result: '04.07. Sportfest Rauental: Volksbank Rastatt - AC Schlecksl: 6:2' },
      { result: '28.07. Sportfest Schluttenbach: West Bombers - AC Schlecksl: 0:2' },
      { result: '27.09. AH Herxheim - AC Schlecksl: 1:1' },
      { result: '25.10. CRK Eggenstein - AC Schlecksl: 2:5' },
    ],
  },
  {
    year: '2009',
    summary: [
      '6 Großfeldspiele: davon 4 Siege und 2 Niederlagen',
      '2 Turniere: in der Vorrunde ausgeschieden und 7. Platz',
    ],
    note: 'Bilder aus dem Jahr 2009 findest Du auf den Galerien',
    games: [
      { result: '01.03. Ü 40 Turnier Obertsrot: In der Vorrunde ausgeschieden' },
      {
        result: '23.05. Sasbachwalden AH - AC Schlecksl: 1 - 4',
        details: [
          'Aufstellung: Dominik Jörger, Andi Stemmle, Alex Warth, Harald Kolb, Jochen Uhrig, David Eckert, Sofian Barkaoui, Matthias Strolz, Jan Stemmle, Stephan Funke, Heinrich Eiermann',
          'Bank: Richard Schlick',
          'Torschützen: Heinrich Eiermann, Matthias Strolz, David Eckert, Jan Stemmle',
          'Hier gehts zur Galerie',
        ],
      },
      {
        result: '13.06. Sportfest Waldprechstweier: Mahlberg Freiolsheim - AC Schlecksl: 2 - 1',
        details: [
          'Aufstellung: Dominik Jörger, Michael Hertweck, Harald Kolb, Robert Wozniak, Albert Hatz, Matthias Strolz, Denis Delic, Jan Stemmle, Matthias Kühnle, Stephan Funke, Richard Schlick',
          'Torschütze: Michael Hertweck',
        ],
      },
      {
        result: '21.06. Badenia Cup Pretzschendorf: 7. Platz',
        details: [
          'Aufstellung: Jochen Uhrig, Michael Hertweck, Robert Wozniak, Matthias Strolz, Denis Delic, Jan Stemmle, Stephan Funke, Norbert Stemmle, Hans Jürgen Hertweck',
          'Torschützen: Michael Hertweck, Denis Delic, Jan Stemmle, Robert Wozniak (jeweils ein Tor)',
          '9 Meter Schießen: Michael Hertweck, Norbert Stemmle, Jan Stemmle, Robert Wozniak (jeweils ein Tor)',
        ],
      },
      {
        result: '03.07. Sportfest Rauental: AC Schlecksl - Johnson Control: 6 - 3',
        details: [
          'Aufstellung: Uli Grunwald, Hans Jürgen Hertweck, Harald Kolb, Jan Stemmle, Michael Hertweck, Freddie Zeich, Norbert Stemmle, Ingo Warth, Markus Walz, Klaus Peter Maier, Stephan Funke',
          'Bank: Jochen Uhrig, Albert Hatz, Sofian Barkaoui',
          'Torschützen: Stephan Funke (2x), Klaus Peter Maier, Markus Walz (2x), Norbert Stemmle',
        ],
      },
      {
        result: '11.07. CRK Eggenstein - AC Schlecksl: 1 - 5',
        details: [
          'Aufstellung: Uli Grunwald, Hans Jürgen Hertweck, Harald Kolb, Jan Stemmle, Jochen Uhrig, Matthias Strolz, Ingo Warth, Eric, Klaus Peter Maier, Stephan Funke, Heinrich Eiermann',
          'Bank: Norbert Stemmle',
          'Torschützen: Stephan Funke, Heinrich Eiermann (2x), Ingo Warth, Eric',
        ],
      },
      {
        result: '27.07. Westbombers - AC Schlecksl: 1 - 3',
        details: [
          'Aufstellung: Norbert Stemmle, Michael Hertweck, Hans Jürgen Hertweck, Robert Wozniak, Harald Kolb, Jan Stemmle, Matthias Strolz, Ingo Warth, Stephan Funke, Heinrich Eiermann, Richard Schlick',
          'Torschützen: Richard Schlick, Heinrich Eiermann (2x)',
        ],
      },
      {
        result: '31.10. Keschte Igel - AC Schlecksl: 5 - 2',
        details: [
          'Aufstellung: Norbert Stemmle, Andi Stemmle, Alex Warth, Robert Wozniak, Michael Hertweck, Matthias Strolz, Jan Stemmle, Klaus Peter Maier, Andreas Streck, Matthias Kühnle, Wilfried Rösner',
          'Bank: Harald Kolb, Jochen Uhrig, Stephan Funke',
          'Torschützen: Wilfried Rösner, Matthias Kühnle',
        ],
      },
    ],
  },
  {
    year: '2010',
    summary: ['3 Großfeldspiele: davon 3 Siege'],
    games: [
      {
        result: '22.04. Sasbachwalden AH - AC Schlecksl: 1 - 3',
        lineup:
          'Dominik Jörger, Harald Kolb, Alex Warth, Robert Wozniak, Ingo Warth, Klaus-Peter Maier, Eric, Jochen Uhrig, Freddy Zeich, Jan Stemmle, Stephan Funke, Heinrich Eiermann',
        scorers: 'Ingo Warth, Stephan Funke, Jan Stemmle',
      },
      {
        result: '26.07. Westbombers - AC Schlecksl: 2 - 3',
        lineup:
          'Jan Stemmle, Jürgen Büchele, Alex Warth, Hans-Jürgen Hertweck, Marcel, Jochen Uhrig, Ingo Warth, Matthias Strolz, Freddy Zeich, Stefan Funke, Heinrich Eiermann',
        scorers: 'Ingo Warth, Stephan Funke, Heinrich Eiermann',
      },
      { result: '25.09. CRK Eggenstein - AC Schlecksl: 0 - 5' },
    ],
  },
  {
    year: '2011',
    summary: ['1 Großfeldspiel: davon 1 Siege'],
    games: [
      {
        result: '09.04. Keschte Igel - AC Schlecksl: 1 - 3',
        lineup:
          'Hans Hertweck, Alex Warth, Robert Wozniak, Jürgen Büchele, Jochen Uhrig, Klaus-Peter Maier, Denis Delic, Stefan Funke, Heinrich Eiermann, Sofian Barkaoui, Norbert Stemmle, Jan Stemmle',
        scorers: 'Stefan Funke (2x), Sofian Barkaoui',
      },
    ],
  },
]
