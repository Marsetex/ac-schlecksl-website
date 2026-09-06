<script lang="ts" setup>
interface Props {
  open?: boolean
}

withDefaults(defineProps<Props>(), {
  open: false,
})
</script>

<template>
  <i
    class="ri-arrow-down-s-line shrink-0 text-[10px] transition-transform"
    :class="{ '-rotate-180': open }"
    aria-hidden="true"
  ></i>
</template>
