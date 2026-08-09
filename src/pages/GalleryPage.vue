<script lang="ts" setup>
import { ref } from 'vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import NavigationBar from '@/components/layout/NavigationBar.vue'
import imgStadtfest2009 from '@/assets/gallery/2009-stadtfest.jpg'
import imgPretzschendorf2009 from '@/assets/gallery/2009-pretzschendorf.jpg'
import imgHuettenwochenende2009 from '@/assets/gallery/2009-huettenwochenende.jpg'
import imgMaijahrmarkt2009 from '@/assets/gallery/2009-maijahrmarkt.jpg'
import imgSasbachwalden2009 from '@/assets/gallery/2009-sasbachwalden.jpg'
import imgHerxheim2008 from '@/assets/gallery/2008-herxheim.jpg'
import imgEggenstein2007 from '@/assets/gallery/2007-eggenstein.jpg'
import imgSasbachwalden2007 from '@/assets/gallery/2007-sasbachwalden.jpg'
import imgStadtfest2007 from '@/assets/gallery/2007-stadtfest.jpg'
import imgPretzschendorf2006 from '@/assets/gallery/2006-pretzschendorf.jpg'
import imgPretzschendorf2005 from '@/assets/gallery/2005-pretzschendorf.jpg'
import imgKnoepfleClassics2005 from '@/assets/gallery/2005-knoepfle-classics.jpg'
import imgKnoepfleClassics2004 from '@/assets/gallery/2004-knoepfle-classics.jpg'
import imgAusflug2002 from '@/assets/gallery/2002-ausflug.jpg'
import imgHelferfest2002 from '@/assets/gallery/2002-helferfest.jpg'
import imgFasching1999 from '@/assets/gallery/1999-fasching.jpg'
import imgAlpirsbach from '@/assets/gallery/alpirsbach.jpg'

interface GalleryEntry {
  image: string
  title: string
  paragraphs: string[]
}

interface GalleryYear {
  year: string
  entries: GalleryEntry[]
}

const galleryYears: GalleryYear[] = [
  {
    year: '2009',
    entries: [
      {
        image: imgStadtfest2009,
        title: 'Stadtfest 2009',
        paragraphs: [
          'Auf dem Stadtfest gabs natürlich wieder den AC Schlecksl Klassiker: die XXL Currywurst. Auch diesmal ist keiner dran gestorben. Nur im "Diebsloch" wurden zu später Stunde angeblich ein paar Schnapsleichen gesichtet. Schuld daran war unter Anderem die Premiere der Jaegermeister-Tap Maschine.',
          'Die Jägermeister-Tap Maschine kann man übrigens auch leihen.',
        ],
      },
      {
        image: imgPretzschendorf2009,
        title: 'Badenia Cup Pretzschendorf',
        paragraphs: [
          'Auch 2009 fuhren wir Schlecksler in den wilden Osten. Neben den Spielern war diesmal sogar unser Präsi mit dabei. Um ein wenig Bewegung beim Ausflug zu den Schwedenlöchern kam auch er nicht herum.',
        ],
      },
      {
        image: imgHuettenwochenende2009,
        title: 'Hüttenwochende 10.05 - 11.05.',
        paragraphs: [
          'In der Nacht vom 10. zum 11. Mai wurde das 30 jährige Jubiläum mit einer Party eingeleutet. Vorsichtshalber wurde die Übernachtung gleich mitgebucht. Nachdem einige Mitglieder für ihre herausragenden Leistungen hinter Grill und Fritteuse angemessen geehrt wurden, wurde der Abend mit einem Quiz und Live-Musik abgerundet.',
        ],
      },
      {
        image: imgMaijahrmarkt2009,
        title: 'Maijahrmarkt 03.05 - 04.05.',
        paragraphs: [
          'Auf dem Jahrmarkt in Kuppenheim servierte der AC Schlecksl Currywürste, die schon in der kleinen Ausführung XL hießen. Die XXL Currywurst mit Pommes ist nur was für echte Kerle. Acuh wenn der AC Schlecksl ein Hobbyclub ist, sind an Grill und Fritteuse nur Profis am Werk.',
        ],
      },
      {
        image: imgSasbachwalden2009,
        title: 'Spiel gegen Sasbachwalden AH',
        paragraphs: [
          'Nach Diskussionen über den Spieluntergrund haben wir unser erstes Heimspiel seit langem doch auswärts in Sasbachwalden bestritten. Trotz langer Anreise haben wir das Spiel mit 4:1 zu unseren Gunsten entscheiden können und starteten somit mit einem Sieg in die Großfeldsaison 2009.',
        ],
      },
    ],
  },
  {
    year: '2008',
    entries: [
      {
        image: imgHerxheim2008,
        title: 'Spiel gegen Herxheim AH',
        paragraphs: [
          '2008 spielten wir zum ersten mal gegen die Alten Herren von Herxheim. Das Spiel endete 1:1. Der Abend klang mit pfälzer Gemütlichkeit im Vereinsheim aus.',
        ],
      },
    ],
  },
  {
    year: '2007',
    entries: [
      {
        image: imgEggenstein2007,
        title: 'Spiel gegen CRK Eggenstein',
        paragraphs: [
          'Das Spiel gegen Eggenstein endete 1:3 für den AC Schlecksl. Frank Roth kam hier zum kürzesten Einsatz in der Geschichte des AC Schlecksl. Direkt nach dem einlaufen verdrehte er sich das Knie und mußte wieder vom Platz.',
        ],
      },
      {
        image: imgSasbachwalden2007,
        title: 'Spiel gegen Sasbachwalden AH',
        paragraphs: [
          'Die Alde Gott Arena ist ein beliebtes Pflaster für den AC Schlecksl. Das Spiel gegen die alten Herren aus Sasbachwalden wurde von Jan Stemmle mit einem Solo direkt zu Beginn des Spiels mit 0:1 entschieden.',
        ],
      },
      {
        image: imgStadtfest2007,
        title: 'Stadtfest Kuppenheim',
        paragraphs: [
          '2007 wurde das Stadtfest in Kuppenheim zum ersten mal gefeiert. Der AC Schlecksl war natürlich mit von der Partie. Im "Diebsloch", den vom AC Schlecksl bewirteten Keller, wurde bis in die frühen Morgenstuden gefeiert als ob es kein morgen gibt.',
        ],
      },
    ],
  },
  {
    year: '2006',
    entries: [
      {
        image: imgPretzschendorf2006,
        title: 'Badenia Cup Pretzschendorf',
        paragraphs: [
          'Nachdem es uns 2005 in Dresden und Pretzschendorf so gut gefallen hat wollten wir natürlich im nächsten Jahr wieder hin. Für den Turniersieg hat es leider nicht gereicht aber dafür haben wir jede Menge interessanter Eindrücke sammeln können. Vor allem auf dem Straßenfest Bunte Republik Neustadt haben wir nicht ganz alltägliche Leute getroffen.',
        ],
      },
    ],
  },
  {
    year: '2005',
    entries: [
      {
        image: imgPretzschendorf2005,
        title: 'Badeniacup Pretzschendorf 2005',
        paragraphs: [
          '2005 fuhr zum ersten mal eine Mannschaft des AC Schlecksl in den wilden Osten. Als Rahmenprogramm rund um die Teilnahme am Badeniacup in Pretzschendorf besuchten wir Dresden und setzten uns beim Straßenfest Bunte Republik Neustadt mit den Einheimischen Sitten und Gebräuchen auseinander.',
        ],
      },
      {
        image: imgKnoepfleClassics2005,
        title: 'Knoepfle Classics',
        paragraphs: [
          '2005 fand zum letzten mal das Hallenturnier "Knoepfle Classics" statt. Mit einer Materialschlacht aus Hallenturnier, Festzelt und Bands endete die Geschichte des legendären Turniers.',
        ],
      },
    ],
  },
  {
    year: '2004',
    entries: [
      {
        image: imgKnoepfleClassics2004,
        title: 'Knoepfle Classics',
        paragraphs: [
          'Im Jubiläumsjahr 2004 wurde bei den Knoepfle Classics mal wieder alles gegeben. Zum 25-jährigen kamen auch einige Stars auf die Bühne, zum Beispiel Elvis.',
        ],
      },
    ],
  },
  {
    year: '2002',
    entries: [
      {
        image: imgAusflug2002,
        title: 'Ausflug',
        paragraphs: [
          '2002 wurden mal wieder Kind und Kegel zu einem Ausflug eingepackt. Bevor die Familien was zu Essen und zu trinken bekamen mussten die Männer erst Holz mit primitiven Werkzeugen bearbeiten.',
        ],
      },
      {
        image: imgHelferfest2002,
        title: 'Helferfest',
        paragraphs: [
          'Nach den Strapazen durch die Bewirtung bei verschiedenen Festen gönnen sich die Schlecksler mit einem Helferfest eine Belohnung.',
        ],
      },
    ],
  },
  {
    year: '20. Jahrhundert',
    entries: [
      {
        image: imgFasching1999,
        title: 'Schmutziger Donnerstag 1999',
        paragraphs: [
          'Traditionell beginnt das AC Schlecksl Jahr mit dem Treffen am schmutzigen Donnerstag. Nachdem man sich bei Franz im Keller vorbereitet hat gehts in die Wörtelhalle. Wie man nach Hause kommt weiß man nur selbst. Machmal weiß man nicht mal das.',
        ],
      },
      {
        image: imgAlpirsbach,
        title: 'Ausflug nach Alpirsbach',
        paragraphs: [
          'Beim Ausflug nach Alpirsbach wurde eine Glasbläserei besichtigt. Die Bilder sind schon so alt, dass man sie garnicht richtig datieren kann...',
        ],
      },
    ],
  },
]

const openYear = ref<string | null>(galleryYears[0]?.year ?? null)

function toggleYear(year: string) {
  openYear.value = openYear.value === year ? null : year
}

function onEnter(el: Element) {
  const element = el as HTMLElement
  element.style.height = '0'
  void element.offsetHeight
  element.style.height = `${element.scrollHeight}px`
}

function onAfterEnter(el: Element) {
  ;(el as HTMLElement).style.height = 'auto'
}

function onLeave(el: Element) {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
  void element.offsetHeight
  element.style.height = '0'
}
</script>

<template>
  <div class="bg-chalk flex min-h-screen flex-col font-sans">
    <NavigationBar />

    <main class="mx-auto w-full max-w-3xl flex-1 px-6 pt-28 pb-24 sm:px-8">
      <header class="mb-12">
        <h1 class="font-display text-pitch-dark text-3xl font-bold sm:text-4xl">Fotogalerien</h1>
        <p class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed">
          Mehr Informationen zu den Partien findest Du in der Rubrik
          <RouterLink to="/spiele" class="text-club-blue underline">Spiele</RouterLink>.
        </p>
      </header>

      <div class="divide-pitch-dark/10 rounded-2xl bg-white shadow-sm divide-y">
        <section v-for="group in galleryYears" :key="group.year">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            :aria-expanded="openYear === group.year"
            @click="toggleYear(group.year)"
          >
            <h2 class="font-display text-pitch-dark text-xl font-bold sm:text-2xl">
              {{ group.year }}
            </h2>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              class="text-club-blue flex-none transition-transform duration-300"
              :class="{ 'rotate-180': openYear === group.year }"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <Transition @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
            <div v-show="openYear === group.year" class="overflow-hidden">
              <div class="space-y-10 px-6 pb-8">
                <article v-for="entry in group.entries" :key="entry.title" class="clearfix">
                  <img
                    :src="entry.image"
                    :alt="entry.title"
                    class="float-left mr-5 mb-2 w-40 rounded object-cover"
                  />
                  <h3 class="font-display text-club-blue text-xl font-bold">{{ entry.title }}</h3>
                  <p
                    v-for="paragraph in entry.paragraphs"
                    :key="paragraph"
                    class="font-body text-pitch-dark/80 mt-3 text-[15px] leading-relaxed"
                  >
                    {{ paragraph }}
                  </p>
                </article>
              </div>
            </div>
          </Transition>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
