import { Link } from 'react-router'
import './pages.css'

export function NotFoundPage() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__message">
        The requested page or historical figure could not be found.
      </p>
      <Link className="page-link" to="/">
        Return to historical figures
      </Link>
    </main>
  )
}
