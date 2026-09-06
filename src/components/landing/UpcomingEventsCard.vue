<script lang="ts" setup>
import { events } from '@/data/events.data'
import { formatEventDateLabel, getUpcomingEvents } from '@/utils/event-date'

interface Props {
  limit?: number
}

const props = withDefaults(defineProps<Props>(), { limit: 2 })

const upcomingEvents = getUpcomingEvents(events, new Date(), props.limit)
</script>

<template>
  <div
    class="border-celtic-blue bg-linear-to-br from-yale-blue/55 to-rich-black/55 min-w-0 flex-1 rounded-2xl border-[1.5px] px-6 py-4.5 text-left shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[10px]"
  >
    <div class="text-celtic-blue mb-2.5 text-xs font-bold tracking-[0.08em] uppercase">
      Nächste Termine
    </div>
    <div
      v-for="event in upcomingEvents"
      :key="event.date"
      class="mb-2 flex items-center gap-2.5 text-sm text-white"
    >
      <i class="ri-calendar-line text-celtic-blue shrink-0 text-lg" aria-hidden="true"></i>
      <span>
        <span class="font-semibold">{{ formatEventDateLabel(event) }}</span> —
        {{ event.title }}
      </span>
    </div>
    <RouterLink
      to="/termine"
      class="text-celtic-blue mt-2 inline-block text-sm font-semibold underline"
    >
      Alle Termine ansehen
    </RouterLink>
  </div>
</template>
