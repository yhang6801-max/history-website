import { Link } from 'react-router'
import { useLanguage } from '../i18n/context'
import './pages.css'

export function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <main className="not-found">
      <h1 className="not-found__title" data-reading-anchor>{t.notFoundTitle}</h1>
      <p className="not-found__message" data-reading-anchor>{t.notFoundMessage}</p>
      <Link className="page-link" to="/">{t.returnPeople}</Link>
    </main>
  )
}
