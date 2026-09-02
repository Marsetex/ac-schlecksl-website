<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import MatchesYearSummaryCard from '@/components/matches/MatchesYearSummaryCard.vue'
import { matchYears } from '@/data/matches-years.data'
import { matchesYearSummaries } from '@/data/matches-year-summaries.data'

const yearsWithDetail = new Set(matchYears.map((entry) => entry.year))

function hasDetail(year: string): boolean {
  return yearsWithDetail.has(year)
}
</script>

<template>
  <DefaultPageLayout main-class="max-w-5xl pt-28">
    <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Spiele</h1>

    <div class="mt-10 flex flex-col gap-6">
      <MatchesYearSummaryCard
        v-for="entry in matchesYearSummaries"
        :key="entry.year"
        :entry="entry"
        :has-detail="hasDetail(entry.year)"
      />
    </div>
  </DefaultPageLayout>
</template>
