<script lang="ts" setup>
import { trainingSeasons } from '@/data/training-seasons.data'
import { getTrainingSeasonFor } from '@/utils/training-schedule'

const currentSeason = trainingSeasons.find(
  (season) => season.season === getTrainingSeasonFor(new Date()),
)!
</script>

<template>
  <div
    class="border-celtic-blue bg-linear-to-br from-yale-blue/55 to-rich-black/55 min-w-0 flex-1 rounded-2xl border-[1.5px] px-6 py-4.5 text-left shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[10px]"
  >
    <div class="text-celtic-blue mb-2.5 text-xs font-bold tracking-[0.08em] uppercase">
      Training
    </div>
    <div class="mb-2 flex items-center gap-2.5 text-[15px] font-semibold text-white">
      <i class="ri-time-line text-celtic-blue shrink-0 text-lg" aria-hidden="true"></i>
      Donnerstags ab {{ currentSeason.time }}
    </div>
    <div class="mb-3.5 flex items-center gap-2.5 text-sm leading-relaxed text-white/85">
      <i class="ri-map-pin-line text-celtic-blue shrink-0 text-lg" aria-hidden="true"></i>
      {{ currentSeason.venueName }}, {{ currentSeason.address }}
    </div>
    <RouterLink
      to="/mitgliedschaft"
      class="bg-celtic-blue hover:bg-oxford-blue inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-base font-semibold whitespace-nowrap text-white transition-colors"
    >
      <i class="ri-user-add-line" aria-hidden="true"></i>
      Melde dich an
    </RouterLink>
  </div>
</template>
