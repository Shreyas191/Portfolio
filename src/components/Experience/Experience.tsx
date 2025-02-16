import React from "react";
import { ExperienceContainer, ExperienceItem } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const experiences = [
  {
    role: "SDE-I",
    company: "Jio Platforms Limited",
    duration: "Jan 2024 - Present",
    description: "Developed and maintained backend services using Java and Spring Boot, focusing on building efficient REST APIs and implementing a microservices architecture. Utilized Hibernate ORM and Spring Data JPA for optimal database management, while OpenFeign facilitated smooth communication between services. Integrated Spring Boot Security with OAuth2 to ensure robust authentication and authorization. Regularly diagnosed and fixed bugs to enhance system stability and ensure seamless operation."
  },
  {
    role: "Java Developer",
    company: "Pie Infocom Pvt. Ltd",
    duration: "Nov 2021 - Dec 2021",
    description: "In a focused 45-day period, I gained practical expertise in Java programming by successfully completing a project that applied my newly acquired knowledge. I tackled real-world challenges by utilizing core Java concepts like object-oriented programming, collections, and multithreading. Throughout the project, I provided valuable recommendations for optimization and problem-solving, refining my skills in debugging and performance enhancement. This hands-on experience significantly boosted my confidence in Java development and strengthened my ability to contribute effectively to development teams.",
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
