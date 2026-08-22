<script lang="ts" setup>
interface Props {
  email: string
}

defineProps<Props>()
</script>

<template>
  <a
    :href="`mailto:${email}`"
    class="mt-4 inline-block rounded-full border border-white/30 px-4 py-1.5 text-sm text-white transition-colors hover:bg-white/10"
  >
    Kontakt
  </a>
</template>
