import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = styled(motion.button)`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.dark};
  }
`;

const AnimatedButton = ({ children, onClick }) => (
  <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClick}>
    {children}
  </Button>
);

export default AnimatedButton;
