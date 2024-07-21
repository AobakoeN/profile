import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  margin: 0 15px;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Navbar = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </Nav>
);

export default Navbar;
