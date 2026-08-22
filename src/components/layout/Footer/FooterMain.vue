<script lang="ts" setup>
import { footerRechtlichesLinks, footerVereinLinks } from '@/data/footer.data'
import FooterBrand from './FooterBrand.vue'
import FooterContactButton from './FooterContactButton.vue'
import FooterLinkList from './FooterLinkList.vue'

const year = new Date().getFullYear()
</script>

<template>
  <div>
    <div class="bg-accent-dark font-sans">
      <div class="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div class="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <FooterBrand />

          <div class="flex gap-12 sm:gap-16">
            <FooterLinkList title="Verein" :links="footerVereinLinks" />

            <div>
              <FooterLinkList title="Rechtliches" :links="footerRechtlichesLinks" />
              <FooterContactButton email="franz.ikker@ac-schlecksl.de" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-rich-black">
      <div class="mx-auto max-w-5xl px-6 py-5 sm:px-8">
        <p class="text-sm text-white/60">&copy; {{ year }} Marcel Grüßinger</p>
      </div>
    </div>
  </div>
</template>
