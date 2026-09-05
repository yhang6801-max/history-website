import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext } from './context'
import { languageStorageKey, readLanguage } from './language'
import type { Language } from './language'
import { messages } from './messages'

type ReadingPosition = { element: HTMLElement; fraction: number; viewportTop: number }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(readLanguage)
  const [storageError, setStorageError] = useState(false)
  const position = useRef<ReadingPosition | null>(null)

  function changeLanguage(next: Language) {
    position.current = null
    // Preserve the paragraph/row and relative position as preceding text reflows.
    const readingTop = (document.querySelector('.language-bar')?.getBoundingClientRect().bottom ?? 0) + 12
    const anchor = Array.from(document.querySelectorAll<HTMLElement>('[data-reading-anchor]'))
      .find((element) => element.getBoundingClientRect().bottom > readingTop)
    if (anchor && window.scrollY > 0) {
      const rect = anchor.getBoundingClientRect()
      position.current = {
        element: anchor,
        fraction: Math.max(0, (readingTop - rect.top) / rect.height),
        viewportTop: Math.max(readingTop, rect.top),
      }
    }
    updateLanguage(next)
  }

  function setLanguage(next: Language) {
    if (next !== language) changeLanguage(next)
    try {
      localStorage.setItem(languageStorageKey, next)
      setStorageError(false)
    } catch {
      setStorageError(true)
    }
  }

  useLayoutEffect(() => {
    document.documentElement.lang = language
    document.title = messages[language].siteTitle
    const saved = position.current
    if (saved?.element.isConnected) {
      const rect = saved.element.getBoundingClientRect()
      window.scrollBy({ top: rect.top + rect.height * saved.fraction - saved.viewportTop, behavior: 'instant' })
    }
    position.current = null
  }, [language])

  useEffect(() => {
    function sync(event: StorageEvent) {
      if (event.key === languageStorageKey || event.key === null) changeLanguage(readLanguage())
    }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: messages[language], storageError }}>
      {children}
    </LanguageContext.Provider>
  )
}
