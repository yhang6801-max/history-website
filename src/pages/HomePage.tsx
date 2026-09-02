import '../App.css'
import { HistoricalPersonCard } from '../components/HistoricalPersonCard'
import { historicalPeople } from '../data/historicalPeople'

export function HomePage() {
  return (
    <main className="home">
      <h1 className="home__title">Historical Figures</h1>

      <section className="people-list" aria-label="Historical figures">
        {historicalPeople.map((person) => (
          <HistoricalPersonCard key={person.id} person={person} />
        ))}
      </section>
    </main>
  )
}
