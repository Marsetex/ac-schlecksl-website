<script lang="ts" setup>
import TrainingCard from '@/components/landing/TrainingCard.vue'
import UpcomingEventsCard from '@/components/landing/UpcomingEventsCard.vue'
import LandingPageLayout from '@/components/layout/LandingPageLayout.vue'
</script>

<template>
  <LandingPageLayout>
    <div class="flex flex-1 flex-col items-center">
      <div class="flex flex-1 flex-col justify-center gap-10">
        <div class="flex flex-col max-w-200">
          <h1
            class="mb-1.5 text-[clamp(28px,4vw,44px)] font-bold text-white text-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          >
            AC Schlecksl
          </h1>
          <div>
            <p
              class="border-celtic-blue text-celtic-blue mb-2.5 inline-block border-b-2 pb-1 text-[clamp(13px,1.2vw,15px)] font-bold tracking-[0.04em] text-shadow-[0_1px_8px_rgba(0,0,0,0.5)] uppercase"
            >
              Hobbyfußballclub aus Kuppenheim seit 1979
            </p>
          </div>
          <p
            class="mt-5.5 text-[clamp(15px,1.6vw,18px)] leading-relaxed text-white/90 text-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
          >
            Der AC Schlecksl ist der letzte verbliebene Hobbyfußballverein in Kuppenheim. Seit 1979
            spielen wir Fußball, trainieren donnerstags ab 20:15 Uhr auf dem Gelände des FV
            Baden-Oos und bewirten die Gäste der Kuppenheimer Jahrmärkte in unserem eigenen
            Festzelt. Dazu kommen gemeinsame Aktivitäten wie Boule, Kegeln und Ausflüge.
          </p>
        </div>

        <div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <TrainingCard />
          <UpcomingEventsCard />
        </div>
      </div>
    </div>
  </LandingPageLayout>
</template>
