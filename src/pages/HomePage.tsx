import { Link } from 'react-router'
import '../App.css'
import { HistoricalPersonCard } from '../components/HistoricalPersonCard'
import { historicalPeople } from '../data/historicalPeople'

export function HomePage() {
  return (
    <main className="home">
      <header className="home__header">
        <h1 className="home__title">Historical Figures</h1>
        <Link className="home__settings" to="/settings">
          <svg width="20" height="20" aria-hidden="true" focusable="false">
            <use href="/icons.svg#settings-icon" />
          </svg>
          Settings
        </Link>
      </header>

      <section className="people-list" aria-label="Historical figures">
        {historicalPeople.map((person) => (
          <HistoricalPersonCard key={person.id} person={person} />
        ))}
      </section>
    </main>
  )
}
