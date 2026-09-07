<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import NewsArticleCard from '@/components/news/NewsArticleCard.vue'
import { newsItemData } from '@/data/news.data'
import { events } from '@/data/events.data'
import { formatEventDateLabel, getUpcomingEvents } from '@/utils/event-date'

const upcomingEvents = getUpcomingEvents(events, new Date(), 2)
</script>

<template>
  <DefaultPageLayout>
    <div class="border-celtic-blue/10 rounded-2xl border bg-white p-6 shadow-sm">
      <div class="text-celtic-blue mb-3 text-xs font-bold tracking-[0.08em] uppercase">
        Nächste Termine
      </div>
      <div
        v-for="event in upcomingEvents"
        :key="event.date"
        class="text-rich-black mb-2 flex items-center gap-2.5 text-[15px] last:mb-0"
      >
        <i class="ri-calendar-line text-celtic-blue shrink-0 text-lg" aria-hidden="true"></i>
        <span
          ><span class="font-semibold">{{ formatEventDateLabel(event) }}</span> —
          {{ event.title }}</span
        >
      </div>
      <RouterLink
        to="/termine"
        class="text-celtic-blue mt-3 inline-block text-sm font-semibold underline"
      >
        Alle Termine ansehen
      </RouterLink>
    </div>

    <div class="text-rich-black mt-8 text-3xl font-bold sm:text-4xl">News</div>

    <div class="mt-12 flex flex-col gap-8">
      <NewsArticleCard v-for="item in newsItemData" :key="item.title" :item="item" />
    </div>
  </DefaultPageLayout>
</template>
