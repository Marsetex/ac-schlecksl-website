<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import TrainingSeasonRow from '@/components/training/TrainingSeasonRow.vue'
import { teamLeaders } from '@/data/team-leaders.data'
import { trainingSeasons } from '@/data/training-seasons.data'
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
