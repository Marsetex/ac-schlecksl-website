<script lang="ts" setup>
import AppFooter from '@/components/layout/AppFooter.vue'
import NavigationBar from '@/components/layout/NavigationBar.vue'
import img1978 from '@/assets/history/1978-anfaenge.jpg'
import img1979 from '@/assets/history/1979-gruendung.jpg'
import imgStammtisch from '@/assets/history/stammtisch.jpg'
import img1986 from '@/assets/history/1986-turnier.jpg'

interface TimelineEvent {
  year: string
  title: string
  text: string
  image?: string
}

const events: TimelineEvent[] = [
  {
    year: '1978',
    title: 'Die Anfänge',
    text: 'Nach Wehr- und Zivildienst ist im Sommer 1978 plötzlich wieder Zeit für andere Dinge. Es wird Fußball gespielt – auf den Sportplätzen am Kanaldamm, auf dem kleinen Platz am Kriegerdenkmal und manchmal in der Schulsporthalle.',
    image: img1978,
  },
  {
    year: '1979',
    title: 'Gründung des Hobbyfußballclubs',
    text: 'Bei der Anneliese im "Engel" wird es offiziell: Ein Hobbyfußballverein soll es werden – nein, ein Club, denn "Jeder nennt sich FC, wir nicht!". Leroy bringt den Namen "Schlecksl" ins Spiel, Andreas ergänzt "AC, so heißt keiner". So wird der Hobbyfußballclub AC Schlecksl geboren, mit dreizehn Gründungsmitgliedern: Klaus R., Franz, Michael J., Pinky, Bernhard, Andreas Sch., Klaus K., Frank, Klaus Sch., Michael R., Charly, Leroy und Andreas H.',
    image: img1979,
  },
  {
    year: '1983',
    title: 'Ein Wandteller aus dem Elsass',
    text: 'Im Juli 1983 überreichen Gegner im Elsass einen handgefertigten, handbemalten Wandteller als Freundschaftsgeschenk. Eine Kiste Bier wäre uns damals lieber gewesen – den Teller haben wir trotzdem noch heute.',
  },
  {
    year: '1986',
    title: 'Neue Trainingsheimat & erstes Turnier',
    text: 'Weil die Hartplätze am Kanaldamm einem Industriegebiet weichen müssen, ziehen wir mit dem Training nach Baden-Oos zum dortigen FV um. Im selben Jahr veranstalten wir unser erstes Fußballturnier in der Kuppener Sporthalle.',
    image: imgStammtisch,
  },
  {
    year: '1989',
    title: 'Grundstein der Knöpfle-Classics',
    text: 'In Baden-Oos legen wir den Grundstein zu den so erfolgreichen Knöpfle-Classics.',
  },
  {
    year: '1990',
    title: 'Restaurant im Wörtel & Turnier-Ära',
    text: 'Im Mai eröffnet das "Restaurant im Wörtel" in Kuppenheim seine Pforten – bis Mai 2000 unser Treffpunkt bei Rolf und Inge. Von 1990 bis 2005 wird das Knöpfle-Classics-Turnier in Zusammenarbeit mit der Sparkasse Gaggenau-Kuppenheim 16 Mal ausgetragen, mit bis zu 48 Mannschaften und Bands wie "Just for Fun", "Vampire\'s Daydream" oder "Late Heroes" vor bis zu 1800 Musikfans im Festzelt.',
    image: img1986,
  },
  {
    year: '1994',
    title: 'Ein gewähltes Gremium',
    text: 'Die Freizeit wird knapper, der Club wächst auf rund 60 Mitglieder. Wir installieren ein gewähltes Gremium – den Vorstand –, das die Interessen der Mitglieder vertritt.',
  },
  {
    year: '2000',
    title: 'Treffpunkt Rosario',
    text: 'Von Mai 2000 bis Mai 2004 treffen wir uns nach dem Training bei "Rosario" – bei Dart, Tischfußball, Billard oder einfach an der Theke, um Training zu diskutieren und eine Pizza zu verdrücken.',
  },
  {
    year: '2004',
    title: 'Gasthaus zum Kreuz',
    text: 'Von Mai 2004 bis September 2006 klingt der Trainingsabend bei Pils oder Schorle im "Gasthaus zum Kreuz" aus. Ab Mitternacht werden bei excellenten Fleischküchle die nächsten Events geplant.',
  },
  {
    year: '2006',
    title: 'Die Schwarze Hex',
    text: 'Mehr als drei Jahre treffen wir uns bei der Christa in der "Schwarzen Hex" und lassen dort die "3. Halbzeit" ausklingen. Danach treffen wir uns in unterschiedlichen Lokalen, inklusive dem Clubhaus des SV Baden-Oos, je nach Lust und Laune.',
  },
  {
    year: 'Heute',
    title: '40 Jahre AC Schlecksl',
    text: 'Es gab über die Jahre immer wieder ein Auf und Ab – geblieben ist der AC Schlecksl Hobbyfußballclub seit 1979, mit aktuell rund 40 Mitgliedern, von denen etwa 30% noch aktiv auf dem Trainingsplatz stehen. Wir erinnern uns an unsere verstorbenen Mitglieder: Andreas Schnurr, Christian Hatz, Erik Adam, Harald Fütterer, Andreas Hoppe, Andreas Warth.',
  },
]
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-4xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <header class="mb-16 text-center">
        <p class="font-display text-club-blue/70 text-sm font-semibold tracking-[0.2em] uppercase">
          Es war einmal...
        </p>
        <h1 class="font-display text-pitch-dark mt-2 text-4xl font-bold sm:text-5xl">
          40 Jahre AC Schlecksl
        </h1>
      </header>

      <div class="relative">
        <!-- Zeitstrahl -->
        <div class="bg-club-blue/20 absolute inset-y-0 left-4 w-0.5 md:left-1/2 md:-translate-x-1/2"></div>

        <ol class="flex flex-col gap-12 md:gap-16">
          <li
            v-for="(event, index) in events"
            :key="event.year"
            class="relative pl-12 md:pl-0"
            :class="index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'"
          >
            <span
              class="bg-gold ring-chalk absolute top-1 left-4 h-3 w-3 -translate-x-1/2 rounded-full ring-4 md:left-1/2"
            ></span>

            <article class="rounded-lg bg-white/70 p-5 shadow-sm sm:p-6">
              <p class="font-display text-club-blue text-2xl font-bold">{{ event.year }}</p>
              <h2 class="font-display text-pitch-dark mt-1 text-lg font-semibold">
                {{ event.title }}
              </h2>
              <img
                v-if="event.image"
                :src="event.image"
                :alt="event.title"
                class="my-4 h-auto w-full max-w-xs rounded object-cover"
              />
              <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
                {{ event.text }}
              </p>
            </article>
          </li>
        </ol>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
