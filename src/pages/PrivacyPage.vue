<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import { responsibleParty, privacySections } from '@/data/privacy.data'
</script>

<template>
  <DefaultPageLayout>
    <header class="mb-12">
      <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Datenschutz</h1>
    </header>

    <article class="rounded-lg bg-white/70 p-6 shadow-sm">
      <p class="text-celtic-blue/70 text-sm font-semibold tracking-[0.15em] uppercase">
        Verantwortlicher
      </p>
      <h2 class="text-rich-black mt-2 text-xl font-bold">
        {{ responsibleParty.name }}
      </h2>
      <p
        v-for="line in responsibleParty.addressLines"
        :key="line"
        class="text-rich-black/80 mt-1 text-[15px] leading-relaxed"
      >
        {{ line }}
      </p>
      <p class="text-rich-black/80 mt-1 text-[15px] leading-relaxed">
        Fon: {{ responsibleParty.fon }}
      </p>
      <a
        :href="`mailto:${responsibleParty.email}`"
        class="text-celtic-blue mt-1 block text-[15px] underline"
      >
        {{ responsibleParty.email }}
      </a>
    </article>

    <div class="mt-10 space-y-8">
      <article v-for="section in privacySections" :key="section.heading">
        <h3 class="text-rich-black text-lg font-semibold">
          {{ section.heading }}
        </h3>
        <p
          v-for="paragraph in section.paragraphs"
          :key="paragraph"
          class="text-rich-black/80 mt-2 text-[15px] leading-relaxed"
        >
          {{ paragraph }}
        </p>
      </article>
    </div>
  </DefaultPageLayout>
</template>
