import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import project1Image from '../assets/images/Project1.jpeg';
import project2Image from '../assets/images/Project2.jpeg';
import project3Image from '../assets/images/Project3.jpeg';

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
    title: 'Project 1: Interfacing a pico-grid to a micro-grid (Prof. Cronje)',
    imageSrc: project1Image,
    description: 'Description of Project 1. This project explores the integration of a Pico Grid with a Micro Grid to enhance the efficiency of surplus energy utilization. By incorporating automation through microcontrollers and communication devices, the system enables real-time monitoring and control of power. Key components include a DC Power Supply, DC-DC Boost Converter, Grid Tie Inverter, and ESP8266 WiFi Board. The Pico Grid captures energy from local sources, which is then boosted in voltage by the Boost Converter for compatibility with the Grid Tie Inverter. The Inverter converts DC to AC, aligning it with the grid, while the ESP8266 facilitates wireless communication and data transfer. The project showcases successful scalability and the effectiveness of control algorithms in optimizing energy management.',
    pdfLink: '/assets/documents/project1.pdf',
  },
  {
    title: 'Project 2: External Lightning Protection system for a clinic in Mbabane (Dr. Hugh Hunt)',
    imageSrc: project2Image,
    description: 'Description of Project 2. ',
    pdfLink: '/assets/documents/project2.pdf',
  },
  {
    title: 'Project 3: The design of a backup solar renewable energy system for telecommunication towers in South Africa (Prof. D.D. Dorrell)',
    imageSrc: project3Image,
    description: 'Description of Project 3. In this project, we...',
    pdfLink: '/assets/documents/project3.pdf',
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
