import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Satish</span>
        <span>Gupta</span>
      </a>
      <div>
        <p>
          This website was made with <img src={reactIcon} alt="React" /> is very
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/satish-gupta-6ba07abb/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/sudo-satish"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://discord.com/users/satishkumr001#7539"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}
