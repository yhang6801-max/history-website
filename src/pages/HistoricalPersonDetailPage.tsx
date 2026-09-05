import { Link, useParams } from 'react-router'
import { getHistoricalPersonById } from '../data/historicalPeople'
import { getLocalizedPerson } from '../data/personTranslations'
import { useLanguage } from '../i18n/context'
import { NotFoundPage } from './NotFoundPage'
import './pages.css'

export function HistoricalPersonDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { language, t } = useLanguage()
  const original = id ? getHistoricalPersonById(id) : undefined
  if (!original) return <NotFoundPage />
  const person = getLocalizedPerson(original, language)
  const imageAttribution = person.imageAttribution

  return (
    <main className="person-detail">
      <Link className="page-link" to="/">{t.backPeople}</Link>
      {person.isFallback && <p className="translation-notice" role="status">{t.fallback}</p>}
      <article className="person-detail__article">
        <header className="person-detail__card" lang={person.contentLanguage}>
          <img className="person-detail__image" src={person.image} alt={person.name} />
          <div className="person-detail__content">
            <p className="person-detail__lifespan" data-reading-anchor>{person.lifespan}</p>
            <h1 className="person-detail__name" data-reading-anchor>{person.name}</h1>
            <p className="person-detail__summary" data-reading-anchor>{person.summary}</p>
            <a className="page-link person-detail__credits-link" href="#image-credits">{t.imageCredits}</a>
          </div>
        </header>
        <div className="person-detail__body">
          <div className="person-detail__biography" lang={person.contentLanguage}>
            {person.sections.map((section, sectionIndex) => (
              <section className="person-detail__section" key={sectionIndex}>
                <h2 data-reading-anchor>{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} data-reading-anchor>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          <section className="person-detail__timeline">
            <h2 data-reading-anchor>{t.timeline}</h2>
            <ol lang={person.contentLanguage}>
              {person.timeline.map((entry, index) => (
                <li key={index} data-reading-anchor>
                  <span className="person-detail__timeline-date">{entry.date}</span>
                  <span>{entry.event}</span>
                </li>
              ))}
            </ol>
          </section>
          <section className="person-detail__sources">
            <h2 data-reading-anchor>{t.sources}</h2>
            <p className="source-note" data-reading-anchor>{t.sourcesNote}</p>
            <ul lang="en">
              {person.sources.map((source) => (
                <li key={source.url} data-reading-anchor>
                  <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
                  <span> — {source.publisher}</span>
                </li>
              ))}
            </ul>
          </section>
          {!imageAttribution && person.imageNotes && (
            <section id="image-credits" className="person-detail__image-attribution">
              <h2 data-reading-anchor>{t.imageCredits}</h2>
              <p lang={person.imageNotesLanguage} data-reading-anchor>{person.imageNotes}</p>
              <p lang={person.imageChangesLanguage} data-reading-anchor>{person.imageChanges}</p>
            </section>
          )}
          {imageAttribution && (
            <section id="image-credits" className="person-detail__image-attribution">
              <h2 data-reading-anchor>{t.imageCredits}</h2>
              <p data-reading-anchor>{t.creditsNote}</p>
              {imageAttribution.title && <p lang="en" data-reading-anchor>{imageAttribution.title}</p>}
              <p lang="en" data-reading-anchor>
                <a lang={language} href={imageAttribution.sourceUrl} target="_blank" rel="noreferrer">{t.imageSource}</a>
                {' · '}
                {imageAttribution.authorUrl ? (
                  <a href={imageAttribution.authorUrl} target="_blank" rel="noreferrer">{imageAttribution.author}</a>
                ) : imageAttribution.author}
                {' · '}
                <a href={imageAttribution.licenseUrl} target="_blank" rel="noreferrer">{imageAttribution.licenseName}</a>
              </p>
              {imageAttribution.credit && <p lang="en" data-reading-anchor>{imageAttribution.credit}</p>}
              {imageAttribution.licenseName.includes('CC BY') && <p data-reading-anchor>{t.imageAdaptationLicense}</p>}
              {person.imageNotes && <p lang={person.imageNotesLanguage} data-reading-anchor>{person.imageNotes}</p>}
              <p lang={person.imageChangesLanguage} data-reading-anchor>{person.imageChanges}</p>
            </section>
          )}
        </div>
      </article>
    </main>
  )
}
