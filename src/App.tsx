import { useLayoutEffect, useRef } from 'react'
import { Route, Routes, useLocation, useNavigationType } from 'react-router'
import { HistoricalPersonDetailPage } from './pages/HistoricalPersonDetailPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
