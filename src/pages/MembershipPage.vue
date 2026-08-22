<script lang="ts" setup>
import AppFooter from '@/components/layout/Footer/AppFooter.vue'
import NavigationBar from '@/components/layout/NavigationBar/NavigationBar.vue'
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-3xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <header class="mb-12">
        <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Mitgliedschaft</h1>
      </header>

      <article>
        <h2 class="font-display text-club-blue text-2xl font-bold">
          Der AC Schlecksl sucht neue Mitspieler
        </h2>
        <h3 class="font-display text-pitch-dark mt-4 text-lg font-semibold">
          Du bist mindestens 18 Jahre alt und...
        </h3>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          ...hast Fußball spielen gelernt, möchtest aber nicht mehr jeden Samstag oder Sonntag auf
          dem Sportplatz verbringen.
        </p>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          ...hast Fußball spielen nicht gelernt, hast aber Lust einmal in der Woche mit
          Gleichgesinnten zu spielen.
        </p>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          ...hast Fußball spielen nicht gelernt, spielst aber gerne und bist auch ein sog.
          "Vereinsmensch".
        </p>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          ...spielst gerne nach deinen Fähigkeiten Fußball und fühlst dich in einem tollen Team
          wohl.
        </p>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          ...hast mal Fußball gespielt, hast nichts verlernt und würdest gerne mal wieder deine
          aktuellen Fähigkeiten testen.
        </p>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          ...bist von hier, möchtest Fußball spielen, hast dich aber noch nie getraut einen vom AC
          Schlecksl anzusprechen.
        </p>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          ...bist neu hier in der Gegend, kennst keinen vom AC Schlecksl und möchtest einfach nur
          einmal in der Woche kicken.
        </p>
        <h3 class="font-display text-pitch-dark mt-4 text-lg font-semibold">
          Wenn auch nur ein Merkmal auf dich zutrifft, dann hast du folgene Wahl:
        </h3>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          1. Ruf an und informiere dich: 07222 42128 oder 49262
        </p>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          2. Schicke eine E-Mail mit deinen Fragen an
          <a href="mailto:franz@ikker.de" class="text-club-blue underline">franz@ikker.de</a>
        </p>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          3. Komm einfach vorbei: Jeden Donnerstag ab 20 Uhr, Sportplatz in Baden-Oos.
        </p>
      </article>
    </main>

    <AppFooter />
  </div>
</template>
