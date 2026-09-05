import { Link } from 'react-router'
import '../App.css'
import { HistoricalPersonCard } from '../components/HistoricalPersonCard'
import { historicalPeople } from '../data/historicalPeople'
import { useLanguage } from '../i18n/context'

export function HomePage() {
  const { t } = useLanguage()
  return (
    <main className="home">
      <header className="home__header">
        <h1 className="home__title" data-reading-anchor>{t.siteTitle}</h1>
        <Link className="home__settings" to="/settings">
          <svg width="20" height="20" aria-hidden="true" focusable="false">
            <use href="/icons.svg#settings-icon" />
          </svg>
          {t.settings}
        </Link>
      </header>
      <section className="people-list" aria-label={t.siteTitle}>
        {historicalPeople.map((person) => (
          <HistoricalPersonCard key={person.id} person={person} />
        ))}
      </section>
    </main>
  )
}
