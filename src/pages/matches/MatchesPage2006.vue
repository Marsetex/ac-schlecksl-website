<script lang="ts" setup>
import NavigationBar from '@/components/layout/NavigationBar.vue'

const tournaments: string[] = [
  'Badenia Cup Pretzschendorf: 4. Platz',
  'Handballfest Kuppenheim: 3. Platz',
]

const games: string[] = [
  '08.04. CRK Eggenstein - AC Schlecksl: 1:1',
  '29.04. Sasbachwalden AH - AC Schlecksl: 1:1',
  '03.06. Sportfest Waldprechtsweier: Mahlberg Freiolsheim - AC Schlecksl: 2:5',
  '29.07. Sportfest Schluttenbach: West Bombers - AC Schlecksl: 0:1',
  '27.08. Münchhausen - AC Schlecksl: 0:4',
]
</script>

<template>
  <div class="bg-chalk min-h-screen font-sans">
    <NavigationBar />

    <main class="mx-auto max-w-3xl px-6 pt-28 pb-24 sm:px-8">
      <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Ergebnisse 2006</h1>
      <p class="font-body text-pitch-dark/80 mt-4 text-[15px] leading-relaxed">
        5 Großfeldspiele: davon 3 Siege und 2 Unentschieden
      </p>
      <p class="font-body text-pitch-dark/80 text-[15px] leading-relaxed">
        2 Turniere: 4. und 3. Platz
      </p>
      <p class="font-body text-pitch-dark/60 mt-2 text-sm italic">
        Bilder aus dem Jahr 2006 findest Du auf den Galerien
      </p>

      <h2 class="font-display text-club-blue mt-10 text-xl font-bold">Turniere 2006</h2>
      <ul class="mt-4 divide-y divide-club-blue/10 rounded-lg bg-white/70 shadow-sm">
        <li
          v-for="line in tournaments"
          :key="line"
          class="font-body text-pitch-dark/80 p-4 text-[15px] leading-relaxed"
        >
          {{ line }}
        </li>
      </ul>

      <h2 class="font-display text-club-blue mt-10 text-xl font-bold">Großfeldspiele 2006</h2>
      <ul class="mt-4 divide-y divide-club-blue/10 rounded-lg bg-white/70 shadow-sm">
        <li
          v-for="line in games"
          :key="line"
          class="font-body text-pitch-dark/80 p-4 text-[15px] leading-relaxed"
        >
          {{ line }}
        </li>
      </ul>
    </main>
  </div>
</template>
