import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.light};
`;

const Section = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 20px;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
`;

const Text = styled(motion.p)`
  font-size: 1rem;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 20px;
  line-height: 1.5;
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 0;
`;

const Skill = styled(motion.li)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutPage>
      <Section>
        <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          About Me
        </Title>
        <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          Electrical Engineer & Technology Enthusiast
        </Subtitle>
        <Text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          I am Aobakoe Nke, a passionate Electrical Engineer with a strong background in programming,
          civil engineering, and aeronautical engineering. My expertise lies in designing innovative
          solutions and implementing cutting-edge technologies to solve real-world problems.
        </Text>
      </Section>

      <Section>
        <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          My Skills
        </Title>
        <SkillList>
          <Skill whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>React</Skill>
          <Skill whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>JavaScript</Skill>
          <Skill whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>CSS</Skill>
          <Skill whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>HTML</Skill>
          <Skill whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Node.js</Skill>
          <Skill whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Python</Skill>
          <Skill whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>C++</Skill>
          <Skill whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Machine Learning</Skill>
          <Skill whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Data Analysis</Skill>
        </SkillList>
      </Section>

      <Section>
        <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          My Journey
        </Title>
        <Text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          My journey in the field of engineering began with a curiosity for how things work. Over the
          years, I have honed my skills and expanded my knowledge across multiple disciplines. From
          designing circuits to developing software applications, my journey has been fueled by a
          desire to innovate and make a positive impact on the world.
        </Text>
      </Section>
    </AboutPage>
  );
};

export default About;
