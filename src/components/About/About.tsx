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
          I'm a passionate and results-driven Software Engineer with experience in building scalable backend systems and dynamic frontend applications. I specialize in Java, Spring Boot, Angular, and modern web technologies, with a strong foundation in microservices architecture, RESTful APIs, and responsive UI development. During my time as a Java Developer Intern, I worked on an Online Cosmetic Store project where I developed and optimized backend services using Spring Boot, Spring Data JPA, Hibernate, and MySQL, leading to a 20% improvement in system efficiency. I also streamlined development, testing, and deployment processes by leveraging tools like Postman, Swagger, and Docker.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>Currently, I am working as an SDE-I at Jio Platforms, where I contribute to the Domain Analytics module of the CloudXp platform. I design and develop data-driven UI dashboards using Angular, HTML, CSS, and JavaScript, integrating APIs and visualizing cloud usage data to support business insights. I collaborate closely with cross-functional teams in an Agile environment, utilizing Git and Azure DevOps for efficient development workflows. Eager to continuously learn and grow, I am particularly passionate about building full-stack applications and solving real-world problems with clean, maintainable code.</p>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          I hold a Bachelor's degree in Computer Engineering (AI & ML Honors), completed in 2023. My technical expertise includes C, C++, Java, Spring Boot, REST APIs, Microservices, HTML, CSS, JavaScript, Bootstrap, Angular, MySQL, and Oracle SQL. Always eager to learn and explore new technologies, I strive to push boundaries and develop impactful software solutions. </p>
        </ScrollAnimation> */}
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
