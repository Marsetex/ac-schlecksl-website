<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { GalleryImage } from '@/models/shared/gallery-image.model'
import PhotoGalleryLightboxHeader from './PhotoGalleryLightboxHeader.vue'
import PhotoGalleryFilmstrip from './PhotoGalleryFilmstrip.vue'

interface Props {
  images: GalleryImage[]
  activeIndex: number
}

interface Emits {
  (e: 'close'): void
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'select', index: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const zoomed = ref(false)
const infoOpen = ref(false)

const activeImage = computed(() => props.images[props.activeIndex])

watch(
  () => props.activeIndex,
  () => {
    zoomed.value = false
  },
)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
  else if (event.key === 'ArrowLeft') emit('prev')
  else if (event.key === 'ArrowRight') emit('next')
}

let touchStartX = 0

function onTouchStart(event: TouchEvent) {
  touchStartX = event.changedTouches[0]?.clientX ?? 0
}

function onTouchEnd(event: TouchEvent) {
  const touchEndX = event.changedTouches[0]?.clientX ?? 0
  const deltaX = touchEndX - touchStartX
  if (Math.abs(deltaX) < 50) return
  if (deltaX > 0) emit('prev')
  else emit('next')
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="bg-rich-black/95 fixed inset-0 z-50 flex flex-col" role="dialog" aria-modal="true">
    <PhotoGalleryLightboxHeader
      :current="activeIndex + 1"
      :total="images.length"
      :zoomed="zoomed"
      :info-open="infoOpen"
      :download-href="activeImage?.src"
      :download-name="activeImage?.alt"
      @toggle-zoom="zoomed = !zoomed"
      @toggle-info="infoOpen = !infoOpen"
      @close="emit('close')"
    />

    <div
      class="flex min-h-0 flex-1 items-center gap-4 px-4"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
      @click.self="emit('close')"
    >
      <button
        type="button"
        class="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/35 text-white/80 hover:bg-white/10 sm:h-12 sm:w-12"
        aria-label="Vorheriges Bild"
        @click="emit('prev')"
      >
        <i class="ri-arrow-left-s-line text-2xl" aria-hidden="true"></i>
      </button>

      <div class="flex h-full min-w-0 flex-1 items-center justify-center overflow-auto">
        <img
          v-if="activeImage"
          :src="activeImage.src"
          :alt="activeImage.alt"
          class="cursor-zoom-in rounded-sm object-contain transition-[max-width,max-height] duration-200"
          :class="zoomed ? 'max-w-none cursor-zoom-out' : 'max-h-full max-w-full'"
          @click="zoomed = !zoomed"
        />
      </div>

      <button
        type="button"
        class="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/35 text-white/80 hover:bg-white/10 sm:h-12 sm:w-12"
        aria-label="Nächstes Bild"
        @click="emit('next')"
      >
        <i class="ri-arrow-right-s-line text-2xl" aria-hidden="true"></i>
      </button>
    </div>

    <p
      v-if="infoOpen && (activeImage?.caption || activeImage?.alt)"
      class="px-6 pb-2 text-center text-sm text-white/70"
    >
      {{ activeImage?.caption ?? activeImage?.alt }}
    </p>

    <PhotoGalleryFilmstrip
      :images="images"
      :active-index="activeIndex"
      @select="emit('select', $event)"
    />
  </div>
</template>
