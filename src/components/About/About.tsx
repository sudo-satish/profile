import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import dockerIcon from "../../assets/docker.svg";
import ScrollAnimation from "react-animate-on-scroll";

const skills = [
  {
    icon: reactIcon,
    title: 'React'
  },
  {
    icon: dockerIcon,
    title: 'Docker'
  },
  {
    icon: jsIcon,
    title: 'JavaScript'
  },
  {
    icon: nodeIcon,
    title: 'Node'
  },
  {
    icon: typescriptIcon,
    title: 'Typescript'
  },
  {
    icon: htmlIcon,
    title: 'Html'
  },
];
export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>My name is Satish Gupta, I'm a software engineer with a great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. Improved my skills as a Front-End and Back-End developer.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>I develop websites and applications using NodeJs, ReactJs, Docker, Kubernetes, Postgres and MongoDB. I am familiar with developing application with typescript. I work with cutting edge technologies</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        
        <div className="hard-skills">
          {
            skills.map(({title, icon}, index) => (
              <div className="hability" key={title}>
                <ScrollAnimation animateIn="fadeInUp" delay={(index + 1) * 100}>
                  <img src={icon} alt={title} />
                </ScrollAnimation>
              </div>
            ))
          }
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src="https://portfolio-joaotulio.vercel.app/img/foto_antiga.jpg" alt="Satish Gupta" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
