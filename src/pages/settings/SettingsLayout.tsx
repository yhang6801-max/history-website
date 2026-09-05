import { useLayoutEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigationType } from 'react-router'
import './settings.css'
import { useLanguage } from '../../i18n/context'

export function SettingsLayout() {
  const { t } = useLanguage()
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
  const contentRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    // Announce the destination after a link activation without changing
    // browser history restoration or fragment navigation.
    if (navigationType !== 'POP' && !hash) {
      contentRef.current?.querySelector('h1')?.focus({ preventScroll: true })
    }
  }, [pathname, hash, navigationType])

  return (
    <div className="settings">
      <aside className="settings__sidebar">
        <Link className="settings__back" to="/">
          <span aria-hidden="true">←</span> {t.backHome}
        </Link>
        <nav aria-label={t.settings}>
          <ul className="settings__navigation">
            <li><NavLink to="/settings/language">{t.language}</NavLink></li>
            <li><NavLink to="/settings/copyright">{t.copyright}</NavLink></li>
            <li><NavLink to="/settings/about">{t.about}</NavLink></li>
          </ul>
        </nav>
      </aside>
      <main className="settings__content" ref={contentRef}>
        <Outlet />
      </main>
    </div>
  )
}
