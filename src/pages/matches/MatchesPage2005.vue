<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'

const tournaments: string[] = [
  'Badenia Cup Pretzschendorf: im Viertelfinale nach 7 Meterschießen ausgeschieden',
  'Handballfest Kuppenheim: Turniersieger',
]

const games: string[] = [
  '16.05. SC Mahlberg Freiolsheim - AC Schlecksl: 5:1',
  '09.07. Sasbachwalden AH - AC Schlecksl: 1:0',
  '25.07. Sportfest Schluttenbach: West Bombers - AC Schlecksl: 1:3',
  '30.07. CRK Eggenstein - AC Schlecksl: 1:1',
  '06.08. Victoria - AC Schlecksl: 0:2',
  '08.10. AC Schlecksl - CRK Eggenstein: 2:0',
]
</script>

<template>
  <DefaultPageLayout>
    <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Ergebnisse 2005</h1>
    <p class="text-rich-black/80 mt-4 text-[15px] leading-relaxed">
      6 Großfeldspiele: davon 3 Siege 1 Unentschieden und 2 Niederlagen
    </p>
    <p class="text-rich-black/80 text-[15px] leading-relaxed">
      2 Turniere: im Viertelfinale ausgeschieden und einmal 1. Platz
    </p>
    <p class="text-rich-black/60 mt-2 text-sm italic">
      Bilder aus dem Jahr 2005 findest Du auf den Galerien
    </p>

    <h2 class="text-celtic-blue mt-10 text-xl font-bold">Turniere 2005</h2>
    <ul class="mt-4 divide-y divide-celtic-blue/10 rounded-lg bg-white/70 shadow-sm">
      <li
        v-for="line in tournaments"
        :key="line"
        class="text-rich-black/80 p-4 text-[15px] leading-relaxed"
      >
        {{ line }}
      </li>
    </ul>

    <h2 class="text-celtic-blue mt-10 text-xl font-bold">Großfeldspiele 2005</h2>
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
