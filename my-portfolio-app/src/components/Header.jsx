import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 20px;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
`;

const Header = () => (
  <HeaderWrapper>
    <Navbar />
  </HeaderWrapper>
);

export default Header;
