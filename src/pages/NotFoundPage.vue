<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
</script>

<template>
  <DefaultPageLayout>
    <div class="flex flex-col items-center py-24 text-center">
      <p class="text-celtic-blue text-6xl font-extrabold">404</p>
      <h1 class="text-rich-black mt-4 text-2xl font-bold sm:text-3xl">Seite nicht gefunden</h1>
      <p class="text-rich-black/70 mt-3 max-w-[44ch] text-[15px] leading-relaxed">
        Die aufgerufene Seite existiert nicht oder wurde verschoben.
      </p>
      <RouterLink
        to="/"
        class="border-rich-black/30 text-rich-black hover:border-celtic-blue hover:text-celtic-blue mt-8 inline-flex w-fit items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors"
      >
        <i class="ri-arrow-left-line" aria-hidden="true"></i>
        Zurück zur Startseite
      </RouterLink>
    </div>
  </DefaultPageLayout>
</template>
