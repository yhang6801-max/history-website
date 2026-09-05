import { createContext, useContext } from 'react'
import type { Language } from './language'
import type { Messages } from './messages'

export const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
  t: Messages
  storageError: boolean
} | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('LanguageProvider is required')
  return context
}
