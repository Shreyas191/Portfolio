import React from "react";
import { ExperienceContainer, ExperienceItem } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const experiences = [
  {
    role: "SDE-I",
    company: "Jio Platforms Limited",
    duration: "Jan 2024 - Present",
    description: "Developed the frontend using Angular and the backend with Spring Boot for Jio’s CloudXp project, focusing on creating seamless integration between the two. I designed and implemented RESTful APIs in Spring Boot, ensuring efficient communication between the frontend and backend systems. My work involved optimizing Angular components and state management, significantly enhancing application performance and the overall user experience. Additionally, I utilized Spring Data JPA for efficient database interaction, implemented Spring AOP for logging and transaction management, and leveraged Spring Boot Actuator to monitor and manage application health and metrics."
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
