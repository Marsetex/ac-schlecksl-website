<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-accent-dark">
    <div
      class="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 py-6 text-[14px] font-medium text-white/80 sm:flex-row sm:justify-between sm:px-8"
    >
      <p>&copy; {{ year }} AC Schlecksl</p>

      <nav class="flex gap-6">
        <RouterLink to="/datenschutz" class="transition-colors hover:text-white">
          Datenschutz
        </RouterLink>
        <RouterLink to="/impressum" class="transition-colors hover:text-white">
          Impressum
        </RouterLink>
      </nav>
    </div>
  </footer>
</template>
