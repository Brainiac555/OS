import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color: #0D4E99;
color: white;
font-weight: 800;
font-size: 14px;
border: none;
padding: 12px 50px;
border-radius: 50px;
margin: 5px 50px;
cursor: pointer;
transition: all 150ms ease;
`;

export function ContainerButton({ children, button }) {
   return (
      <Button className={button}>{children}</Button>
   );
}