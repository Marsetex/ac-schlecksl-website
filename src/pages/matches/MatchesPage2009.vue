<script lang="ts" setup>
import AppFooter from '@/components/layout/AppFooter.vue'
import NavigationBar from '@/components/layout/NavigationBar.vue'

interface Match {
  result: string
  details?: string[]
}

const matches: Match[] = [
  {
    result: '01.03. Ü 40 Turnier Obertsrot: In der Vorrunde ausgeschieden',
  },
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
]
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-3xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Ergebnisse 2009</h1>
      <p class="font-body text-pitch-dark/80 mt-4 text-[15px] leading-relaxed">
        6 Großfeldspiele: davon 4 Siege und 2 Niederlagen
      </p>
      <p class="font-body text-pitch-dark/80 text-[15px] leading-relaxed">
        2 Turniere: in der Vorrunde ausgeschieden und 7. Platz
      </p>
      <p class="font-body text-pitch-dark/60 mt-2 text-sm italic">
        Bilder aus dem Jahr 2009 findest Du auf den Galerien
      </p>

      <div class="mt-8 space-y-6">
        <article
          v-for="match in matches"
          :key="match.result"
          class="rounded-lg bg-white/70 p-5 shadow-sm sm:p-6"
        >
          <p class="font-display text-club-blue font-semibold">{{ match.result }}</p>
          <p
            v-for="detail in match.details"
            :key="detail"
            class="font-body text-pitch-dark/80 mt-2 text-[15px] leading-relaxed first:mt-2"
          >
            {{ detail }}
          </p>
        </article>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
