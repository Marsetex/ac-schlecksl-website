<script lang="ts" setup>
import type { GalleryEntry } from '@/models/gallery/gallery-entry.model'

interface Props {
  entry: GalleryEntry
}

defineProps<Props>()
</script>

<template>
  <article
    class="border-rich-black/10 flex flex-col gap-4 border-b border-dashed py-6 last:border-none last:pb-0 sm:flex-row sm:gap-5"
  >
    <img
      :src="entry.image"
      :alt="entry.title"
      class="aspect-[3/2] w-full flex-none rounded-lg object-cover sm:w-50"
    />

    <div class="flex min-w-0 flex-1 flex-col gap-2.5">
      <h3 class="text-celtic-blue text-xl font-bold">{{ entry.title }}</h3>

      <p
        v-for="paragraph in entry.paragraphs"
        :key="paragraph"
        class="text-rich-black/80 text-[15px] leading-relaxed"
      >
        {{ paragraph }}
      </p>

      <RouterLink
        :to="`/fotos/${entry.id}`"
        class="border-rich-black/30 text-rich-black hover:border-celtic-blue hover:text-celtic-blue mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors"
      >
        Galerie öffnen
        <i class="ri-arrow-right-line" aria-hidden="true"></i>
      </RouterLink>
    </div>
  </article>
</template>
