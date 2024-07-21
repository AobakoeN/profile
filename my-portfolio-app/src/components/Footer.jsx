import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    &copy; 2024 Aobakoe Nke. All Rights Reserved.
  </FooterWrapper>
);

export default Footer;
