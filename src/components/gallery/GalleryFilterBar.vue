<script lang="ts" setup>
interface Props {
  years: string[]
  selectedYear: string | null
  sortDescending: boolean
}

interface Emits {
  (e: 'update:selectedYear', value: string | null): void
  (e: 'update:sortDescending', value: boolean): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

function onYearChange(event: Event): void {
  const value = (event.target as HTMLSelectElement).value
  emit('update:selectedYear', value === '' ? null : value)
}
</script>

<template>
  <div
    class="border-pitch-dark/10 flex flex-wrap items-center justify-end gap-4 border-b bg-white px-6 py-4 sm:rounded-t-2xl"
  >
    <div class="flex items-center gap-2">
      <label
        for="gallery-year-filter"
        class="text-pitch-dark/45 text-xs font-semibold tracking-wide uppercase"
      >
        Jahr
      </label>
      <select
        id="gallery-year-filter"
        :value="selectedYear ?? ''"
        class="border-pitch-dark/30 text-pitch-dark rounded-md border bg-white py-1.5 pr-2 pl-2.5 text-sm"
        @change="onYearChange"
      >
        <option value="">alle Jahre</option>
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
    </div>

    <button
      type="button"
      class="border-pitch-dark/20 text-pitch-dark/70 hover:border-club-blue hover:text-club-blue flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-sm"
      @click="emit('update:sortDescending', !sortDescending)"
    >
      Jahr
      <i :class="sortDescending ? 'ri-arrow-down-line' : 'ri-arrow-up-line'" aria-hidden="true"></i>
      <span class="text-pitch-dark/45 hidden sm:inline">{{
        sortDescending ? 'neueste zuerst' : 'älteste zuerst'
      }}</span>
    </button>
  </div>
</template>
