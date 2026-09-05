import { useLanguage } from '../i18n/context'

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  return (
    <div className="language-switcher" role="group" aria-label={t.language}>
      <span className="language-switcher__label">{t.language}</span>
      <button type="button" lang="en" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>English</button>
      <button type="button" lang="zh-CN" aria-pressed={language === 'zh-CN'} onClick={() => setLanguage('zh-CN')}>简体中文</button>
    </div>
  )
}

export function LanguageBar() {
  const { t, storageError } = useLanguage()
  return (
    <div className="language-bar">
      <LanguageSwitcher />
      {storageError && <p className="language-storage-error" role="status">{t.storageError}</p>}
    </div>
  )
}
