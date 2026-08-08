<script lang="ts" setup>
import { ref } from 'vue'

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
  <header
    class="bg-linear-to-r from-accent to-accent-dark fixed inset-x-0 top-0 z-20 shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
  >
    <div class="flex h-16 items-center gap-8 px-8">
      <RouterLink
        to="/"
        class="mr-auto text-lg font-bold tracking-wide text-white"
        @click="closeMobileMenu"
      >
        AC Schlecksl
      </RouterLink>

      <!-- Desktop-Menü -->
      <nav class="hidden h-full items-center gap-8 md:flex">
        <template v-for="item in nav" :key="item.label">
          <RouterLink
            v-if="item.to"
            :to="item.to"
            class="text-[15px] font-medium text-white/90 transition-colors hover:text-white"
          >
            {{ item.label }}
          </RouterLink>

          <div v-else class="group flex h-full items-center">
            <button
              type="button"
              class="flex items-center gap-1 text-[15px] font-medium text-white/90 transition-colors hover:text-white"
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
              class="invisible absolute top-16 min-w-44 -translate-x-4 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100"
            >
              <div class="bg-accent-dark flex flex-col overflow-hidden rounded-b-md shadow-lg">
                <RouterLink
                  v-for="child in item.children"
                  :key="child.label"
                  :to="child.to"
                  class="px-4 py-2.5 text-[14px] font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {{ child.label }}
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
      </nav>

      <!-- Burger-Button -->
      <button
        type="button"
        class="text-white md:hidden"
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
        <svg v-else viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <!-- Mobile-Menü -->
    <div
      v-if="mobileMenuOpen"
      class="bg-accent-dark max-h-[calc(100vh-4rem)] overflow-y-auto px-6 pb-4 md:hidden"
    >
      <nav class="flex flex-col">
        <template v-for="item in nav" :key="item.label">
          <RouterLink
            v-if="item.to"
            :to="item.to"
            class="border-b border-white/10 py-3 text-[15px] font-medium text-white/90"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </RouterLink>

          <div v-else class="border-b border-white/10">
            <button
              type="button"
              class="flex w-full items-center justify-between py-3 text-[15px] font-medium text-white/90"
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
