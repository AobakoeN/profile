import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.light};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
  line-height: 1.5;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  margin-top: 10px;
  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`;

const ProjectCard = ({ title, imageSrc, description, pdfLink }) => (
  <Card whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <ProjectImage src={imageSrc} alt={title} />
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
    <ProjectLink href={pdfLink} target="_blank" rel="noopener noreferrer">
      View {title} Details
    </ProjectLink>
  </Card>
);

export default ProjectCard;
