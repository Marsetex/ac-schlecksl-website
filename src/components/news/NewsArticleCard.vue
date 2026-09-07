<script lang="ts" setup>
import type { NewsItem } from '@/models/news/news-item.model'
import { formatNewsDate } from '@/utils/news-date'

interface Props {
  item: NewsItem
}

defineProps<Props>()
</script>

<template>
  <article
    class="border-rich-black/10 overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-md"
  >
    <div class="flex flex-col sm:flex-row-reverse">
      <figure v-if="item.image" class="flex flex-col sm:w-64 sm:flex-none">
        <img
          :src="item.image"
          :alt="item.imageCaption ?? item.title"
          class="h-56 w-full object-cover sm:h-auto sm:min-h-0 sm:flex-1"
        />
        <figcaption
          v-if="item.imageCaption"
          class="text-rich-black/45 px-4 py-2 text-xs italic sm:flex-none"
        >
          {{ item.imageCaption }}
        </figcaption>
      </figure>

      <div class="flex-1 px-6 py-6 sm:px-7 sm:py-7">
        <h2 class="text-rich-black text-xl font-bold sm:text-2xl">{{ item.title }}</h2>
        <div class="text-rich-black/50 mt-1 flex items-center gap-1.5 text-xs">
          <i class="ri-calendar-line text-sm" aria-hidden="true"></i>
          {{ formatNewsDate(item.date) }}
        </div>
        <p
          v-for="paragraph in item.paragraphs"
          :key="paragraph"
          class="text-rich-black/80 mt-3 text-[15px] leading-relaxed"
        >
          {{ paragraph }}
        </p>

        <div
          v-if="item.links?.length"
          class="border-rich-black/10 mt-4 flex flex-col gap-2 border-t pt-4"
        >
          <RouterLink
            v-for="link in item.links"
            :key="link.to"
            :to="link.to"
            class="text-celtic-blue inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
          >
            {{ link.label }}
            <i class="ri-arrow-right-line text-base" aria-hidden="true"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>
