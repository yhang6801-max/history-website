import { Route, Routes } from 'react-router'
import { HistoricalPersonDetailPage } from './pages/HistoricalPersonDetailPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/people/:id" element={<HistoricalPersonDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
