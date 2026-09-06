<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import MatchesYearDetail from '@/components/matches/MatchesYearDetail.vue'
import { matchYears } from '@/data/matches-years.data'

const route = useRoute()

const matchYear = computed(() => matchYears.find((entry) => entry.year === route.params.year))
</script>

<template>
  <DefaultPageLayout>
    <MatchesYearDetail v-if="matchYear" :year="matchYear" />
    <p v-else class="text-rich-black/80 text-[15px] leading-relaxed">
      Für dieses Jahr liegen uns keine Ergebnisse vor.
    </p>
  </DefaultPageLayout>
</template>
