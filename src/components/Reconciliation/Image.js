import React from 'react';
import styled, { keyframes } from "styled-components";
import { Calendar, Statements, Transactions } from '../../assets';
import { scale, lineDrawing, opacityAnimation } from '../../styles/keyframes'; 

const Container = styled.div`
  position: relative;
  width: 54%;
  padding-left: 4.25rem;
`

const StyledCalendar = styled(Calendar)`
  
  width: 100%;
`;

const StyledStatements = styled(Statements)`
  position: absolute;
  right: -20px;
  top: -52px;
  width: 240px;
`;

const animateLines = (total, duration) => {
  let style = ``;
  for (let i = 0; i < total; i += 1) {
    style += `&:nth-child(${i}) {
      animation-delay: ${duration * i}s;
    };`
  } 
  return style;
}

const StyledTansactions = styled(Transactions)`
  position: absolute;
  left: 27px;
  bottom: -39px;
  width: 240px;
  height: auto;
  opacity: 0;

  animation: ${scale} 0.5s 0.5s linear 1 forwards;

  .transaction-line {
    opacity: 0;
    animation: ${lineDrawing} 0.2s linear 1 forwards;
    ${animateLines(30, 0.1)};

  }
  .highlighted {
    opacity: 0;
    animation: ${opacityAnimation} 0.5s linear 1 forwards;
    animation-delay: ${30 * 0.1 + 0.1}s; 
  }
`;


const Image = () => {
  return (
    <Container>
      <StyledCalendar />
      <StyledStatements />
      <StyledTansactions />
    </Container>
  );
}

export default Image;