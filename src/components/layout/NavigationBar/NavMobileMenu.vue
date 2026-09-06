<script lang="ts" setup>
import { ref } from 'vue'
import type { NavItem } from '@/models/shared/nav-item.model'

interface Props {
  items: NavItem[]
}

interface Emits {
  (e: 'navigate'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const activeItem = ref<NavItem | null>(null)

function openSubmenu(item: NavItem) {
  activeItem.value = item
}

function closeSubmenu() {
  activeItem.value = null
}
</script>

<template>
  <div class="bg-rich-black max-h-[calc(100vh-5.5rem)] overflow-hidden px-6 pb-4 md:hidden">
    <div
      class="flex w-[200%] transition-transform duration-300 ease-in-out"
      :class="activeItem ? '-translate-x-1/2' : 'translate-x-0'"
    >
      <!-- Hauptmenü -->
      <nav class="flex w-1/2 shrink-0 flex-col pt-8">
        <template v-for="item in items" :key="item.label">
          <RouterLink
            v-if="item.to"
            :to="item.to"
            class="py-3 text-[19px] font-extrabold text-white/90"
            @click="emit('navigate')"
          >
            {{ item.label }}
          </RouterLink>

          <button
            v-else
            type="button"
            class="flex w-full items-center justify-between py-3 text-[19px] font-extrabold text-white/90"
            @click="openSubmenu(item)"
          >
            {{ item.label }}
          </button>
        </template>
      </nav>

      <!-- Untermenü -->
      <nav class="flex w-1/2 shrink-0 flex-col pt-8 pl-6">
        <div class="flex justify-between items-center gap-1 py-3">
          <p class="text-[19px] font-extrabold underline text-white/90">
            {{ activeItem?.label }}
          </p>
          <button
            type="button"
            class="text-[19px] font-semibold text-white/90"
            @click="closeSubmenu"
          >
            <i class="ri-arrow-left-s-line text-xl" aria-hidden="true"></i>
            Zurück
          </button>
        </div>
        <RouterLink
          v-for="child in activeItem?.children"
          :key="child.label"
          :to="child.to"
          class="py-2 text-[19px] font-medium text-white/80"
          @click="emit('navigate')"
        >
          {{ child.label }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
