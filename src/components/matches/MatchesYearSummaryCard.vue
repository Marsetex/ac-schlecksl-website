<script lang="ts" setup>
import type { YearSummary } from '@/models/matches/year-summary.model'

interface Props {
  entry: YearSummary
  hasDetail: boolean
}

defineProps<Props>()

function turnierWord(count: number): string {
  return count === 1 ? 'Turnier' : 'Turniere'
}
</script>

<template>
  <article class="flex overflow-hidden rounded-2xl bg-white shadow-sm">
    <img
      v-if="entry.image"
      :src="entry.image"
      :alt="entry.year"
      class="w-32 flex-none self-stretch object-cover sm:w-60"
    />

    <div class="flex min-w-0 flex-1 flex-col gap-4 p-6">
      <div class="flex items-baseline gap-2">
        <span class="text-celtic-blue text-3xl font-extrabold tracking-tight">
          {{ entry.year }}
        </span>
      </div>

      <div class="text-rich-black flex items-center gap-2.5 text-[15px] font-medium">
        <span
          class="bg-rich-black/5 inline-flex h-6.5 w-6.5 flex-none items-center justify-center rounded-lg"
        >
          <i class="ri-football-line text-[15px]" aria-hidden="true"></i>
        </span>
        {{ entry.spiele }} Großfeldspiele
      </div>

      <div class="flex flex-wrap gap-2.5">
        <div class="bg-grass/10 flex items-center gap-2 rounded-lg px-3.5 py-2">
          <i class="ri-check-line text-grass text-[17px]" aria-hidden="true"></i>
          <span class="text-grass text-base font-bold">{{ entry.siege }}</span>
          <span class="text-grass text-[13px] opacity-85">Siege</span>
        </div>

        <div
          v-if="entry.unentschieden > 0"
          class="bg-rich-black/5 flex items-center gap-2 rounded-lg px-3.5 py-2"
        >
          <i
            class="ri-checkbox-blank-circle-line text-rich-black/70 text-[17px]"
            aria-hidden="true"
          ></i>
          <span class="text-rich-black/70 text-base font-bold">{{ entry.unentschieden }}</span>
          <span class="text-rich-black/70 text-[13px] opacity-85">Unentschieden</span>
        </div>

        <div class="flex items-center gap-2 rounded-lg bg-red-50 px-3.5 py-2">
          <i class="ri-close-line text-[17px]" style="color: #b3392f" aria-hidden="true"></i>
          <span class="text-base font-bold" style="color: #b3392f">{{ entry.niederlagen }}</span>
          <span class="text-[13px] opacity-85" style="color: #b3392f">Niederlagen</span>
        </div>
      </div>

      <template v-if="entry.turniere.length > 0">
        <div class="bg-rich-black/10 h-px"></div>

        <div class="text-rich-black flex items-center gap-2.5 text-[15px] font-medium">
          <span
            class="bg-gold/15 inline-flex h-6.5 w-6.5 flex-none items-center justify-center rounded-lg"
          >
            <i class="ri-trophy-line text-gold text-[15px]" aria-hidden="true"></i>
          </span>
          {{ entry.turniere.length }} {{ turnierWord(entry.turniere.length) }}
        </div>

        <div class="flex flex-wrap gap-2.5">
          <div
            v-for="result in entry.turniere"
            :key="result"
            class="bg-gold/10 rounded-lg px-3.5 py-2.5"
          >
            <span class="text-rich-black text-[14.5px] font-bold">{{ result }}</span>
          </div>
        </div>
      </template>

      <RouterLink
        v-if="hasDetail"
        :to="`/spiele/${entry.year}`"
        class="border-rich-black/30 text-rich-black hover:border-celtic-blue hover:text-celtic-blue mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors"
      >
        Ergebnisse ansehen
        <i class="ri-arrow-right-line" aria-hidden="true"></i>
      </RouterLink>
    </div>
  </article>
</template>
