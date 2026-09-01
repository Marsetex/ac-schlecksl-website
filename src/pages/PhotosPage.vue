<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import PhotoGallery from '@/components/shared/PhotoGallery/PhotoGallery.vue'
import { photos } from '@/data/photos.data'
import { findGalleryEntry } from '@/data/gallery.data'

const route = useRoute()

const entry = computed(() => {
  const id = route.params.id
  return typeof id === 'string' ? findGalleryEntry(id) : undefined
})

const images = computed(() => {
  if (typeof route.params.id !== 'string') return photos
  return entry.value?.photos ?? []
})
</script>

<template>
  <DefaultPageLayout>
    <header class="mb-12">
      <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">{{ entry?.title ?? 'Fotos' }}</h1>
      <p class="text-rich-black/80 mt-3 text-[15px] leading-relaxed">
        {{ entry ? 'Impressionen zu diesem Ereignis.' : 'Impressionen aus dem Vereinsleben.' }}
      </p>
      <p v-if="route.params.id && !entry" class="text-rich-black/60 mt-3 text-[15px]">
        Für diesen Galerie-Eintrag liegen uns keine Fotos vor.
      </p>
    </header>

    <PhotoGallery :images="images" />
  </DefaultPageLayout>
</template>
