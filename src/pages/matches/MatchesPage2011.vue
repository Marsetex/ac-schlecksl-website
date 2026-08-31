<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'

interface Match {
  result: string
  lineup?: string
  scorers?: string
}

const matches: Match[] = [
  {
    result: '09.04. Keschte Igel - AC Schlecksl: 1 - 3',
    lineup:
      'Hans Hertweck, Alex Warth, Robert Wozniak, Jürgen Büchele, Jochen Uhrig, Klaus-Peter Maier, Denis Delic, Stefan Funke, Heinrich Eiermann, Sofian Barkaoui, Norbert Stemmle, Jan Stemmle',
    scorers: 'Stefan Funke (2x), Sofian Barkaoui',
  },
]
</script>

<template>
  <DefaultPageLayout>
    <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Ergebnisse 2011</h1>
    <p class="text-rich-black/80 mt-4 text-[15px] leading-relaxed">
      1 Großfeldspiel: davon 1 Siege
    </p>

    <div class="mt-8 space-y-6">
      <article
        v-for="match in matches"
        :key="match.result"
        class="rounded-lg bg-white/70 p-5 shadow-sm sm:p-6"
      >
        <p class="text-celtic-blue font-semibold">{{ match.result }}</p>
        <p v-if="match.lineup" class="text-rich-black/80 mt-2 text-[15px] leading-relaxed">
          Aufstellung: {{ match.lineup }}
        </p>
        <p v-if="match.scorers" class="text-rich-black/80 text-[15px] leading-relaxed">
          Torschützen: {{ match.scorers }}
        </p>
      </article>
    </div>
  </DefaultPageLayout>
</template>
