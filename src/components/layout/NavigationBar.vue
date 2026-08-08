<script lang="ts" setup>
const nav = [
  { label: 'Home', href: '#home' },
  { label: 'News', href: '#news' },
]
</script>

<template>
  <header
    class="bg-linear-to-r from-accent to-accent-dark fixed inset-x-0 top-0 z-20 flex h-16 items-center gap-8 px-8 shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
  >
    <span class="mr-auto text-lg font-bold tracking-wide text-white">AC Schlecksl</span>
    <nav class="flex items-center gap-8">
      <a
        v-for="item in nav"
        :key="item.label"
        :href="item.href"
        class="text-[15px] font-medium text-white/90 transition-colors hover:text-white"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
