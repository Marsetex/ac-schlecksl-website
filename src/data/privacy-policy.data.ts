import type { ResponsibleParty } from '@/models/privacy/responsible-party.model'
import type { PrivacySection } from '@/models/privacy/privacy-section.model'

export const responsibleParty: ResponsibleParty = {
  name: 'Franz Ikker',
  addressLines: ['Ortsstr. 8', '76571 Gaggenau'],
  fon: '07222 - 4 76 98',
  email: 'franz.ikker@ac-schlecksl.de',
}

export const privacySections: PrivacySection[] = [
  {
    heading: '1. Verantwortlicher',
    paragraphs: [
      'Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist die oben genannte Person.',
    ],
  },
  {
    heading: '2. Ihre Rechte als betroffene Person',
    paragraphs: [
      'Ihnen stehen bezüglich Ihrer bei uns gespeicherten personenbezogenen Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie Datenübertragbarkeit zu. Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.',
    ],
  },
  {
    heading: '3. Datenerfassung beim Besuch dieser Website',
    paragraphs: [
      'Beim Aufruf dieser Website erhebt unser Hosting-Anbieter STRATO automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser übermittelt. Dazu gehören Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und nach sieben Tagen automatisch gelöscht. Die Erfassung erfolgt zur Gewährleistung eines störungsfreien und sicheren Betriebs der Website (Art. 6 Abs. 1 lit. f DSGVO).',
    ],
  },
  {
    heading: '4. Hosting',
    paragraphs: [
      'Diese Website wird bei der STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin, gehostet. Mit STRATO besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO, der sicherstellt, dass STRATO die personenbezogenen Daten der Besucher dieser Website nur nach unseren Weisungen und im Einklang mit der DSGVO verarbeitet.',
    ],
  },
  {
    heading: '5. Cookies',
    paragraphs: ['Diese Website verwendet keine Cookies.'],
  },
  {
    heading: '6. Analyse-Tools und Tracking',
    paragraphs: [
      'Wir setzen keine Analyse- oder Tracking-Tools ein. Es findet keine Auswertung Ihres Nutzerverhaltens auf dieser Website statt.',
    ],
  },
  {
    heading: '7. Kontaktaufnahme per E-Mail',
    paragraphs: [
      'Wenn Sie uns per E-Mail kontaktieren, werden Ihre Absenderadresse sowie ggf. weitere in der E-Mail enthaltene personenbezogene Daten ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage gespeichert. Diese Daten löschen wir, sobald die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).',
    ],
  },
  {
    heading: '8. Fotos und Bildmaterial',
    paragraphs: [
      'Auf dieser Website veröffentlichen wir Foto- und Bildmaterial von Vereinsveranstaltungen, Spielen, Trainings und Mannschaften, auf dem einzelne Personen erkennbar sein können. Die Veröffentlichung erfolgt entweder auf Grundlage einer Einwilligung der abgebildeten Person (Art. 6 Abs. 1 lit. a DSGVO) oder, insbesondere bei Mannschafts- und Veranstaltungsaufnahmen im Rahmen der öffentlichen Vereins- und Sportberichterstattung, auf Grundlage unseres berechtigten Interesses an der Darstellung des Vereinslebens (Art. 6 Abs. 1 lit. f DSGVO) sowie § 23 Abs. 1 Nr. 3 KUG.',
      'Bei Aufnahmen von Kindern und Jugendlichen, etwa aus unseren Jugendmannschaften, holen wir vorab die Einwilligung der Erziehungsberechtigten ein, bevor entsprechende Fotos veröffentlicht werden.',
      'Wenn Sie oder Ihr Kind auf einem veröffentlichten Foto zu erkennen sind und mit der Veröffentlichung nicht (mehr) einverstanden sind, können Sie der Nutzung jederzeit formlos widersprechen bzw. eine erteilte Einwilligung widerrufen. Wenden Sie sich hierfür an die unter "Verantwortlicher" genannte Kontaktadresse; wir entfernen das betreffende Bild dann zeitnah von der Website.',
    ],
  },
  {
    heading: '9. Externe Links',
    paragraphs: [
      'Diese Website enthält Verweise auf externe Webseiten Dritter, zum Beispiel Google Maps, auf deren Inhalte wir keinen Einfluss haben. Beim Anklicken eines solchen Links verlassen Sie unser Angebot; für die dortige Verarbeitung personenbezogener Daten gelten die Datenschutzhinweise des jeweiligen Anbieters.',
    ],
  },
  {
    heading: '10. SSL-/TLS-Verschlüsselung',
    paragraphs: [
      'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile Ihres Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
    ],
  },
  {
    heading: '11. Änderung dieser Datenschutzerklärung',
    paragraphs: [
      'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.',
    ],
  },
]
