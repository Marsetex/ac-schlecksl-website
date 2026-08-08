<script lang="ts" setup>
import AppFooter from '@/components/layout/AppFooter.vue'
import NavigationBar from '@/components/layout/NavigationBar.vue'

const tournaments: string[] = ['Badenia Cup Pretzschendorf: 11. Platz']

const games: string[] = [
  '05.05. CRK Eggenstein - AC Schlecksl: 1:3',
  '26.05. Munchhausen - AC Schlecksl: 0:4',
  '26.06. Sportfest Rauental: AH Obertsrot - AC Schlecksl: 1:0',
  '29.07. Sportfest Schluttenbach: West Bombers - AC Schlecksl: 1:3',
  '01.10. Sasbachwalden AH - AC Schlecksl: 0:1',
  '01.11. Keschte Igel - AC Schlecksl: 1:0',
  '10.11. CRK Eggenstein - AC Schlecksl: 0:4',
]
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-3xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Ergebnisse 2007</h1>
      <p class="font-body text-pitch-dark/80 mt-4 text-[15px] leading-relaxed">
        7 Großfeldspiele: davon 5 Siege 2 Niederlagen
      </p>
      <p class="font-body text-pitch-dark/80 text-[15px] leading-relaxed">1 Turnier: 11.Platz</p>
      <p class="font-body text-pitch-dark/60 mt-2 text-sm italic">
        Bilder aus dem Jahr 2007 findest Du auf den Galerien
      </p>

      <h2 class="font-display text-club-blue mt-10 text-xl font-bold">Turniere 2007</h2>
      <ul class="mt-4 divide-y divide-club-blue/10 rounded-lg bg-white/70 shadow-sm">
        <li
          v-for="line in tournaments"
          :key="line"
          class="font-body text-pitch-dark/80 p-4 text-[15px] leading-relaxed"
        >
          {{ line }}
        </li>
      </ul>

      <h2 class="font-display text-club-blue mt-10 text-xl font-bold">Großfeldspiele 2007</h2>
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

    <AppFooter />
  </div>
</template>
