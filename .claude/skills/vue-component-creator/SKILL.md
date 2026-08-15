---
name: vue-component-creator
description: Creates and refactors Vue 3 components following strict best practices (Composition API with <script setup lang="ts">, Tailwind CSS, atomic subcomponents). Use this skill when creating new Vue components or reworking existing ones.
version: 1.0.0
author: Marcel Grüßinger
tags:
  - vue3
  - typescript
  - tailwind
  - components
---

# Vue 3 Component Guidelines Skill

## Purpose

This skill defines the architecture and syntax standards for Vue 3 components to ensure type safety, consistent styling, and clean component patterns across the project.

## Component Rule Set

1. **Single-File Components (SFC) & Block Order:**
   - Every component MUST be structured as a Single-File Component (`.vue` file).
   - The order of the blocks within the `.vue` file MUST strictly follow this scheme:
     1. `<script lang="ts" setup>` (logic first)
     2. `<template>` (structure)
     3. `<style scoped>` (styling – if present)

2. **Script Block:**
   - Use exclusively `<script lang="ts" setup>`.
   - No Options API, no manual `defineComponent({...})` in a separate script block.
   - Props and emits must be strictly typed via TypeScript interfaces (`defineProps<Props>()`, `defineEmits<Emits>()`).

3. **Styling & CSS:**
   - Primarily use **Tailwind CSS** utility classes in the template.
   - Avoid the `<style>` block entirely by default.
   - **Exception rule:** A `<style>` block is only allowed when Tailwind cannot cleanly cover the goal (e.g. complex keyframe animations, third-party overrides). If present, `scoped` MUST be used: `<style scoped>`.

4. **Component Size & Modularity (Atomic Principle):**
   - Keep components as small and focused as possible (Single Responsibility Principle).
   - As soon as a component takes on more than one responsibility or the template becomes hard to follow (rule of thumb: > 80 template lines), logical blocks must be extracted into subcomponents in the `components/` subfolder.

---

## Template / Example Component

```vue
<script lang="ts" setup>
import { ref, computed } from 'vue'
import UserAvatar from './UserAvatar.vue' // Subcomponent extracted

// 1. Interfaces for typing
interface Props {
  userName: string
  avatarUrl?: string
  isActive?: boolean
}

interface Emits {
  (e: 'select', userId: string): void
}

// 2. Props & emits with defaults
const props = withDefaults(defineProps<Props>(), {
  avatarUrl: '/default-avatar.png',
  isActive: false,
})

const emit = defineEmits<Emits>()

// 3. State & Logic
const isSelected = ref(false)

const statusBadgeColor = computed(() => {
  return props.isActive ? 'bg-emerald-500' : 'bg-slate-300'
})

function handleCardClick(): void {
  isSelected.value = !isSelected.value
  emit('select', props.userName)
}
</script>

<template>
  <div
    class="flex items-center gap-3 rounded-lg border border-slate-200 p-4 transition-all hover:border-slate-300 hover:shadow-sm cursor-pointer"
    :class="{ 'ring-2 ring-indigo-500': isSelected }"
    @click="handleCardClick"
  >
    <!-- Small subcomponent for image display -->
    <UserAvatar :alt="props.userName" :src="props.avatarUrl" />

    <div class="flex flex-col">
      <span class="font-medium text-slate-900">{{ props.userName }}</span>
      <div class="flex items-center gap-1.5 mt-0.5">
        <span class="h-2 w-2 rounded-full" :class="statusBadgeColor" />
        <span class="text-xs text-slate-500">
          {{ props.isActive ? 'Active' : 'Inactive' }}
        </span>
      </div>
    </div>
  </div>
</template>

<!-- IMPORTANT: omit <style> by default! Only in the exception case: -->
<!-- 
<style scoped>
/* Only for special cases that Tailwind cannot cover */
</style> 
-->
```
