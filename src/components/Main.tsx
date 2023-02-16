import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import { Container } from './styles/Container.styled';

const Wrapper = styled.div`
  margin-top: 80px;
  width: 100%;
`;

const Main: React.FC = () => (
  <Wrapper>
    <Container>
      <Hero />
    </Container>
  </Wrapper>
);

export default Main;
