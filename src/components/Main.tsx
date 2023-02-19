import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import Project from './Project';
import { Container } from './styles/Container.styled';

const Wrapper = styled.div`
  margin-top: 80px;
  width: 100%;
`;

const MainContainer = styled(Container)`
  flex-direction: column;
`;

const Main: React.FC = () => (
  <Wrapper>
    <MainContainer>
      <Hero />
      <Project />
    </MainContainer>
  </Wrapper>
);

export default Main;
