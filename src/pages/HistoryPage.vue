<script lang="ts" setup>
import { computed } from 'vue'
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import { historyEvents } from '@/data/history.data'

const calculatedYears = computed(() => new Date().getFullYear() - 1979)
</script>

<template>
  <DefaultPageLayout>
    <header class="mb-12">
      <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">
        {{ calculatedYears }} Jahre AC Schlecksl
      </h1>
      <p class="text-celtic-blue/70 mt-2 text-sm font-semibold tracking-[0.2em] uppercase">
        Es war einmal...
      </p>
    </header>

    <div class="relative">
      <!-- Zeitstrahl -->
      <div
        class="bg-celtic-blue/20 absolute inset-y-0 left-4 w-0.5 md:left-1/2 md:-translate-x-1/2"
      ></div>

      <ol class="flex flex-col gap-12 md:gap-16">
        <li
          v-for="(event, index) in historyEvents"
          :key="event.year"
          class="relative pl-12 md:pl-0"
          :class="index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'"
        >
          <span
            class="bg-gold ring-chalk absolute top-1 left-4 h-3 w-3 -translate-x-1/2 rounded-full ring-4 md:left-1/2"
          ></span>

          <article class="rounded-lg bg-white/70 p-5 shadow-sm sm:p-6">
            <p class="text-celtic-blue text-2xl font-bold">{{ event.year }}</p>
            <h2 class="text-rich-black mt-1 text-lg font-semibold">
              {{ event.title }}
            </h2>
            <img
              v-if="event.image"
              :src="event.image"
              :alt="event.title"
              class="my-4 h-auto w-full max-w-xs rounded object-cover"
            />
            <p class="text-rich-black/80 mt-3 text-[15px] leading-relaxed">
              {{ event.text }}
            </p>
          </article>
        </li>
      </ol>
    </div>
  </DefaultPageLayout>
</template>
