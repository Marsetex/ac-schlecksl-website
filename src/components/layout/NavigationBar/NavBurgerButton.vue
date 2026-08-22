<script lang="ts" setup>
interface Props {
  open: boolean
}

interface Emits {
  (e: 'toggle'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <button
    type="button"
    class="ml-auto text-white md:hidden"
    :aria-expanded="open"
    aria-label="Menü öffnen"
    @click="emit('toggle')"
  >
    <svg
      v-if="!open"
      viewBox="0 0 24 24"
      class="h-6 w-6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <svg
      v-else
      viewBox="0 0 24 24"
      class="h-6 w-6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  </button>
</template>
