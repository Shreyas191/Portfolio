import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Shreyas191/microservices" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div> 
            </header>
            <div className="body">
              <h3>Online Banking Application</h3>
              <p> I developed an Online Banking Application using microservices architecture with Java and Spring Boot, implementing secure authentication with OAuth2, fault tolerance using Resilience4J, and event-driven communication with RabbitMQ and Kafka, ensuring scalability and resilience with Docker, Kubernetes, and monitoring tools like Prometheus and Grafana. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Java</li> <li>Spring Boot</li> <li>Microservices</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Shreyas191/E-Commerce-APIs" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Discount Coupon APIs</h3>
              <p>
              I developed APIs for an Online Shopping Portal using Java and Spring Boot, enabling seamless functionalities such as product browsing, cart management, order processing, and user authentication. These APIs were designed with RESTful principles to ensure scalability, efficiency, and ease of integration, utilizing Hibernate and Spring Data JPA for smooth database interactions and secure transactions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Spring Boot</li>
                <li>REST APIs</li>
                <li>Rabbit MQ</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Shreyas191/Smart-Contact-Manager" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Smart Contact Manager</h3>
              <p>
              The Smart Contact Manager is a web-based application developed using Java with Spring Boot, React, and Thymeleaf. It allows users to manage their personal contacts efficiently through a user-friendly interface, providing features for adding, updating, deleting, and viewing contact details.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Spring Boot</li>
                <li>React JS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Shreyas191/Smart-Irrigation-and-Worm-Detection" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Smart Irrigation and Worm Detection</h3>
              <p>The Smart Irrigation and Worm Detection System is a cutting-edge solution aimed at optimizing agricultural practices. This project combines modern technology with smart devices to ensure that crops receive the optimal amount of water and are protected from pest threats, like worms, in real-time. The system uses sensors, automated irrigation control, and machine learning to make decisions based on environmental conditions and pest data.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>CNN</li>
                <li>Pandas</li>
                <li>IoT</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Shreyas191/Gym-Portal" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Online Gym Portal</h3>
              <p>An Online Gym Portal is a digital platform designed to provide users with the ability to access fitness-related services, resources, and tools remotely. This system allows users to engage with personalized fitness plans, workout routines, track their progress, and even participate in live or recorded workout sessions from the comfort of their home. The online gym portal serves both fitness enthusiasts and trainers, offering a comprehensive suite of features to support individual or group fitness goals.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>Spring Boot</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}