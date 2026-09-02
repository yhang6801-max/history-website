import './HistoricalPersonCard.css'
import type { HistoricalPerson } from '../types/historicalPerson'

interface HistoricalPersonCardProps {
  person: HistoricalPerson
}

export function HistoricalPersonCard({ person }: HistoricalPersonCardProps) {
  return (
    <article className="person-card">
      <img
        className="person-card__image"
        src={person.image}
        alt={person.name}
      />
      <h2 className="person-card__name">{person.name}</h2>
    </article>
  )
}
