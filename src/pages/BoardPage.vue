<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import { teamLeaders } from '@/data/team-leaders.data'

interface BoardMember {
  role: string
  name: string
  addressLines?: string[]
}

const boardMembers: BoardMember[] = [
  {
    role: 'Vorstand und Geschäftsführer',
    name: 'Franz Ikker',
    addressLines: ['Hans-Thoma-Straße 3', '76456 Kuppenheim'],
  },
  {
    role: 'Vorstand',
    name: 'Klaus Schulz',
  },
  {
    role: 'Öffentlichkeitsarbeit',
    name: 'Richard Schlick',
  },
]
</script>

<template>
  <DefaultPageLayout>
    <header class="mb-12">
      <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Vorstand</h1>
      <p class="text-rich-black/80 mt-3 text-[15px] leading-relaxed">
        Eure Ansprechpartner in allen Fragen rund um den AC Schlecksl
      </p>
    </header>

    <div class="grid gap-6 sm:grid-cols-2">
      <article
        v-for="member in boardMembers"
        :key="member.role + member.name"
        class="rounded-lg bg-white/70 p-6 shadow-sm"
      >
        <p class="text-celtic-blue/70 text-sm font-semibold tracking-[0.15em] uppercase">
          {{ member.role }}
        </p>
        <h2 class="text-rich-black mt-2 text-xl font-bold">{{ member.name }}</h2>
        <p
          v-for="line in member.addressLines"
          :key="line"
          class="text-rich-black/80 mt-1 text-[15px] leading-relaxed"
        >
          {{ line }}
        </p>
      </article>
    </div>

    <section class="mt-16">
      <h2 class="text-rich-black text-2xl font-bold">Teamchefs</h2>
      <p class="text-rich-black/80 mt-3 text-[15px] leading-relaxed">
        Bei Interesse an einer Teilnahme am Training meldet euch bitte bei unseren Teamchefs Denis
        oder Harald.
      </p>

      <div class="mt-6 grid gap-6 sm:grid-cols-2">
        <article
          v-for="member in teamLeaders"
          :key="member.name"
          class="rounded-lg bg-white/70 p-6 shadow-sm"
        >
          <h3 class="text-rich-black text-xl font-bold">{{ member.name }}</h3>
          <a
            v-if="member.email"
            :href="`mailto:${member.email}`"
            class="text-celtic-blue mt-1 block text-[15px] underline"
          >
            {{ member.email }}
          </a>
        </article>
      </div>
    </section>
  </DefaultPageLayout>
</template>
