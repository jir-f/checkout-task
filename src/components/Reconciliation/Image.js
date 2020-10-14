import React from 'react';
import styled from "styled-components";
import { ReconciliationSVG } from '../../assets';
import StyledCalendar from './Calendar';
import StyledTansactions from './Transcation';
import StyledStatements from './Statements';
import StyledLinks from './Links';


const Container = styled.div`
  position: relative;
  width: 56%;
  padding-left: 2.25rem;
  padding-right: 7.25rem;

  @media (max-width: 1200px) {
    width: 100%;
    right: 4%;
  }

  @media (max-width: 426px) {
    right: 6%;
  }
`

const StyledImage = styled(ReconciliationSVG)`
  position: absolute;
  top: -19%;
  right: -6%;
  width: 100%;
  ${StyledCalendar}
  ${StyledStatements}
  ${StyledTansactions}
  ${StyledLinks}
`;

const Image = () => {
  return (
    <Container>
      <StyledImage />
    </Container>
  );
}

export default Image;