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
  image?: string
  spiele: number
  siege: number
  unentschieden: number
  niederlagen: number
  turniere: string[]
}

const years: YearSummary[] = [
  { year: '2011', spiele: 1, siege: 1, unentschieden: 0, niederlagen: 0, turniere: [] },
  { year: '2010', spiele: 3, siege: 3, unentschieden: 0, niederlagen: 0, turniere: [] },
  {
    year: '2009',
    image: img2009,
    spiele: 6,
    siege: 4,
    unentschieden: 0,
    niederlagen: 2,
    turniere: ['in der Vorrunde ausgeschieden', '7. Platz'],
  },
  {
    year: '2008',
    image: img2008,
    spiele: 8,
    siege: 4,
    unentschieden: 2,
    niederlagen: 2,
    turniere: ['2. Platz'],
  },
  {
    year: '2007',
    image: img2007,
    spiele: 7,
    siege: 5,
    unentschieden: 0,
    niederlagen: 2,
    turniere: ['11. Platz'],
  },
  {
    year: '2006',
    image: img2006,
    spiele: 5,
    siege: 3,
    unentschieden: 2,
    niederlagen: 0,
    turniere: ['4. Platz', '3. Platz'],
  },
  {
    year: '2005',
    image: img2005,
    spiele: 6,
    siege: 3,
    unentschieden: 1,
    niederlagen: 2,
    turniere: ['im Viertelfinale ausgeschieden', '1. Platz'],
  },
]

function turnierWord(count: number): string {
  return count === 1 ? 'Turnier' : 'Turniere'
}
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-5xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Spiele</h1>

      <div class="mt-10 flex flex-col gap-6">
        <article
          v-for="entry in years"
          :key="entry.year"
          class="flex overflow-hidden rounded-2xl bg-white shadow-sm"
        >
          <img
            v-if="entry.image"
            :src="entry.image"
            :alt="entry.year"
            class="w-32 flex-none self-stretch object-cover sm:w-40"
          />

          <div class="flex min-w-0 flex-1 flex-col gap-4 p-6">
            <div class="flex items-baseline gap-2">
              <span class="font-display text-club-blue text-3xl font-extrabold tracking-tight">
                {{ entry.year }}
              </span>
            </div>

            <div class="text-pitch-dark flex items-center gap-2.5 text-[15px] font-medium">
              <span
                class="bg-pitch-dark/5 inline-flex h-6.5 w-6.5 flex-none items-center justify-center rounded-lg"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
                  <path
                    d="M12 3v3M12 18v3M3 12h3M18 12h3"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              {{ entry.spiele }} Großfeldspiele
            </div>

            <div class="flex flex-wrap gap-2.5">
              <div class="bg-grass/10 flex items-center gap-2 rounded-lg px-3.5 py-2">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="var(--color-grass)"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-grass text-base font-bold">{{ entry.siege }}</span>
                <span class="text-grass text-[13px] opacity-85">Siege</span>
              </div>

              <div
                v-if="entry.unentschieden > 0"
                class="bg-pitch-dark/5 flex items-center gap-2 rounded-lg px-3.5 py-2"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    class="text-pitch-dark/70"
                    stroke-width="2.5"
                  />
                </svg>
                <span class="text-pitch-dark/70 text-base font-bold">{{
                  entry.unentschieden
                }}</span>
                <span class="text-pitch-dark/70 text-[13px] opacity-85">Unentschieden</span>
              </div>

              <div class="flex items-center gap-2 rounded-lg bg-red-50 px-3.5 py-2">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="#b3392f"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
                <span class="text-base font-bold" style="color: #b3392f">{{
                  entry.niederlagen
                }}</span>
                <span class="text-[13px] opacity-85" style="color: #b3392f">Niederlagen</span>
              </div>
            </div>

            <template v-if="entry.turniere.length > 0">
              <div class="bg-pitch-dark/10 h-px"></div>

              <div class="text-pitch-dark flex items-center gap-2.5 text-[15px] font-medium">
                <span
                  class="bg-gold/15 inline-flex h-6.5 w-6.5 flex-none items-center justify-center rounded-lg"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 3h8v4a4 4 0 01-4 4 4 4 0 01-4-4V3z"
                      stroke="var(--color-gold)"
                      stroke-width="1.8"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 4H5a2 2 0 002 3M16 4h3a2 2 0 01-2 3"
                      stroke="var(--color-gold)"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 11v3M9 20h6M10 17h4v3h-4z"
                      stroke="var(--color-gold)"
                      stroke-width="1.8"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                {{ entry.turniere.length }} {{ turnierWord(entry.turniere.length) }}
              </div>

              <div class="flex flex-wrap gap-2.5">
                <div
                  v-for="result in entry.turniere"
                  :key="result"
                  class="bg-gold/10 rounded-lg px-3.5 py-2.5"
                >
                  <span class="text-pitch-dark text-[14.5px] font-bold">{{ result }}</span>
                </div>
              </div>
            </template>
          </div>
        </article>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
