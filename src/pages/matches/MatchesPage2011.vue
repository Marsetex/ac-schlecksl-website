<script lang="ts" setup>
import AppFooter from '@/components/layout/AppFooter.vue'
import NavigationBar from '@/components/layout/NavigationBar.vue'

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
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-3xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Ergebnisse 2011</h1>
      <p class="font-body text-pitch-dark/80 mt-4 text-[15px] leading-relaxed">
        1 Großfeldspiel: davon 1 Siege
      </p>

      <div class="mt-8 space-y-6">
        <article
          v-for="match in matches"
          :key="match.result"
          class="rounded-lg bg-white/70 p-5 shadow-sm sm:p-6"
        >
          <p class="font-display text-club-blue font-semibold">{{ match.result }}</p>
          <p
            v-if="match.lineup"
            class="font-body text-pitch-dark/80 mt-2 text-[15px] leading-relaxed"
          >
            Aufstellung: {{ match.lineup }}
          </p>
          <p v-if="match.scorers" class="font-body text-pitch-dark/80 text-[15px] leading-relaxed">
            Torschützen: {{ match.scorers }}
          </p>
        </article>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
