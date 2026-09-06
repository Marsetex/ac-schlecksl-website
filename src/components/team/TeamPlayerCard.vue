<script lang="ts" setup>
import type { TeamPlayer } from '@/models/team/team-player.model'

interface Props {
  player: TeamPlayer
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center gap-2 text-center">
    <img
      :src="player.image"
      :alt="player.name"
      class="aspect-square w-full rounded-lg object-cover shadow-sm"
    />
    <span class="text-rich-black text-sm font-bold">{{ player.name }}</span>
  </div>
</template>
