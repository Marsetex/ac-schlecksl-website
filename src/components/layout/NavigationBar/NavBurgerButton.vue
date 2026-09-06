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
    <i v-if="!open" class="ri-menu-line text-2xl" aria-hidden="true"></i>
    <i v-else class="ri-close-line text-2xl" aria-hidden="true"></i>
  </button>
</template>
