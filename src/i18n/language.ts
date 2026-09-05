export type Language = 'en' | 'zh-CN'

export const languageStorageKey = 'history-website.language'

export function readLanguage(): Language {
  try {
    return localStorage.getItem(languageStorageKey) === 'zh-CN' ? 'zh-CN' : 'en'
  } catch {
    return 'en'
  }
}
