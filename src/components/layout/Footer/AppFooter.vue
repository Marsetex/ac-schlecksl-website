<script lang="ts" setup>
const year = new Date().getFullYear()

const vereinLinks = [
  { label: 'Vorstand', to: '/vorstand' },
  { label: 'Training', to: '/training' },
  { label: 'Mannschaft', to: '/mannschaft' },
]

const rechtlichesLinks = [
  { label: 'Datenschutz', to: '/datenschutz' },
  { label: 'Impressum', to: '/impressum' },
]
</script>

<template>
  <footer class="bg-accent-dark font-sans">
    <div class="mx-auto max-w-3xl px-6 py-10 sm:px-8">
      <div class="flex flex-col gap-10 sm:flex-row sm:justify-between">
        <div class="flex items-center gap-3">
          <div>
            <p class="font-display text-lg font-bold tracking-wide text-white">AC SCHLECKSL</p>
            <p class="text-sm text-white/60">Hobbyfußball aus Kuppenheim seit 1979</p>
          </div>
        </div>

        <div class="flex gap-12 sm:gap-16">
          <div>
            <p class="font-display text-sm font-semibold tracking-wide text-white uppercase">
              Verein
            </p>
            <nav class="mt-4 flex flex-col gap-2">
              <RouterLink
                v-for="link in vereinLinks"
                :key="link.to"
                :to="link.to"
                class="text-sm text-white/70 transition-colors hover:text-white"
              >
                {{ link.label }}
              </RouterLink>
            </nav>
          </div>

          <div>
            <p class="font-display text-sm font-semibold tracking-wide text-white uppercase">
              Rechtliches
            </p>
            <nav class="mt-4 flex flex-col gap-2">
              <RouterLink
                v-for="link in rechtlichesLinks"
                :key="link.to"
                :to="link.to"
                class="text-sm text-white/70 transition-colors hover:text-white"
              >
                {{ link.label }}
              </RouterLink>
            </nav>
            <a
              href="mailto:franz.ikker@ac-schlecksl.de"
              class="mt-4 inline-block rounded-full border border-white/30 px-4 py-1.5 text-sm text-white transition-colors hover:bg-white/10"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-white/10 pt-6">
        <p class="text-sm text-white/60">&copy; {{ year }} AC Schlecksl</p>
      </div>
    </div>
  </footer>
</template>
