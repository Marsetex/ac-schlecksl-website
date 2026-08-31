<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'

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
  <DefaultPageLayout>
    <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Ergebnisse 2006</h1>
    <p class="text-rich-black/80 mt-4 text-[15px] leading-relaxed">
      5 Großfeldspiele: davon 3 Siege und 2 Unentschieden
    </p>
    <p class="text-rich-black/80 text-[15px] leading-relaxed">2 Turniere: 4. und 3. Platz</p>
    <p class="text-rich-black/60 mt-2 text-sm italic">
      Bilder aus dem Jahr 2006 findest Du auf den Galerien
    </p>

    <h2 class="text-celtic-blue mt-10 text-xl font-bold">Turniere 2006</h2>
    <ul class="mt-4 divide-y divide-celtic-blue/10 rounded-lg bg-white/70 shadow-sm">
      <li
        v-for="line in tournaments"
        :key="line"
        class="text-rich-black/80 p-4 text-[15px] leading-relaxed"
      >
        {{ line }}
      </li>
    </ul>

    <h2 class="text-celtic-blue mt-10 text-xl font-bold">Großfeldspiele 2006</h2>
    <ul class="mt-4 divide-y divide-celtic-blue/10 rounded-lg bg-white/70 shadow-sm">
      <li
        v-for="line in games"
        :key="line"
        class="text-rich-black/80 p-4 text-[15px] leading-relaxed"
      >
        {{ line }}
      </li>
    </ul>
  </DefaultPageLayout>
</template>
