<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import { contacts, liabilitySections } from '@/data/imprint.data'
</script>

<template>
  <DefaultPageLayout>
    <header class="mb-12 text-center">
      <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Impressum</h1>
    </header>

    <div class="grid gap-6 sm:grid-cols-2">
      <article
        v-for="contact in contacts"
        :key="contact.heading"
        class="rounded-lg bg-white/70 p-6 shadow-sm"
      >
        <p class="text-celtic-blue/70 text-sm font-semibold tracking-[0.15em] uppercase">
          {{ contact.heading }}
        </p>
        <h2 class="text-rich-black mt-2 text-xl font-bold">{{ contact.name }}</h2>
        <p
          v-for="line in contact.addressLines"
          :key="line"
          class="text-rich-black/80 mt-1 text-[15px] leading-relaxed"
        >
          {{ line }}
        </p>
        <p v-if="contact.fon" class="text-rich-black/80 mt-1 text-[15px] leading-relaxed">
          Fon: {{ contact.fon }}
        </p>
        <p v-if="contact.fax" class="text-rich-black/80 mt-1 text-[15px] leading-relaxed">
          Fax: {{ contact.fax }}
        </p>
        <a
          :href="`mailto:${contact.email}`"
          class="text-celtic-blue mt-1 block text-[15px] underline"
        >
          {{ contact.email }}
        </a>
      </article>
    </div>

    <section class="mt-16">
      <h2 class="text-rich-black text-2xl font-bold">Haftungshinweis</h2>

      <div class="mt-6 space-y-8">
        <article v-for="section in liabilitySections" :key="section.heading">
          <h3 class="text-rich-black text-lg font-semibold">
            {{ section.heading }}
          </h3>
          <p class="text-rich-black/80 mt-2 text-[15px] leading-relaxed">
            {{ section.text }}
          </p>
        </article>
      </div>
    </section>
  </DefaultPageLayout>
</template>
