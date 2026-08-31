<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'

interface Match {
  result: string
  lineup?: string
  scorers?: string
}

const matches: Match[] = [
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
  {
    result: '25.09. CRK Eggenstein - AC Schlecksl: 0 - 5',
  },
]
</script>

<template>
  <DefaultPageLayout>
    <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Ergebnisse 2010</h1>
    <p class="text-rich-black/80 mt-4 text-[15px] leading-relaxed">
      3 Großfeldspiele: davon 3 Siege
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
