<script lang="ts" setup>
import { ref } from 'vue'
import type { NavItem } from '@/models/shared/nav-item.model'
import NavChevronIcon from './NavChevronIcon.vue'

interface Props {
  items: NavItem[]
}

interface Emits {
  (e: 'navigate'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const openSubmenu = ref<string | null>(null)

function toggleSubmenu(label: string) {
  openSubmenu.value = openSubmenu.value === label ? null : label
}
</script>

<template>
  <div class="bg-rich-black max-h-[calc(100vh-5.5rem)] overflow-y-auto px-6 pb-4 md:hidden">
    <nav class="flex flex-col">
      <template v-for="item in items" :key="item.label">
        <RouterLink
          v-if="item.to"
          :to="item.to"
          class="border-b border-white/10 py-3 text-[19px] font-extrabold text-white/90"
          @click="emit('navigate')"
        >
          {{ item.label }}
        </RouterLink>

        <div v-else class="border-b border-white/10">
          <button
            type="button"
            class="flex w-full items-center justify-between py-3 text-[19px] font-extrabold text-white/90"
            @click="toggleSubmenu(item.label)"
          >
            {{ item.label }}
            <NavChevronIcon :open="openSubmenu === item.label" />
          </button>
          <div v-if="openSubmenu === item.label" class="flex flex-col pb-3 pl-4">
            <RouterLink
              v-for="child in item.children"
              :key="child.label"
              :to="child.to"
              class="py-2 text-[14px] font-medium text-white/80"
              @click="emit('navigate')"
            >
              {{ child.label }}
            </RouterLink>
          </div>
        </div>
      </template>
    </nav>
  </div>
</template>
