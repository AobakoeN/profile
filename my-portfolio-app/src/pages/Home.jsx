import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import backgroundImage from '../assets/images/enhanced_image_v2.jpg';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: 100% 100%; // Width and height as a percentage of the container
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust color and opacity */
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Home = () => {
  return (
    <HomePage>
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Welcome to My Portfolio
      </Title>
      <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        Hello, I'm Aobakoe Nke, an Electrical Engineer passionate about technology and innovation.
      </Subtitle>
      <ButtonContainer>
        <AnimatedButton onClick={() => alert('Explore Projects')}>Explore Projects</AnimatedButton>
        <AnimatedButton onClick={() => alert('Contact Me')}>Contact Me</AnimatedButton>
      </ButtonContainer>
    </HomePage>
  );
};

export default Home;
