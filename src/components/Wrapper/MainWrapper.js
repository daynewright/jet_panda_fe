import React from 'react';
import styled from 'styled-components';
import { Container, Segment, Divider } from 'semantic-ui-react';
import Section from '../Search/Section';

const StyledContainer = styled(Container)`
  margin-top: 25px;
`;

const MainWrapper = () =>(
  <StyledContainer>
    <Section type="heading"/>
    <Segment>
      <Section type="search"/>
      <Divider />
      <Section type="cards"/>
    </Segment>
  </StyledContainer>
);

export default MainWrapper;