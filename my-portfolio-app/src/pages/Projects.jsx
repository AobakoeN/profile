import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.light};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 40px;
`;

const projects = [
  {
    title: 'Project 1',
    imageSrc: '/assets/project1.jpg',
    description: 'Description of Project 1. This project involves...',
    pdfLink: '/assets/project1.pdf',
  },
  {
    title: 'Project 2',
    imageSrc: '/assets/project2.jpg',
    description: 'Description of Project 2. This project is about...',
    pdfLink: '/assets/project2.pdf',
  },
  {
    title: 'Project 3',
    imageSrc: '/assets/project3.jpg',
    description: 'Description of Project 3. In this project, we...',
    pdfLink: '/assets/project3.pdf',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <ProjectsPage>
      <Title>My Projects</Title>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard 
            key={project.title} 
            title={project.title} 
            imageSrc={project.imageSrc} 
            description={project.description} 
            pdfLink={project.pdfLink} 
          />
        ))}
      </ProjectsGrid>
    </ProjectsPage>
  );
};

export default Projects;
