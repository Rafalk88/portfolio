import React from 'react';
import styled from 'styled-components';

import UlList from './UlList';
import Logo from './svg/Logo';
import LinkedIn from './svg/LinkedIn';
import CV from './svg/CV';

import { LiElement } from './LiElement';
import { LINKEDIN_LINK } from './constants';

const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(50, 50, 50, 0.7);
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.header`
  width: 100%;
  max-width: 1200px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

interface Props {
  otherProps?: any,
}

const Header: React.FC<Props> = (props) => {
  const {
    ...otherProps
  } = props;

  return (
    <Wrapper>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Container {...otherProps}>
        <Logo href="./" />
        <UlList>
          <LiElement><a href="./">Portfolio</a></LiElement>
          <LiElement><a href="./">Kontakt</a></LiElement>
          <LiElement icon><LinkedIn href={LINKEDIN_LINK} /></LiElement>
          <LiElement icon><CV /></LiElement>
        </UlList>
      </Container>
    </Wrapper>
  );
};

Header.defaultProps = {
  otherProps: null,
};

export default Header;
