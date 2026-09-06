<script lang="ts" setup>
interface Props {
  current: number
  total: number
  zoomed: boolean
  infoOpen: boolean
  downloadHref?: string
  downloadName?: string
}

interface Emits {
  (e: 'toggle-zoom'): void
  (e: 'toggle-info'): void
  (e: 'close'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <div class="flex items-center justify-between gap-4 p-4">
    <span class="text-sm text-white/60">{{ current }} / {{ total }}</span>
    <div class="flex items-center gap-2">
      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white"
        :aria-label="zoomed ? 'Verkleinern' : 'Vergrößern'"
        @click="emit('toggle-zoom')"
      >
        <i
          :class="zoomed ? 'ri-zoom-out-line' : 'ri-zoom-in-line'"
          class="text-lg"
          aria-hidden="true"
        ></i>
      </button>
      <a
        :href="downloadHref"
        :download="downloadName"
        class="flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white"
        aria-label="Bild herunterladen"
      >
        <i class="ri-download-2-line text-lg" aria-hidden="true"></i>
      </a>
      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white"
        :class="{ 'bg-white/10 text-white': infoOpen }"
        aria-label="Bildinformationen"
        @click="emit('toggle-info')"
      >
        <i class="ri-information-line text-lg" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white"
        aria-label="Schließen"
        @click="emit('close')"
      >
        <i class="ri-close-line text-xl" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>
