import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageProvider'
import { LanguageBar } from './components/LanguageSwitcher'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <LanguageBar />
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
