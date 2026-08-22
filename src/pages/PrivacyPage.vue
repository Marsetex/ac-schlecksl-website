<script lang="ts" setup>
import FooterMain from '@/components/layout/Footer/FooterMain.vue'
import NavigationBar from '@/components/layout/NavigationBar/NavigationBar.vue'
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-3xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <header class="mb-12 text-center">
        <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Datenschutz</h1>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          Diese Seite befindet sich im Aufbau.
        </p>
      </header>
    </main>

    <FooterMain />
  </div>
</template>
