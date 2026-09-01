<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { GalleryImage } from '@/models/shared/gallery-image.model'

interface Props {
  images: GalleryImage[]
  activeIndex: number
}

interface Emits {
  (e: 'select', index: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const filmstripRef = ref<HTMLElement | null>(null)

const THUMB_HEIGHT = 44

function thumbWidth(image: GalleryImage): number {
  const aspect = image.width / image.height
  return Math.round(Math.min(Math.max(THUMB_HEIGHT * aspect, 28), 88))
}

watch(
  () => props.activeIndex,
  () => {
    const activeThumb = filmstripRef.value?.querySelector<HTMLElement>('[data-active="true"]')
    activeThumb?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  },
)
</script>

<template>
  <div class="flex flex-col gap-2 px-4 pb-4">
    <div ref="filmstripRef" class="no-scrollbar flex justify-center gap-1.5 overflow-x-auto">
      <button
        v-for="(image, index) in images"
        :key="index"
        type="button"
        :data-active="index === activeIndex"
        class="h-11 flex-none overflow-hidden rounded-sm border-2"
        :style="{ width: `${thumbWidth(image)}px` }"
        :class="
          index === activeIndex
            ? 'border-white/80'
            : 'border-transparent opacity-60 hover:opacity-100'
        "
        :aria-label="image.alt"
        @click="emit('select', index)"
      >
        <img
          :src="image.thumbnailSrc ?? image.src"
          :alt="image.alt"
          class="h-full w-full object-cover"
        />
      </button>
    </div>
    <p class="hidden text-center text-[11px] text-white/35 sm:block">
      ← → blättern · Esc schließen · Swipe auf Mobil
    </p>
  </div>
</template>

<style scoped>
/* Tailwind hat keine Utility zum Verstecken der Scrollbar bei sichtbarem
   Overflow-Scroll; Filmstrip soll horizontal scrollbar bleiben, aber ohne
   sichtbaren Scrollbalken. */
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
