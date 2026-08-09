<script lang="ts" setup>
import { ref } from 'vue'
import logo from '@/assets/vereinslogo.png'

interface NavLink {
  label: string
  to: string
}

interface NavItem {
  label: string
  to?: string
  children?: NavLink[]
}

const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'News', to: '/news' },
  {
    label: 'Es war einmal',
    children: [
      { label: 'Historie', to: '/historie' },
      { label: 'Spiele', to: '/spiele' },
      { label: 'Galerie', to: '/galerie' },
    ],
  },
  {
    label: 'Verein',
    children: [
      { label: 'Vorstand', to: '/vorstand' },
      { label: 'Training', to: '/training' },
      { label: 'Mannschaft', to: '/mannschaft' },
    ],
  },
]

const mobileMenuOpen = ref(false)
const openMobileSubmenu = ref<string | null>(null)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  openMobileSubmenu.value = null
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  openMobileSubmenu.value = null
}

function toggleMobileSubmenu(label: string) {
  openMobileSubmenu.value = openMobileSubmenu.value === label ? null : label
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-20 shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
    <div class="h-7 bg-black" aria-hidden="true"></div>
    <div class="bg-oxford-blue h-15">
      <div class="relative mx-auto flex h-full w-full max-w-3xl items-center gap-8 px-6 sm:px-8">
        <!-- Desktop-Menü -->
        <nav class="hidden h-full items-center gap-8 md:flex">
          <template v-for="item in nav" :key="item.label">
            <RouterLink
              v-if="item.to"
              :to="item.to"
              class="text-[19px] font-extrabold text-white/90 transition-colors hover:text-white"
            >
              {{ item.label }}
            </RouterLink>

            <div v-else class="group flex h-full items-center">
              <button
                type="button"
                class="flex items-center gap-1 text-[19px] font-extrabold text-white/90 transition-colors hover:text-white"
              >
                {{ item.label }}
                <svg
                  viewBox="0 0 12 8"
                  class="h-2.5 w-2.5 fill-current transition-transform group-hover:-rotate-180"
                >
                  <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" fill="none" />
                </svg>
              </button>

              <div
                class="invisible fixed inset-x-0 top-22 opacity-0 shadow-lg transition-opacity duration-150 group-hover:visible group-hover:opacity-100"
              >
                <div class="bg-yale-blue">
                  <div class="mx-auto flex max-w-3xl items-center gap-8 px-6 py-3 sm:px-8">
                    <RouterLink
                      v-for="child in item.children"
                      :key="child.label"
                      :to="child.to"
                      class="text-[14px] font-medium whitespace-nowrap text-white/90 transition-colors hover:text-white"
                    >
                      {{ child.label }}
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </nav>

        <!-- Burger-Button -->
        <button
          type="button"
          class="ml-auto text-white md:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-label="Menü öffnen"
          @click="toggleMobileMenu"
        >
          <svg
            v-if="!mobileMenuOpen"
            viewBox="0 0 24 24"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Vereinslogo: ragt über schwarzen Streifen und blaue Leiste, links neben dem ersten Menüpunkt -->
    <div
      class="pointer-events-none absolute inset-0 mx-auto flex w-full max-w-3xl items-start px-6 sm:px-8"
      aria-hidden="true"
    >
      <RouterLink to="/" class="pointer-events-auto shrink-0 md:-ml-40" @click="closeMobileMenu">
        <img
          :src="logo"
          alt="AC Schlecksl Vereinslogo"
          width="140"
          height="140"
          class="rounded-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
        />
      </RouterLink>
    </div>

    <!-- Mobile-Menü -->
    <div
      v-if="mobileMenuOpen"
      class="bg-accent-dark max-h-[calc(100vh-5.5rem)] overflow-y-auto px-6 pb-4 md:hidden"
    >
      <nav class="flex flex-col">
        <template v-for="item in nav" :key="item.label">
          <RouterLink
            v-if="item.to"
            :to="item.to"
            class="border-b border-white/10 py-3 text-[19px] font-extrabold text-white/90"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </RouterLink>

          <div v-else class="border-b border-white/10">
            <button
              type="button"
              class="flex w-full items-center justify-between py-3 text-[19px] font-extrabold text-white/90"
              @click="toggleMobileSubmenu(item.label)"
            >
              {{ item.label }}
              <svg
                viewBox="0 0 12 8"
                class="h-2.5 w-2.5 shrink-0 stroke-current transition-transform"
                :class="{ '-rotate-180': openMobileSubmenu === item.label }"
                fill="none"
              >
                <path d="M1 1l5 5 5-5" stroke-width="1.5" />
              </svg>
            </button>
            <div v-if="openMobileSubmenu === item.label" class="flex flex-col pb-3 pl-4">
              <RouterLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="py-2 text-[14px] font-medium text-white/80"
                @click="closeMobileMenu"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>
        </template>
      </nav>
    </div>
  </header>
</template>
