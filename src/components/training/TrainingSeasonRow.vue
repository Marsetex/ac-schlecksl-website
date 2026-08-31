<script lang="ts" setup>
import { computed } from 'vue'
import type { TrainingSeason } from '@/models/training/training-season.model'

interface Props {
  season: TrainingSeason
}

const props = defineProps<Props>()

const mapsUrl = computed(
  () =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.season.address)}`,
)

const seasonIcon = computed(() =>
  props.season.season === 'summer' ? 'ri-sun-line' : 'ri-snowflake-line',
)
</script>

<template>
  <div
    class="border-rich-black/10 grid grid-cols-[104px_1fr] gap-6 border-b px-8 py-7 last:border-b-0 sm:px-11"
  >
    <div>
      <div
        class="text-celtic-blue flex items-center gap-1.5 text-sm font-bold tracking-[0.14em] uppercase"
      >
        <i :class="seasonIcon" aria-hidden="true"></i>
        {{ season.label }}
      </div>
      <div class="text-rich-black/50 mt-1.5 text-[13px]">{{ season.months }}</div>
    </div>
    <div>
      <div class="text-rich-black text-3xl font-semibold">Do. ab {{ season.time }}</div>
      <div class="text-rich-black/70 mt-2.5 text-[15px] leading-relaxed">
        {{ season.venueName }}<br />
        {{ season.address }}
      </div>
      <a
        :href="mapsUrl"
        target="_blank"
        rel="noopener"
        class="text-celtic-blue border-celtic-blue/35 hover:border-celtic-blue mt-3 inline-block border-b text-sm font-semibold"
      >
        Route öffnen
      </a>
    </div>
  </div>
</template>
