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

      <article className="person-detail__article">
        <header className="person-detail__card">
          <img
            className="person-detail__image"
            src={person.image}
            alt={person.name}
          />

          <div className="person-detail__content">
            <p className="person-detail__lifespan">{person.lifespan}</p>
            <h1 className="person-detail__name">{person.name}</h1>
            <p className="person-detail__summary">{person.summary}</p>
          </div>
        </header>

        <div className="person-detail__body">
          <div className="person-detail__biography">
            {person.sections.map((section) => (
              <section
                className="person-detail__section"
                key={section.title}
              >
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <section className="person-detail__timeline">
            <h2>Key timeline</h2>
            <ol>
              {person.timeline.map((entry) => (
                <li key={entry.date}>
                  <span className="person-detail__timeline-date">
                    {entry.date}
                  </span>
                  <span>{entry.event}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="person-detail__sources">
            <h2>Sources and further reading</h2>
            <ul>
              {person.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.title}
                  </a>
                  <span> — {source.publisher}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}
