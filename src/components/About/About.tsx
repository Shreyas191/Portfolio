import { Container } from "./styles";
import shreyaskaldate1 from "../../assets/shreyaskaldate1.jpg";
import javaIcon from "../../assets/java-icon.svg"
import springbootIcon from "../../assets/spring-boot.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
// import jsIcon from "../../assets/js-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg"
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import pythonIcon from "../../assets/python-logo.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          I am a Software Engineer with 1+ year of experience, currently working at Jio Platforms Limited. My primary focus is backend development, where I specialize in Java, Spring Boot, and Microservices. I have hands-on experience in designing and implementing REST APIs, which are essential for scalable and efficient backend systems. My work at Jio involves applying these technologies to build robust services that meet high-performance standards.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I graduated with a Bachelor's degree in Computer Engineering in 2023, where I specialized in Artificial Intelligence (AI) and Machine Learning (ML). This academic foundation has provided me with a strong understanding of data structures, algorithms, and problem-solving techniques, which I apply in my day-to-day work. My coursework in AI and ML allowed me to explore innovative technologies, equipping me with the knowledge needed to work on complex, data-driven projects.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          My technical skill set includes proficiency in languages such as C, C++, Java, and tools like Spring Boot, Microservices, REST APIs, MySQL, and Oracle SQL. I am passionate about leveraging these skills to build efficient backend systems and solve challenging problems. Through my work and continuous learning, I aim to stay updated with industry trends and contribute to the development of high-quality software solutions.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={javaIcon} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={springbootIcon} alt="springboot" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={mysqlIcon} alt="mysql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={pythonIcon} alt="Python"/>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={shreyaskaldate1} alt="Shreyas Kaldate" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
