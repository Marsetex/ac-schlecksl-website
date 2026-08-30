<script lang="ts" setup>
import LandingPageBackgroundImage from '@/assets/landing-page-background.webp'
import NavigationBar from '@/components/layout/NavigationBar/NavigationBar.vue'
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col">
    <NavigationBar />

    <div class="relative flex-1 overflow-hidden">
      <img
        :src="LandingPageBackgroundImage"
        alt="AC Schlecksl Mannschaft auf dem Spielfeld"
        class="absolute inset-0 h-full w-full object-cover blur-[6px] brightness-60 scale-[1.08]"
      />

      <div class="bg-linear-to-b from-rich-black/15 to-rich-black/55 absolute inset-0" />

      <div class="relative mx-auto w-full max-w-5xl px-6 pt-36 pb-24 sm:px-8">
        <slot></slot>
      </div>
    </div>

    <div class="bg-rich-black">
      <div class="mx-auto max-w-5xl px-6 py-5 sm:px-8">
        <p class="text-sm text-white/60">&copy; {{ 2026 }} Marcel Grüßinger</p>
      </div>
    </div>
  </div>
</template>
