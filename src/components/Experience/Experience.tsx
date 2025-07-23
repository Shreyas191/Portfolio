import React from "react";
import { ExperienceContainer, ExperienceItem } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const experiences = [
  {
    role: "SDE-I",
    company: "Jio Platforms Limited",
    duration: "Jan 2024 - July 2025",
    description: [
      "* Contributed to the Domain Analytics module of the Jio CloudXp platform, building interactive dashboards to visualize cloud resource usage and performance insights.",
      "* Developed dynamic, responsive front-end interfaces using Angular, HTML5, CSS3, and JavaScript, improving usability and engagement.",
      "* Built modular Angular components, services, and custom pipes, following clean architecture and component-based design principles.",
      "* Integrated RESTful APIs using Angular HttpClient and handled asynchronous data streams with RxJS for real-time analytics.",
      "* Used Git for version control and collaborated with team members through Azure DevOps for task tracking, code reviews, and sprint planning.",
      "* Participated in Agile ceremonies, working closely with cross-functional teams to ensure timely delivery and quality of analytics features."
    ]
    ,
  },
  {
    role: "Java Developer Intern",
    company: "Pie Infocom Pvt. Ltd",
    duration: "Nov 2021 - Dec 2021",
    description: [
      "* Developed and deployed RESTful APIs using Spring Boot, enabling efficient communication between microservices.",
      "* Implemented a microservices architecture with Spring Data JPA, Hibernate, and MySQL, ensuring scalable and modular service design.",
      "* Used Postman for API testing and Swagger for auto-generating interactive API documentation.",
      "* Containerized services using Docker, ensuring consistent environments and simplifying deployment workflows.",
      "* Followed SOLID principles and clean architecture practices, using service and repository layers for maintainability.",
      "* Optimized backend logic and database queries, leading to a 20% increase in system efficiency and reduced response time."
    ]
    ,
  },
];

export function ExperienceSection() {
  return (
    <ExperienceContainer id="experience">
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <h2>Experience</h2>
      </ScrollAnimation>

      {experiences.map((exp, index) => (
        <ScrollAnimation
          animateIn={index % 2 === 0 ? "fadeInUp" : "fadeInDown"}
          delay={0.4 + index * 0.2 * 1000}
          key={index}
        >
          <ExperienceItem index={index}>
            <h3>
              {exp.role} <span>@ {exp.company}</span>
            </h3>
            <h4>{exp.duration}</h4>
            <ul>
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </ExperienceItem>
        </ScrollAnimation>
      ))}
    </ExperienceContainer>
  );
}
