import { Link, useParams } from 'react-router'
import { getHistoricalPersonById } from '../data/historicalPeople'
import { NotFoundPage } from './NotFoundPage'
import './pages.css'

export function HistoricalPersonDetailPage() {
  const { id } = useParams<{ id: string }>()
  const person = id ? getHistoricalPersonById(id) : undefined

  if (!person) {
    return <NotFoundPage />
  }

  return (
    <main className="person-detail">
      <Link className="page-link" to="/">
        Back to historical figures
      </Link>

      <article className="person-detail__card">
        <img
          className="person-detail__image"
          src={person.image}
          alt={person.name}
        />

        <div className="person-detail__content">
          <h1 className="person-detail__name">{person.name}</h1>
          <p className="person-detail__summary">{person.summary}</p>
          <p className="person-detail__description">{person.description}</p>
        </div>
      </article>
    </main>
  )
}
