import React from "react";
import { ExperienceContainer, ExperienceItem } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const experiences = [
  {
    role: "SDE-I",
    company: "Jio Platforms Limited",
    duration: "Jan 2024 - Present",
    description: [
      "Developed frontend using Angular and backend with Spring Boot for Jio’s CloudXp project.",
      "Designed and implemented RESTful APIs ensuring efficient communication.",
      "Optimized Angular components and state management to enhance performance.",
      "Utilized Spring Data JPA, Spring AOP for logging, and Spring Boot Actuator for monitoring.",
    ],
  },
  {
    role: "Java Developer",
    company: "Pie Infocom Pvt. Ltd",
    duration: "Nov 2021 - Dec 2021",
    description: [
      "Gained practical expertise in Java programming through real-world projects.",
      "Worked with core Java concepts like OOP, collections, and multithreading.",
      "Provided optimization and problem-solving recommendations during development.",
      "Refined debugging and performance enhancement skills.",
    ],
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
