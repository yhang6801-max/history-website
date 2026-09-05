import chatgptAvatar from '../../assets/developers/chatgpt.webp'
import kerwinAvatar from '../../assets/developers/kerwin.webp'
import yhangAvatar from '../../assets/developers/yhang.webp'
import { useLanguage } from '../../i18n/context'

const members = [
  { id: 'chatgpt', name: 'ChatGPT 5.6-Sol', image: chatgptAvatar },
  { id: 'kerwin', name: 'Kerwin', image: kerwinAvatar },
  { id: 'yhang', name: 'yhang', image: yhangAvatar },
]

export function AboutPage() {
  const { t } = useLanguage()
  return (
    <>
      <h1 className="settings__title" tabIndex={-1} data-reading-anchor>{t.aboutTitle}</h1>
      <div className="project-team">
        {members.map((member, index) => (
          <article className="project-member" aria-labelledby={`${member.id}-name`} key={member.id}>
            <img src={member.image} alt={t.team[index].alt} width="40" height="40" />
            <header data-reading-anchor>
              <h2 id={`${member.id}-name`}>{member.name}</h2>
              <p className="project-member__role">{t.team[index].role}</p>
            </header>
            <div className="project-member__description">
              {t.team[index].paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex} data-reading-anchor>{paragraph}</p>)}
            </div>
          </article>
        ))}
      </div>
      <ul className="settings__project-links">
        <li data-reading-anchor><a href="https://github.com/yhang6801-max">{t.contact}</a></li>
        <li data-reading-anchor><a href="https://github.com/yhang6801-max/history-website">{t.repository}</a></li>
      </ul>
    </>
  )
}
