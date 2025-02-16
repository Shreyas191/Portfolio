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
          I am a Software Developer with a passion for building scalable and high-performing applications. With over a year of experience at Jio Platforms Limited, I specialize in frontend development using Angular, crafting dynamic and responsive user interfaces that enhance user experiences. I focus on developing interactive web applications with clean, maintainable code while seamlessly integrating them with backend services.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>In addition to frontend development, I have hands-on experience in backend development using Java Spring Boot, where I have designed and implemented REST APIs and Microservices Architecture. I have worked on developing secure, efficient, and scalable backend solutions, ensuring smooth communication between services. My ability to work across both frontend and backend technologies enables me to contribute effectively to full-stack development, optimizing performance and maintainability.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          I hold a Bachelor's degree in Computer Engineering (AI & ML Honors), completed in 2023. My technical expertise includes C, C++, Java, Spring Boot, REST APIs, Microservices, HTML, CSS, JavaScript, Bootstrap, Angular, MySQL, and Oracle SQL. Always eager to learn and explore new technologies, I strive to push boundaries and develop impactful software solutions. </p>
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
