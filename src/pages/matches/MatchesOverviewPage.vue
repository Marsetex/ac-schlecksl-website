<script lang="ts" setup>
import AppFooter from '@/components/layout/AppFooter.vue'
import NavigationBar from '@/components/layout/NavigationBar.vue'
import img2009 from '@/assets/matches/2009.jpg'
import img2008 from '@/assets/matches/2008.jpg'
import img2007 from '@/assets/matches/2007.jpg'
import img2006 from '@/assets/matches/2006.jpg'
import img2005 from '@/assets/matches/2005.jpg'

interface YearSummary {
  year: string
  lines: string[]
  image?: string
}

const years: YearSummary[] = [
  { year: '2011', lines: ['Bis jetzt 1 Großfeldspiele: 1  Sieg.'] },
  { year: '2010', lines: ['3 Großfeldspiele: 3  Siege.'] },
  {
    year: '2009',
    lines: [
      '6 Großfeldspiele: davon 4 Siege und 2 Niederlagen',
      '2 Turniere: in der Vorrunde ausgeschieden und 7. Platz',
    ],
    image: img2009,
  },
  {
    year: '2008',
    lines: [
      '8 Großfeldspiele: davon 4 Siege, 2 Niederlagen und 2 Unentschieden',
      '1 Turnier: 2.Platz',
    ],
    image: img2008,
  },
  {
    year: '2007',
    lines: ['7 Großfeldspiele: davon 5 Siege 2 Niederlagen', '1 Turnier: 11.Platz'],
    image: img2007,
  },
  {
    year: '2006',
    lines: ['5 Großfeldspiele: davon 3 Siege und 2 Unentschieden', '2 Turniere: 4. und 3. Platz'],
    image: img2006,
  },
  {
    year: '2005',
    lines: [
      '6 Großfeldspiele: davon 3 Siege 1 Unentschieden und 2 Niederlagen',
      '2 Turniere: im Viertelfinale ausgeschieden und einmal 1. Platz',
    ],
    image: img2005,
  },
]
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-3xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Spiele</h1>

      <div class="mt-10 space-y-10">
        <article v-for="entry in years" :key="entry.year" class="clearfix">
          <img
            v-if="entry.image"
            :src="entry.image"
            :alt="entry.year"
            class="float-left mr-5 mb-2 w-40 rounded object-cover"
          />
          <h3 class="font-display text-club-blue text-2xl font-bold">{{ entry.year }}</h3>
          <p
            v-for="line in entry.lines"
            :key="line"
            class="font-body text-pitch-dark/80 mt-1 text-[15px] leading-relaxed"
          >
            {{ line }}
          </p>
        </article>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
