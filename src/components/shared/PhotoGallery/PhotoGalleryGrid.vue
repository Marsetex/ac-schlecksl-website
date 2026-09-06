<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { GalleryImage } from '@/models/shared/gallery-image.model'

interface Props {
  images: GalleryImage[]
  rowHeight?: number
  gap?: number
}

interface Emits {
  (e: 'select', index: number): void
}

const props = withDefaults(defineProps<Props>(), {
  rowHeight: 220,
  gap: 8,
})

const emit = defineEmits<Emits>()

interface RowItem {
  image: GalleryImage
  index: number
  displayWidth: number
}

interface Row {
  items: RowItem[]
  height: number
}

const containerRef = ref<HTMLElement | null>(null)
const containerWidth = ref(0)
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  if (!containerRef.value) return
  resizeObserver = new ResizeObserver((entries) => {
    containerWidth.value = entries[0]?.contentRect.width ?? 0
  })
  resizeObserver.observe(containerRef.value)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

const rows = computed<Row[]>(() => {
  if (!containerWidth.value || props.images.length === 0) return []

  const result: Row[] = []
  let currentRow: { image: GalleryImage; index: number; aspect: number }[] = []
  let aspectSum = 0

  props.images.forEach((image, index) => {
    const aspect = image.width / image.height
    currentRow.push({ image, index, aspect })
    aspectSum += aspect

    const rowWidthAtTargetHeight = aspectSum * props.rowHeight + (currentRow.length - 1) * props.gap
    if (rowWidthAtTargetHeight >= containerWidth.value) {
      const totalGap = (currentRow.length - 1) * props.gap
      const scale = (containerWidth.value - totalGap) / (aspectSum * props.rowHeight)
      const height = props.rowHeight * scale
      result.push({
        height,
        items: currentRow.map((item) => ({
          image: item.image,
          index: item.index,
          displayWidth: item.aspect * height,
        })),
      })
      currentRow = []
      aspectSum = 0
    }
  })

  if (currentRow.length > 0) {
    result.push({
      height: props.rowHeight,
      items: currentRow.map((item) => ({
        image: item.image,
        index: item.index,
        displayWidth: item.aspect * props.rowHeight,
      })),
    })
  }

  return result
})
</script>

<template>
  <div ref="containerRef" class="flex flex-col gap-2">
    <div
      v-for="(row, rowIndex) in rows"
      :key="rowIndex"
      class="flex gap-2"
      :style="{ height: `${row.height}px` }"
    >
      <button
        v-for="item in row.items"
        :key="item.index"
        type="button"
        class="focus-visible:ring-celtic-blue relative flex-none overflow-hidden rounded-sm focus-visible:ring-2 focus-visible:outline-none"
        :style="{ width: `${item.displayWidth}px` }"
        :aria-label="item.image.alt"
        @click="emit('select', item.index)"
      >
        <img
          :src="item.image.thumbnailSrc ?? item.image.src"
          :alt="item.image.alt"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </button>
    </div>
  </div>
</template>
