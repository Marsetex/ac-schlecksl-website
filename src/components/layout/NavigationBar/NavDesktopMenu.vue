<script lang="ts" setup>
import type { NavItem } from '@/models/shared/nav-item.model.ts'
import NavChevronIcon from './NavChevronIcon.vue'

interface Props {
  items: NavItem[]
}

defineProps<Props>()
</script>

<template>
  <nav class="hidden h-full items-center gap-8 md:flex">
    <template v-for="item in items" :key="item.label">
      <RouterLink
        v-if="item.to"
        :to="item.to"
        class="text-[22px] font-extrabold text-white/90 transition-colors hover:text-white"
      >
        {{ item.label }}
      </RouterLink>

      <div v-else class="group flex h-full items-center">
        <button
          type="button"
          class="flex items-center gap-1 text-[22px] font-extrabold text-white/90 transition-colors hover:text-white"
        >
          {{ item.label }}
          <NavChevronIcon class="group-hover:-rotate-180" />
        </button>

        <div
          class="invisible fixed inset-x-0 top-20 opacity-0 shadow-lg transition-opacity duration-150 group-hover:visible group-hover:opacity-100"
        >
          <div class="bg-rich-black">
            <div class="flex items-center gap-8 px-6 py-3 sm:px-8 md:pl-50">
              <RouterLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="text-[20px] font-medium whitespace-nowrap text-white/90 transition-colors hover:text-white"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </template>
  </nav>
</template>
