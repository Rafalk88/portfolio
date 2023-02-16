import React from 'react';
import styled from 'styled-components';

import { Container } from './styles/Container.styled';

const Wrapper = styled.div`
  margin-top: 80px;
  width: 100%;
`;

const Main: React.FC = () => (
  <Wrapper>
    <Container>
      Hi There!
    </Container>
  </Wrapper>
);

export default Main;
