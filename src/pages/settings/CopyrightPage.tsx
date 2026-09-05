import { useLanguage } from '../../i18n/context'

export function CopyrightPage() {
  const { t, language } = useLanguage()
  return (
    <>
      <h1 className="settings__title" tabIndex={-1} data-reading-anchor>{t.copyrightTitle}</h1>
      <div className="settings__prose">
        <p data-reading-anchor>{t.copyrightIntro}</p>
        <p data-reading-anchor>{t.copyrightBiography} <a href="https://github.com/yhang6801-max">GitHub</a>{language === 'en' ? '.' : '。'}</p>
        <p data-reading-anchor>{t.copyrightPortraits}</p>
        <p data-reading-anchor>{t.copyrightAvatars}</p>
        <p data-reading-anchor>{t.copyrightContactBefore} <a href="https://github.com/yhang6801-max">GitHub</a>{language === 'en' ? ' ' : ''}{t.copyrightContactAfter}</p>
      </div>
    </>
  )
}
