import type { Contact } from '@/models/imprint/contact.model'
import type { LiabilitySection } from '@/models/imprint/liability-section.model'

export const contacts: Contact[] = [
  {
    heading: '1. Anbieter',
    name: 'AC Schlecksl',
    representedBy: 'Vertreten durch den 1. Vorsitzenden Franz Ikker',
    addressLines: ['Ortsstr. 8', '76571 Gaggenau'],
    fon: '07222 - 4 76 98',
    fax: '07222 - 94 93 60',
    email: 'franz.ikker@ac-schlecksl.de',
  },
  {
    heading: '2. Verantwortlich für journalistisch-redaktionelle Inhalte (§ 18 Abs. 2 MStV)',
    name: 'Franz Ikker',
    addressLines: ['Ortsstr. 8', '76571 Gaggenau'],
    email: 'franz.ikker@ac-schlecksl.de',
  },
  {
    heading: '3. Realisierung der Seite',
    name: 'Matthias Strolz',
    addressLines: ['Ludwig-Wilhelm-Straße 17', '76131 Karlsruhe'],
    email: 'matthias.strolz@ac-schlecksl.de',
  },
]

export const liabilitySections: LiabilitySection[] = [
  {
    heading: '1. Haftung für Inhalte',
    text: 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG (Digitale-Dienste-Gesetz) für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte können wir dennoch keine Gewähr übernehmen.',
  },
  {
    heading: '2. Haftung für Links',
    text: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
  },
  {
    heading: '3. Urheberrecht',
    text: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
  },
  {
    heading: '4. Datenschutz',
    text: 'Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten beim Besuch dieser Website entnehmen Sie bitte unserer separaten Datenschutzerklärung.',
  },
  {
    heading: '5. Rechtswirksamkeit dieses Haftungsausschlusses',
    text: 'Sollten einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen, bleiben die übrigen Teile dieses Dokuments in ihrem Inhalt und ihrer Gültigkeit davon unberührt.',
  },
]
