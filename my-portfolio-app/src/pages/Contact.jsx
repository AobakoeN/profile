import React, { useState } from 'react';
import styled from 'styled-components';

const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.light};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background-color: ${props => props.theme.colors.light};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${props => props.theme.colors.dark};
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.secondary};
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.secondary};
  font-size: 1rem;
  resize: none;
  height: 150px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.dark};
  }
`;

const ContactInfo = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const InfoItem = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <ContactPage>
      <Title>Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <Label htmlFor="email">Email</Label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <Label htmlFor="message">Message</Label>
        <TextArea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <Button type="submit">Send Message</Button>
      </Form>
      <ContactInfo>
        <InfoItem>Email: aobakoenke@gmail.com</InfoItem>
        <SocialLinks>
          <SocialLink href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          {/* Add more social links as needed */}
        </SocialLinks>
      </ContactInfo>
    </ContactPage>
  );
};

export default Contact;
