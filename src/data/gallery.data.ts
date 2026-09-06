import type { GalleryYear } from '@/models/gallery/gallery-year.model'
import type { GalleryEntry } from '@/models/gallery/gallery-entry.model'
import { galleryPhotosByEntryId } from '@/data/gallery-photos.data'

function entryPhotos(id: string) {
  return galleryPhotosByEntryId[id] ?? []
}

export const galleryYears: GalleryYear[] = [
  {
    year: '2009',
    entries: [
      {
        id: 'stadtfest-2009',
        image: '/gallery/2009-stadtfest.jpg',
        title: 'Stadtfest 2009',
        paragraphs: [
          'Auf dem Stadtfest gabs natürlich wieder den AC Schlecksl Klassiker: die XXL Currywurst. Auch diesmal ist keiner dran gestorben. Nur im "Diebsloch" wurden zu später Stunde angeblich ein paar Schnapsleichen gesichtet. Schuld daran war unter Anderem die Premiere der Jaegermeister-Tap Maschine.',
          'Die Jägermeister-Tap Maschine kann man übrigens auch leihen.',
        ],
        photos: entryPhotos('stadtfest-2009'),
      },
      {
        id: 'badenia-cup-pretzschendorf-2009',
        image: '/gallery/2009-pretzschendorf.jpg',
        title: 'Badenia Cup Pretzschendorf',
        paragraphs: [
          'Auch 2009 fuhren wir Schlecksler in den wilden Osten. Neben den Spielern war diesmal sogar unser Präsi mit dabei. Um ein wenig Bewegung beim Ausflug zu den Schwedenlöchern kam auch er nicht herum.',
        ],
        photos: entryPhotos('badenia-cup-pretzschendorf-2009'),
      },
      {
        id: 'huettenwochenende-2009',
        image: '/gallery/2009-huettenwochenende.jpg',
        title: 'Hüttenwochende 10.05 - 11.05.',
        paragraphs: [
          'In der Nacht vom 10. zum 11. Mai wurde das 30 jährige Jubiläum mit einer Party eingeleutet. Vorsichtshalber wurde die Übernachtung gleich mitgebucht. Nachdem einige Mitglieder für ihre herausragenden Leistungen hinter Grill und Fritteuse angemessen geehrt wurden, wurde der Abend mit einem Quiz und Live-Musik abgerundet.',
        ],
        photos: entryPhotos('huettenwochenende-2009'),
      },
      {
        id: 'maijahrmarkt-2009',
        image: '/gallery/2009-maijahrmarkt.jpg',
        title: 'Maijahrmarkt 03.05 - 04.05.',
        paragraphs: [
          'Auf dem Jahrmarkt in Kuppenheim servierte der AC Schlecksl Currywürste, die schon in der kleinen Ausführung XL hießen. Die XXL Currywurst mit Pommes ist nur was für echte Kerle. Acuh wenn der AC Schlecksl ein Hobbyclub ist, sind an Grill und Fritteuse nur Profis am Werk.',
        ],
        photos: entryPhotos('maijahrmarkt-2009'),
      },
      {
        id: 'sasbachwalden-ah-2009',
        image: '/gallery/2009-sasbachwalden.jpg',
        title: 'Spiel gegen Sasbachwalden AH',
        paragraphs: [
          'Nach Diskussionen über den Spieluntergrund haben wir unser erstes Heimspiel seit langem doch auswärts in Sasbachwalden bestritten. Trotz langer Anreise haben wir das Spiel mit 4:1 zu unseren Gunsten entscheiden können und starteten somit mit einem Sieg in die Großfeldsaison 2009.',
        ],
        photos: entryPhotos('sasbachwalden-ah-2009'),
      },
    ],
  },
  {
    year: '2008',
    entries: [
      {
        id: 'herxheim-ah-2008',
        image: '/gallery/2008-herxheim.jpg',
        title: 'Spiel gegen Herxheim AH',
        paragraphs: [
          '2008 spielten wir zum ersten mal gegen die Alten Herren von Herxheim. Das Spiel endete 1:1. Der Abend klang mit pfälzer Gemütlichkeit im Vereinsheim aus.',
        ],
        photos: entryPhotos('herxheim-ah-2008'),
      },
    ],
  },
  {
    year: '2007',
    entries: [
      {
        id: 'eggenstein-2007',
        image: '/gallery/2007-eggenstein.jpg',
        title: 'Spiel gegen CRK Eggenstein',
        paragraphs: [
          'Das Spiel gegen Eggenstein endete 1:3 für den AC Schlecksl. Frank Roth kam hier zum kürzesten Einsatz in der Geschichte des AC Schlecksl. Direkt nach dem einlaufen verdrehte er sich das Knie und mußte wieder vom Platz.',
        ],
        photos: entryPhotos('eggenstein-2007'),
      },
      {
        id: 'sasbachwalden-ah-2007',
        image: '/gallery/2007-sasbachwalden.jpg',
        title: 'Spiel gegen Sasbachwalden AH',
        paragraphs: [
          'Die Alde Gott Arena ist ein beliebtes Pflaster für den AC Schlecksl. Das Spiel gegen die alten Herren aus Sasbachwalden wurde von Jan Stemmle mit einem Solo direkt zu Beginn des Spiels mit 0:1 entschieden.',
        ],
        photos: entryPhotos('sasbachwalden-ah-2007'),
      },
      {
        id: 'stadtfest-kuppenheim-2007',
        image: '/gallery/2007-stadtfest.jpg',
        title: 'Stadtfest Kuppenheim',
        paragraphs: [
          '2007 wurde das Stadtfest in Kuppenheim zum ersten mal gefeiert. Der AC Schlecksl war natürlich mit von der Partie. Im "Diebsloch", den vom AC Schlecksl bewirteten Keller, wurde bis in die frühen Morgenstuden gefeiert als ob es kein morgen gibt.',
        ],
        photos: entryPhotos('stadtfest-kuppenheim-2007'),
      },
    ],
  },
  {
    year: '2006',
    entries: [
      {
        id: 'badenia-cup-pretzschendorf-2006',
        image: '/gallery/2006-pretzschendorf.jpg',
        title: 'Badenia Cup Pretzschendorf',
        paragraphs: [
          'Nachdem es uns 2005 in Dresden und Pretzschendorf so gut gefallen hat wollten wir natürlich im nächsten Jahr wieder hin. Für den Turniersieg hat es leider nicht gereicht aber dafür haben wir jede Menge interessanter Eindrücke sammeln können. Vor allem auf dem Straßenfest Bunte Republik Neustadt haben wir nicht ganz alltägliche Leute getroffen.',
        ],
        photos: entryPhotos('badenia-cup-pretzschendorf-2006'),
      },
    ],
  },
  {
    year: '2005',
    entries: [
      {
        id: 'badeniacup-pretzschendorf-2005',
        image: '/gallery/2005-pretzschendorf.jpg',
        title: 'Badeniacup Pretzschendorf 2005',
        paragraphs: [
          '2005 fuhr zum ersten mal eine Mannschaft des AC Schlecksl in den wilden Osten. Als Rahmenprogramm rund um die Teilnahme am Badeniacup in Pretzschendorf besuchten wir Dresden und setzten uns beim Straßenfest Bunte Republik Neustadt mit den Einheimischen Sitten und Gebräuchen auseinander.',
        ],
        photos: entryPhotos('badeniacup-pretzschendorf-2005'),
      },
      {
        id: 'knoepfle-classics-2005',
        image: '/gallery/2005-knoepfle-classics.jpg',
        title: 'Knoepfle Classics',
        paragraphs: [
          '2005 fand zum letzten mal das Hallenturnier "Knoepfle Classics" statt. Mit einer Materialschlacht aus Hallenturnier, Festzelt und Bands endete die Geschichte des legendären Turniers.',
        ],
        photos: entryPhotos('knoepfle-classics-2005'),
      },
    ],
  },
  {
    year: '2004',
    entries: [
      {
        id: 'knoepfle-classics-2004',
        image: '/gallery/2004-knoepfle-classics.jpg',
        title: 'Knoepfle Classics',
        paragraphs: [
          'Im Jubiläumsjahr 2004 wurde bei den Knoepfle Classics mal wieder alles gegeben. Zum 25-jährigen kamen auch einige Stars auf die Bühne, zum Beispiel Elvis.',
        ],
        photos: entryPhotos('knoepfle-classics-2004'),
      },
    ],
  },
  {
    year: '2002',
    entries: [
      {
        id: 'ausflug-2002',
        image: '/gallery/2002-ausflug.jpg',
        title: 'Ausflug',
        paragraphs: [
          '2002 wurden mal wieder Kind und Kegel zu einem Ausflug eingepackt. Bevor die Familien was zu Essen und zu trinken bekamen mussten die Männer erst Holz mit primitiven Werkzeugen bearbeiten.',
        ],
        photos: entryPhotos('ausflug-2002'),
      },
      {
        id: 'helferfest-2002',
        image: '/gallery/2002-helferfest.jpg',
        title: 'Helferfest',
        paragraphs: [
          'Nach den Strapazen durch die Bewirtung bei verschiedenen Festen gönnen sich die Schlecksler mit einem Helferfest eine Belohnung.',
        ],
        photos: entryPhotos('helferfest-2002'),
      },
    ],
  },
  {
    year: '20. Jahrhundert',
    entries: [
      {
        id: 'fasching-1999',
        image: '/gallery/1999-fasching.jpg',
        title: 'Schmutziger Donnerstag 1999',
        paragraphs: [
          'Traditionell beginnt das AC Schlecksl Jahr mit dem Treffen am schmutzigen Donnerstag. Nachdem man sich bei Franz im Keller vorbereitet hat gehts in die Wörtelhalle. Wie man nach Hause kommt weiß man nur selbst. Machmal weiß man nicht mal das.',
        ],
        photos: entryPhotos('fasching-1999'),
      },
      {
        id: 'alpirsbach',
        image: '/gallery/alpirsbach.jpg',
        title: 'Ausflug nach Alpirsbach',
        paragraphs: [
          'Beim Ausflug nach Alpirsbach wurde eine Glasbläserei besichtigt. Die Bilder sind schon so alt, dass man sie garnicht richtig datieren kann...',
        ],
        photos: entryPhotos('alpirsbach'),
      },
    ],
  },
]

export function findGalleryEntry(id: string): GalleryEntry | undefined {
  return galleryYears.flatMap((group) => group.entries).find((entry) => entry.id === id)
}
