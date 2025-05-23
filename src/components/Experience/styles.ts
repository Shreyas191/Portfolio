import styled, { keyframes } from "styled-components";

// Fade-in animation from the top
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Fade-in animation from the bottom
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ExperienceContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #ecf0f1;
  text-align: center;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    margin-top: 10rem;
    color: #ecf0f1;
    display: inline-block;
    padding-bottom: 0.5rem;
  }
`;

interface ExperienceItemProps {
  index: number;
}

export const ExperienceItem = styled.div<ExperienceItemProps>`
  margin: 1.5rem 0;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #2b2b2b;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  animation: ${({ index }) => (index % 2 === 0 ? fadeInUp : fadeInDown)} 1s ease-out;
  animation-delay: ${({ index }) => index * 0.2}s;
  animation-fill-mode: backwards;

  h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #23ce6b;

    span {
      color: #23ce6b;
      font-weight: normal;
    }
  }

  p {
    margin: 0.5rem 0;
    line-height: 1.6;
    color: #ecf0f1;
    text-align: justify;
  }

  ul {
    padding-left: 1.5rem; /* Add padding for bullets */
    margin-top: 1rem;     /* Top margin for spacing */
    text-align: left;     /* Align bullets properly */
  }

  li {
    margin-bottom: 0.8rem; /* Space between bullet points */
    line-height: 1.6;
    color: #ecf0f1;
  }

  &:hover {
    transform: translateY(-5px);
    background-color: var(--pink);
  }
`;
