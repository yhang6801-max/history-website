import { useLayoutEffect, useRef } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigationType } from 'react-router'
import { HistoricalPersonDetailPage } from './pages/HistoricalPersonDetailPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

import { SettingsLayout } from './pages/settings/SettingsLayout'
import { AboutPage } from './pages/settings/AboutPage'
import { CopyrightPage } from './pages/settings/CopyrightPage'
import { LanguagePage } from './pages/settings/LanguagePage'

function App() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
  const previousPathname = useRef(pathname)

  useLayoutEffect(() => {
    const pathnameChanged = previousPathname.current !== pathname
    previousPathname.current = pathname

    // Leave history restoration and same-page anchors to the browser.
    if (pathnameChanged && navigationType !== 'POP' && !hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash, navigationType])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/people/:id" element={<HistoricalPersonDetailPage />} />
      <Route path="/settings" element={<SettingsLayout />}>
        <Route index element={<Navigate to="about" replace />} />
        <Route path="language" element={<LanguagePage />} />
        <Route path="copyright" element={<CopyrightPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
