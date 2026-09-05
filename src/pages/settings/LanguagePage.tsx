import { LanguageSwitcher } from '../../components/LanguageSwitcher'
import { useLanguage } from '../../i18n/context'

export function LanguagePage() {
  const { t } = useLanguage()
  return (
    <>
      <h1 className="settings__title" tabIndex={-1} data-reading-anchor>{t.language}</h1>
      <p className="settings__prose" data-reading-anchor>{t.languageDescription}</p>
      <LanguageSwitcher />
      <p className="settings__prose" data-reading-anchor>{t.pilotNote}</p>
    </>
  )
}
