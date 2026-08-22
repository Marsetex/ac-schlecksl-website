<script lang="ts" setup>
import { computed, ref } from 'vue'
import FooterMain from '@/components/layout/Footer/FooterMain.vue'
import NavigationBar from '@/components/layout/NavigationBar/NavigationBar.vue'
import GalleryEventCard from '@/components/gallery/GalleryEventCard.vue'
import GalleryFilterBar from '@/components/gallery/GalleryFilterBar.vue'
import { galleryYears } from '@/data/gallery.data'

const years = galleryYears.map((group) => group.year)
const selectedYear = ref<string | null>(null)
const sortDescending = ref(true)

const visibleYears = computed(() => {
  const filtered = selectedYear.value
    ? galleryYears.filter((group) => group.year === selectedYear.value)
    : galleryYears

  return sortDescending.value ? filtered : [...filtered].reverse()
})
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-5xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <header class="mb-12">
        <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Fotogalerien</h1>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          Mehr Informationen zu den Partien findest Du in der Rubrik
          <RouterLink to="/spiele" class="text-club-blue underline">Spiele</RouterLink>.
        </p>
      </header>

      <div class="border-pitch-dark/10 overflow-hidden rounded-2xl border bg-white shadow-sm">
        <GalleryFilterBar
          :years="years"
          v-model:selected-year="selectedYear"
          v-model:sort-descending="sortDescending"
        />

        <div class="divide-pitch-dark/10 divide-y px-6">
          <section v-for="group in visibleYears" :key="group.year" class="py-6 first:pt-6">
            <div class="mb-2 flex items-baseline gap-3">
              <span class="font-display text-pitch-dark text-2xl font-bold">{{ group.year }}</span>
              <span class="bg-pitch-dark/10 h-px flex-1"></span>
              <span class="text-pitch-dark/45 text-xs font-medium">
                {{ group.entries.length }}
                {{ group.entries.length === 1 ? 'Ereignis' : 'Ereignisse' }}
              </span>
            </div>

            <GalleryEventCard v-for="entry in group.entries" :key="entry.title" :entry="entry" />
          </section>
        </div>
      </div>
    </main>

    <FooterMain />
  </div>
</template>
