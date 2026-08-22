<script lang="ts" setup>
import type { NavLink } from '@/models/shared/nav-link.model'

interface Props {
  title: string
  links: NavLink[]
}

defineProps<Props>()
</script>

<template>
  <div>
    <p class="font-display text-sm font-semibold tracking-wide text-white uppercase">
      {{ title }}
    </p>
    <nav class="mt-4 flex flex-col gap-2">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="text-sm text-white/70 transition-colors hover:text-white"
      >
        {{ link.label }}
      </RouterLink>
    </nav>
  </div>
</template>
