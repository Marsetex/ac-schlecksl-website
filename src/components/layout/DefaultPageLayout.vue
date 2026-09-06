<script lang="ts" setup>
import FooterMain from '@/components/layout/Footer/FooterMain.vue'
import NavigationBar from '@/components/layout/NavigationBar/NavigationBar.vue'
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col">
    <NavigationBar />

    <div class="mx-auto w-full max-w-5xl pt-36 flex-1 px-6 pb-24 sm:px-8">
      <slot></slot>
    </div>

    <FooterMain />
  </div>
</template>
