<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import TrainingSeasonRow from '@/components/training/TrainingSeasonRow.vue'
import { teamLeaders } from '@/data/team-leaders.data'
import { trainingSeasons } from '@/data/training-seasons.data'
import { getNextTrainingDate, getTrainingSeasonFor } from '@/utils/training-schedule'

const nextTrainingDateFormatter = new Intl.DateTimeFormat('de-DE', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

const nextTrainingDate = getNextTrainingDate()
const nextSeason = trainingSeasons.find(
  (season) => season.season === getTrainingSeasonFor(nextTrainingDate),
)!

const nextTrainingLine = `${nextTrainingDateFormatter.format(nextTrainingDate)}, ${nextSeason.time}`
const nextTrainingPlace = `${nextSeason.venueName} · ${nextSeason.address}`
</script>

<template>
  <DefaultPageLayout>
    <div>
      <div class="text-rich-black text-3xl font-bold sm:text-4xl">Training</div>

      <p class="text-rich-black/70 mt-4 max-w-[44ch] text-[17px] leading-relaxed">
        Wir trainieren das ganze Jahr — im Sommer draußen, im Winter in der Halle. Einfach
        vorbeikommen, Neue sind jederzeit willkommen.
      </p>
    </div>

    <!-- <div class="bg-celtic-blue text-chalk flex items-baseline gap-4 px-8 py-5 sm:px-11">
      <div class="pt-1 text-[11px] font-semibold tracking-[0.14em] uppercase opacity-70">
        Nächstes Training
      </div>
      <div class="flex-1">
        <div class="text-2xl leading-tight font-semibold">
          {{ nextTrainingLine }}
        </div>
        <div class="mt-1 text-sm opacity-80">{{ nextTrainingPlace }}</div>
      </div>
    </div> -->

    <div>
      <TrainingSeasonRow v-for="season in trainingSeasons" :key="season.season" :season="season" />
    </div>

    <div class="flex flex-wrap">
      <div class="flex-1 basis-[240px]">
        <div class="text-rich-black/50 text-xs font-bold tracking-[0.14em] uppercase">
          Feiertage
        </div>
        <p class="text-rich-black/70 mt-2 text-[15px] leading-relaxed">
          An Feiertagen fällt das Training aus — es sei denn, wir entscheiden in der WhatsApp-Gruppe
          etwas anderes.
        </p>
      </div>
      <div class="flex-1 basis-[200px]">
        <div class="text-rich-black/50 text-xs font-bold tracking-[0.14em] uppercase">Fragen?</div>
        <p
          v-for="leader in teamLeaders"
          :key="leader.name"
          class="text-rich-black/70 mt-2 text-[15px] leading-relaxed"
        >
          {{ leader.name }} ·
          <a :href="`mailto:${leader.email}`" class="text-celtic-blue underline">{{
            leader.email
          }}</a>
        </p>
      </div>
    </div>
  </DefaultPageLayout>
</template>
