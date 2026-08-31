<script lang="ts" setup>
import { computed } from 'vue'
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import { events } from '@/data/events.data'
import { getEventDateParts } from '@/utils/event-date'

const eventCards = computed(() =>
  events.map((event) => ({ ...event, ...getEventDateParts(event) })),
)
</script>

<template>
  <DefaultPageLayout>
    <header class="mb-12">
      <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Termine</h1>
      <p class="text-rich-black/80 mt-3 text-[15px] leading-relaxed">
        Die nächsten Veranstaltungen im Vereinsjahr.
      </p>
    </header>

    <div class="mx-auto flex flex-col gap-4">
      <article
        v-for="event in eventCards"
        :key="`${event.date}-${event.title}`"
        class="border-rich-black/10 flex overflow-hidden rounded-2xl border bg-white shadow-sm"
      >
        <div
          class="bg-celtic-blue text-chalk flex w-28 flex-none flex-col justify-center px-4 py-4"
        >
          <div class="text-chalk/70 text-[11px] tracking-wider uppercase">
            {{ event.weekday }}
          </div>
          <div class="mt-1 text-4xl leading-none font-bold">
            {{ event.day }}
          </div>
          <div class="mt-0.5 text-sm font-semibold tracking-widest">
            {{ event.month
            }}<span v-if="event.year" class="ml-1 text-xs font-normal opacity-70">
              {{ event.year }}
            </span>
          </div>
        </div>

        <div class="flex flex-1 flex-col justify-center gap-2 px-5 py-4">
          <h2 class="text-rich-black text-lg font-bold">{{ event.title }}</h2>
          <span
            v-if="event.location"
            class="bg-celtic-blue/10 text-rich-black/80 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs"
          >
            <i class="ri-map-pin-line text-celtic-blue" aria-hidden="true"></i>
            {{ event.location }}
          </span>
          <p v-if="event.note" class="text-rich-black/50 text-xs italic">
            {{ event.note }}
          </p>
        </div>
      </article>
    </div>
  </DefaultPageLayout>
</template>
