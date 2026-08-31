<script lang="ts" setup>
import { ref } from 'vue'
import logo from '@/assets/ac-schlecksl-logo.webp'
import { navigation } from '@/data/navigation.data.ts'
import NavDesktopMenu from './NavDesktopMenu.vue'
import NavMobileMenu from './NavMobileMenu.vue'
import NavBurgerButton from './NavBurgerButton.vue'

const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-20 shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
    <div class="bg-yale-blue h-20">
      <div class="relative flex h-full w-full items-center gap-8 px-6 sm:px-8 md:pl-50">
        <NavDesktopMenu :items="navigation" />
        <NavBurgerButton :open="mobileMenuOpen" @toggle="toggleMobileMenu" />
      </div>
    </div>

    <!-- Vereinslogo: ragt über schwarzen Streifen und blaue Leiste, links neben dem ersten Menüpunkt -->
    <div
      class="pointer-events-none absolute inset-0 flex w-full items-start px-6 sm:px-8"
      aria-hidden="true"
    >
      <RouterLink to="/" class="pointer-events-auto shrink-0" @click="closeMobileMenu">
        <img
          :src="logo"
          alt="AC Schlecksl Vereinslogo"
          width="140"
          height="140"
          class="rounded-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
        />
      </RouterLink>
    </div>

    <NavMobileMenu v-if="mobileMenuOpen" :items="navigation" @navigate="closeMobileMenu" />
  </header>
</template>
