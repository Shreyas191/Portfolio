import React from "react";
import { ExperienceContainer, ExperienceItem } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const experiences = [
  {
    role: "Software Engineer",
    company: "Jio Platforms Limited",
    duration: "Jan 2024 - Present",
    description: "Developed and maintained backend services using Java and Spring Boot, focusing on building efficient REST APIs and implementing a microservices architecture. Utilized Hibernate ORM and Spring Data JPA for optimal database management, while OpenFeign facilitated smooth communication between services. Integrated Spring Boot Security with OAuth2 to ensure robust authentication and authorization. Regularly diagnosed and fixed bugs to enhance system stability and ensure seamless operation."
  },
  {
    role: "Java Developer",
    company: "Pie Infocom Pvt. Ltd",
    duration: "Nov 2021 - Dec 2021",
    description: "In addition to the project completion, User actively participated in the design and development phases, identifying and resolving key issues in the application. They demonstrated a solid understanding of core Java concepts such as object-oriented programming, data structures, and algorithms, and effectively applied these principles in real-world scenarios. By leveraging industry-standard tools and frameworks, User contributed to the project's overall success and ensured a high-quality, functional outcome. Through this experience, they developed problem-solving strategies that allowed them to optimize performance and enhance the application's scalability.",
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
            <p>{exp.description}</p>
          </ExperienceItem>
        </ScrollAnimation>
      ))}
    </ExperienceContainer>
  );
}
