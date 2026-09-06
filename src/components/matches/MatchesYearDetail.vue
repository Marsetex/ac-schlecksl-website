<script lang="ts" setup>
import type { MatchYear } from '@/models/matches/match-year.model'

interface Props {
  year: MatchYear
}

defineProps<Props>()
</script>

<template>
  <div>
    <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Ergebnisse {{ year.year }}</h1>

    <p
      v-for="line in year.summary"
      :key="line"
      class="text-rich-black/80 mt-4 text-[15px] leading-relaxed first:mt-4"
    >
      {{ line }}
    </p>

    <p v-if="year.note" class="text-rich-black/60 mt-2 text-sm italic">
      {{ year.note }}
    </p>

    <template v-if="year.tournaments && year.tournaments.length > 0">
      <h2 class="text-celtic-blue mt-10 text-xl font-bold">Turniere {{ year.year }}</h2>
      <ul class="divide-celtic-blue/10 mt-4 divide-y rounded-lg bg-white/70 shadow-sm">
        <li
          v-for="line in year.tournaments"
          :key="line"
          class="text-rich-black/80 p-4 text-[15px] leading-relaxed"
        >
          {{ line }}
        </li>
      </ul>
    </template>

    <h2 class="text-celtic-blue mt-10 text-xl font-bold">Großfeldspiele {{ year.year }}</h2>
    <div class="mt-4 space-y-6">
      <article
        v-for="game in year.games"
        :key="game.result"
        class="rounded-lg bg-white/70 p-5 shadow-sm sm:p-6"
      >
        <p class="text-celtic-blue font-semibold">{{ game.result }}</p>
        <p v-if="game.lineup" class="text-rich-black/80 mt-2 text-[15px] leading-relaxed">
          Aufstellung: {{ game.lineup }}
        </p>
        <p v-if="game.scorers" class="text-rich-black/80 text-[15px] leading-relaxed">
          Torschützen: {{ game.scorers }}
        </p>
        <p
          v-for="detail in game.details"
          :key="detail"
          class="text-rich-black/80 mt-2 text-[15px] leading-relaxed first:mt-2"
        >
          {{ detail }}
        </p>
      </article>
    </div>
  </div>
</template>
