<script lang="ts" setup>
import heroImage from '@/assets/team-photo.jpg'
import NavigationBar from '@/components/layout/NavigationBar.vue'

const actions = [
  { label: 'Termine', href: '#termine' },
  { label: 'Training', href: '#training' },
  { label: 'Kontakt', href: '#kontakt' },
]
</script>

<template>
  <div class="relative h-screen w-screen overflow-hidden font-sans">
    <NavigationBar />

    <!-- Hero: volle Hoehe/Breite, kein Scrollen -->
    <main class="absolute inset-x-0 top-16 bottom-0 overflow-hidden">
      <img
        :src="heroImage"
        alt="AC Schlecksl Mannschaft auf dem Spielfeld"
        class="h-full w-full scale-[1.08] object-cover blur-[6px] brightness-[60%]"
      />

      <!-- Verdunkelung fuer Lesbarkeit -->
      <div
        class="bg-linear-to-b absolute inset-0 from-[rgba(6,8,18,0.15)] to-[rgba(6,8,18,0.55)]"
      />

      <!-- Inhalt: Text links, Buttons rechts (ab hero-Breakpoint), sonst gestapelt -->
      <div
        class="hero:flex-row hero:gap-12 absolute inset-0 flex flex-col items-center justify-center gap-7 p-8"
      >
        <div class="hero:text-left max-w-[640px] text-center">
          <h1
            class="mb-4 text-[clamp(28px,4vw,44px)] font-bold text-white text-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          >
            Hobbyfußballclub aus Kuppenheim/Baden
          </h1>
          <p
            class="text-[clamp(15px,1.6vw,18px)] leading-relaxed text-white/90 text-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
          >
            Der AC Schlecksl ist der letzte verbliebene Hobbyfußballverein in Kuppenheim. Seit 1979
            spielen wir Fußball, trainieren donnerstags ab 20:15&nbsp;Uhr auf dem Gelände des FV
            Baden-Oos und bewirten die Gäste der Kuppenheimer Jahrmärkte in unserem eigenen
            Festzelt. Dazu kommen gemeinsame Aktivitäten wie Boule, Kegeln und Ausflüge.
          </p>
        </div>

        <div class="hero:flex-col flex shrink-0 flex-row gap-4">
          <a
            v-for="action in actions"
            :key="action.label"
            :href="action.href"
            class="border-accent-light hover:bg-accent rounded-full border-[1.5px] bg-[rgba(10,14,30,0.35)] px-7 py-3 text-center text-base font-semibold whitespace-nowrap text-white backdrop-blur-[6px] transition-colors"
          >
            {{ action.label }}
          </a>
        </div>
      </div>
    </main>
  </div>
</template>
