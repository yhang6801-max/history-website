import { Link } from 'react-router'
import './HistoricalPersonCard.css'
import type { HistoricalPerson } from '../types/historicalPerson'
import { getLocalizedPerson } from '../data/personTranslations'
import { useLanguage } from '../i18n/context'

interface HistoricalPersonCardProps {
  person: HistoricalPerson
  eager?: boolean
}

export function HistoricalPersonCard({ person: original, eager = false }: HistoricalPersonCardProps) {
  const { language, t } = useLanguage()
  const person = getLocalizedPerson(original, language)
  return (
    <Link
      className="person-card-link"
      to={`/people/${person.id}`}
      aria-label={`${t.viewPerson} ${person.name}${person.isFallback ? ` — ${t.fallback}` : ''}`}
      data-reading-anchor
    >
      <article className="person-card">
        <img
          className="person-card__image"
          src={person.image}
          alt={person.name}
          lang={person.contentLanguage}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
        />
        <h2 className="person-card__name" lang={person.contentLanguage}>{person.name}</h2>
        {person.isFallback && <p className="translation-notice person-card__notice">{t.fallback}</p>}
      </article>
    </Link>
  )
}
