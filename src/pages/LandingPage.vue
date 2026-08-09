<script lang="ts" setup>
import heroImage from '@/assets/team-photo.jpg'
import NavigationBar from '@/components/layout/NavigationBar.vue'
import { upcomingEvents } from '@/data/upcomingEvents'

const trainingMonth = new Date().getMonth() + 1
const trainingAddress =
  trainingMonth >= 3 && trainingMonth <= 11
    ? 'Im Ried 1, 76532 Baden-Baden'
    : 'Großaustraße 7, 76456 Kuppenheim'
</script>

<template>
  <div class="relative h-screen w-screen overflow-hidden font-sans">
    <NavigationBar />

    <!-- Hero: volle Hoehe/Breite, kein Scrollen -->
    <main class="absolute inset-x-0 top-22 bottom-0 overflow-hidden">
      <img
        :src="heroImage"
        alt="AC Schlecksl Mannschaft auf dem Spielfeld"
        class="h-full w-full scale-[1.08] object-cover blur-[6px] brightness-60"
      />

      <!-- Verdunkelung fuer Lesbarkeit -->
      <div
        class="bg-linear-to-b absolute inset-0 from-[rgba(6,8,18,0.15)] to-[rgba(6,8,18,0.55)]"
      />

      <div class="absolute inset-0 flex items-center justify-center overflow-y-auto p-8">
        <div
          class="hero:items-start hero:text-left flex max-w-150 flex-col items-center gap-5.5 text-center"
        >
          <div>
            <h1
              class="mb-1.5 text-[clamp(28px,4vw,44px)] font-bold text-white text-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
            >
              AC Schlecksl
            </h1>
            <p
              class="border-accent-light text-accent-light mb-2.5 inline-block border-b-2 pb-1 text-[clamp(13px,1.2vw,15px)] font-bold tracking-[0.04em] text-shadow-[0_1px_8px_rgba(0,0,0,0.5)] uppercase"
            >
              Hobbyfußballclub aus Kuppenheim seit 1979
            </p>
            <p
              class="mt-5.5 max-w-150 text-[clamp(15px,1.6vw,18px)] leading-relaxed text-white/90 text-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
            >
              Der AC Schlecksl ist der letzte verbliebene Hobbyfußballverein in Kuppenheim. Seit
              1979 spielen wir Fußball, trainieren donnerstags ab 20:15&nbsp;Uhr auf dem Gelände des
              FV Baden-Oos und bewirten die Gäste der Kuppenheimer Jahrmärkte in unserem eigenen
              Festzelt. Dazu kommen gemeinsame Aktivitäten wie Boule, Kegeln und Ausflüge.
            </p>
          </div>

          <div class="hero:flex-row flex w-full max-w-150 flex-col gap-5">
            <!-- Training -->
            <div
              class="border-accent-light bg-linear-to-br min-w-0 flex-1 rounded-2xl border-[1.5px] from-[rgba(30,64,175,0.55)] to-[rgba(10,14,30,0.55)] px-6 py-4.5 text-left shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[10px]"
            >
              <div class="text-accent-light mb-2.5 text-xs font-bold tracking-[0.08em] uppercase">
                Training
              </div>
              <div class="mb-2 flex items-center gap-2.5 text-[15px] font-semibold text-white">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="text-accent-light shrink-0"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                Donnerstags ab 20:15 Uhr
              </div>
              <div class="mb-3.5 flex items-center gap-2.5 text-sm leading-relaxed text-white/85">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="text-accent-light shrink-0"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {{ trainingAddress }}
              </div>
              <RouterLink
                to="/mitgliedschaft"
                class="bg-accent hover:bg-accent-dark inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-base font-semibold whitespace-nowrap text-white transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Melde dich an
              </RouterLink>
            </div>

            <!-- Naechste Termine -->
            <div
              class="border-accent-light bg-linear-to-br min-w-0 flex-1 rounded-2xl border-[1.5px] from-[rgba(30,64,175,0.55)] to-[rgba(10,14,30,0.55)] px-6 py-4.5 text-left shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[10px]"
            >
              <div class="text-accent-light mb-2.5 text-xs font-bold tracking-[0.08em] uppercase">
                Nächste Termine
              </div>
              <div
                v-for="event in upcomingEvents"
                :key="event.label"
                class="mb-2 flex items-center gap-2.5 text-sm text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="text-accent-light shrink-0"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span
                  ><span class="font-semibold">{{ event.date }}</span> — {{ event.label }}</span
                >
              </div>
              <RouterLink
                to="/termine"
                class="text-accent-light mt-2 inline-block text-sm font-semibold underline"
              >
                Alle Termine ansehen
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
