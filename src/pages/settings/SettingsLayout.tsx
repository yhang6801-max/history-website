import { useLayoutEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigationType } from 'react-router'
import './settings.css'

export function SettingsLayout() {
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
          <span aria-hidden="true">←</span> Back to Home
        </Link>
        <nav aria-label="Settings">
          <ul className="settings__navigation">
            <li><NavLink to="/settings/language">Language</NavLink></li>
            <li><NavLink to="/settings/copyright">Copyright</NavLink></li>
            <li><NavLink to="/settings/about">About</NavLink></li>
          </ul>
        </nav>
      </aside>
      <main className="settings__content" ref={contentRef}>
        <Outlet />
      </main>
    </div>
  )
}
