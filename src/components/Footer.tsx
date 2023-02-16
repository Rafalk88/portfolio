import React from 'react';
import styled from 'styled-components';

import { Container } from './styles/Container.styled';

const Wrapper = styled.div`
  width: 100%;
  height: 104px;
`;

const Footer: React.FC = () => (
  <Wrapper>
    <Container>
      Footer Here!
    </Container>
  </Wrapper>
);

export default Footer;
