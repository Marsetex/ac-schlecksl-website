<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'

const tournaments: string[] = ['12.07.Kleinfeldturnier Keschte Igel: 2 Platz']

const games: string[] = [
  '10.05. Sportfest Waldprechtsweier: Blau Weiß Malsch - AC Schlecksl: 3:5',
  '10.05. Sportfest Waldprechtsweier: AC Schlecksl - Mahlberg Freiolsheim: 1:2',
  '07.06. AH Sasbachwalden - AC Schlecksl: 3:4',
  '23.06. CRK Eggenstein - AC Schlecksl: 3:3',
  '04.07. Sportfest Rauental: Volksbank Rastatt - AC Schlecksl: 6:2',
  '28.07. Sportfest Schluttenbach: West Bombers - AC Schlecksl: 0:2',
  '27.09. AH Herxheim - AC Schlecksl: 1:1',
  '25.10. CRK Eggenstein - AC Schlecksl: 2:5',
]
</script>

<template>
  <DefaultPageLayout>
    <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Ergebnisse 2008</h1>
    <p class="text-rich-black/80 mt-4 text-[15px] leading-relaxed">
      8 Großßfeldspiele: davon 4 Siege, 2 Niederlagen und 2 Unentschieden
    </p>
    <p class="text-rich-black/80 text-[15px] leading-relaxed">1 Turnier: 2.Platz</p>
    <p class="text-rich-black/60 mt-2 text-sm italic">
      Bilder aus dem Jahr 2008 findest Du auf den Galerien
    </p>

    <h2 class="text-celtic-blue mt-10 text-xl font-bold">Turniere 2008</h2>
    <ul class="mt-4 divide-y divide-celtic-blue/10 rounded-lg bg-white/70 shadow-sm">
      <li
        v-for="line in tournaments"
        :key="line"
        class="text-rich-black/80 p-4 text-[15px] leading-relaxed"
      >
        {{ line }}
      </li>
    </ul>

    <h2 class="text-celtic-blue mt-10 text-xl font-bold">Großfeldspiele 2008</h2>
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
