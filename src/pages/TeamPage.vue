<script lang="ts" setup>
import DefaultPageLayout from '@/components/layout/DefaultPageLayout.vue'
import TeamPlayerCard from '@/components/team/TeamPlayerCard.vue'
import { teamGroups } from '@/data/team.data'
</script>

<template>
  <DefaultPageLayout>
    <header class="mb-12">
      <h1 class="text-rich-black text-3xl font-bold sm:text-4xl">Mannschaft</h1>
    </header>

    <section v-for="group in teamGroups" :key="group.heading" class="mb-14 last:mb-0">
      <h2 class="text-rich-black mb-6 text-2xl font-bold">{{ group.heading }}</h2>

      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        <TeamPlayerCard v-for="player in group.players" :key="player.name" :player="player" />
      </div>
    </section>
  </DefaultPageLayout>
</template>
