<script lang="ts" setup>
interface Props {
  open?: boolean
}

withDefaults(defineProps<Props>(), {
  open: false,
})
</script>

<template>
  <svg
    viewBox="0 0 12 8"
    class="h-2.5 w-2.5 shrink-0 stroke-current transition-transform"
    :class="{ '-rotate-180': open }"
    fill="none"
  >
    <path d="M1 1l5 5 5-5" stroke-width="1.5" />
  </svg>
</template>
