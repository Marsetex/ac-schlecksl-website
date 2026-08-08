<script lang="ts" setup>
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
</script>

<template>
  <header
    class="bg-linear-to-r from-accent to-accent-dark fixed inset-x-0 top-0 z-20 flex h-16 items-center gap-8 px-8 shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
  >
    <RouterLink to="/" class="mr-auto text-lg font-bold tracking-wide text-white">
      AC Schlecksl
    </RouterLink>
    <nav class="flex h-full items-center gap-8">
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
  </header>
</template>
