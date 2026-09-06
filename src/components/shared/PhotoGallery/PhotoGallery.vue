<script lang="ts" setup>
import { ref } from 'vue'
import type { GalleryImage } from '@/models/shared/gallery-image.model'
import PhotoGalleryGrid from './PhotoGalleryGrid.vue'
import PhotoGalleryLightbox from './PhotoGalleryLightbox.vue'

interface Props {
  images: GalleryImage[]
  rowHeight?: number
  gap?: number
}

withDefaults(defineProps<Props>(), {
  rowHeight: 220,
  gap: 8,
})

const activeIndex = ref<number | null>(null)

function openAt(index: number) {
  activeIndex.value = index
}

function close() {
  activeIndex.value = null
}

function showPrev(total: number) {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + total) % total
}

function showNext(total: number) {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % total
}

defineExpose({ open: openAt, close })
</script>

<template>
  <div>
    <PhotoGalleryGrid :images="images" :row-height="rowHeight" :gap="gap" @select="openAt" />

    <Teleport to="body">
      <PhotoGalleryLightbox
        v-if="activeIndex !== null"
        :images="images"
        :active-index="activeIndex"
        @close="close"
        @prev="showPrev(images.length)"
        @next="showNext(images.length)"
        @select="openAt"
      />
    </Teleport>
  </div>
</template>
