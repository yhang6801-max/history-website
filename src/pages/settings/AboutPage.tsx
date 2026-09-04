import chatgptAvatar from '../../assets/developers/chatgpt.webp'
import kerwinAvatar from '../../assets/developers/kerwin.webp'
import yhangAvatar from '../../assets/developers/yhang.webp'

export function AboutPage() {
  return (
    <>
      <h1 className="settings__title" tabIndex={-1}>Behind the Project</h1>
      <div className="project-team">
        <article className="project-member" aria-labelledby="chatgpt-name">
          <img src={chatgptAvatar} alt="ChatGPT avatar" width="40" height="40" />
          <header>
            <h2 id="chatgpt-name">ChatGPT 5.6-Sol</h2>
            <p className="project-member__role">AI Development Partner</p>
          </header>
          <div className="project-member__description">
            <p>The main technical partner in turning ideas into reality. From discussing requirements and writing code to troubleshooting problems, it helped me build my first web project step by step. Thank you for helping turn an idea into a website people can explore and enjoy.</p>
          </div>
        </article>
        <article className="project-member" aria-labelledby="kerwin-name">
          <img src={kerwinAvatar} alt="Kerwin’s dog avatar" width="40" height="40" />
          <header>
            <h2 id="kerwin-name">Kerwin</h2>
            <p className="project-member__role">Teacher &amp; Project Supporter</p>
          </header>
          <div className="project-member__description">
            <p>A skilled programmer and a generous teacher. Thank you, Kerwin, for providing access to AI tools and giving me the freedom to learn, experiment, and bring this project to life. Your support felt like giving someone who had just learned to walk the chance to run. I am deeply grateful for your generosity and encouragement.</p>
          </div>
        </article>
        <article className="project-member" aria-labelledby="yhang-name">
          <img src={yhangAvatar} alt="yhang’s pixel avatar" width="40" height="40" />
          <header>
            <h2 id="yhang-name">yhang</h2>
            <p className="project-member__role">Project Creator &amp; Developer</p>
          </header>
          <div className="project-member__description">
            <p>Responsible for the ideas, the direction, the final checks, and repeatedly asking, “Could we tweak this a little more?” With the help of AI, I am learning how to take a website from an initial idea to something people can actually use.</p>
            <p>Also responsible for giving Kerwin’s usage quota quite a workout. 😂</p>
          </div>
        </article>
      </div>
      <ul className="settings__project-links">
        <li><a href="https://github.com/yhang6801-max">Contact yhang on GitHub</a></li>
        <li><a href="https://github.com/yhang6801-max/history-website">View the project repository</a></li>
      </ul>
    </>
  )
}
