<script lang="ts" setup>
import NavigationBar from '@/components/layout/NavigationBar.vue'

interface BoardMember {
  role: string
  name: string
  addressLines?: string[]
  email?: string
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

const teamLeaders: BoardMember[] = [
  {
    role: 'Teamchef',
    name: 'Denis Reck',
    email: 'denis.reck@gmx.de',
  },
  {
    role: 'Teamchef',
    name: 'Harald Kolb',
    email: 'harald@bergsport-kolb.de',
  },
]
</script>

<template>
  <div class="bg-chalk min-h-screen font-sans">
    <NavigationBar />

    <main class="mx-auto max-w-3xl px-6 pt-28 pb-24 sm:px-8">
      <header class="mb-12 text-center">
        <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Vorstand</h1>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          Eure Ansprechpartner in allen Fragen rund um den AC Schlecksl
        </p>
      </header>

      <div class="grid gap-6 sm:grid-cols-2">
        <article
          v-for="member in boardMembers"
          :key="member.role + member.name"
          class="rounded-lg bg-white/70 p-6 shadow-sm"
        >
          <p class="font-display text-club-blue/70 text-sm font-semibold tracking-[0.15em] uppercase">
            {{ member.role }}
          </p>
          <h2 class="font-display text-pitch-dark mt-2 text-xl font-bold">{{ member.name }}</h2>
          <p
            v-for="line in member.addressLines"
            :key="line"
            class="font-body text-pitch-dark/80 mt-1 text-[15px] leading-relaxed"
          >
            {{ line }}
          </p>
        </article>
      </div>

      <section class="mt-16">
        <h2 class="font-display text-pitch-dark text-2xl font-bold">Teamchefs</h2>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          Bei Interesse an einer Teilnahme am Training meldet euch bitte bei unseren Teamchefs Denis
          oder Harald.
        </p>

        <div class="mt-6 grid gap-6 sm:grid-cols-2">
          <article
            v-for="member in teamLeaders"
            :key="member.name"
            class="rounded-lg bg-white/70 p-6 shadow-sm"
          >
            <h3 class="font-display text-pitch-dark text-xl font-bold">{{ member.name }}</h3>
            <a
              v-if="member.email"
              :href="`mailto:${member.email}`"
              class="text-club-blue mt-1 block text-[15px] underline"
            >
              {{ member.email }}
            </a>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>
