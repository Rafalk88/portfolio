import React from 'react';
import styled from 'styled-components';

import UlList from './UlList';
import Logo from './svg/Logo';
import LinkedIn from './svg/LinkedIn';
import CV from './svg/CV';

import { Container } from './styles/Container.styled';
import { Wrapper } from './styles/Wrapper.styled';
import { LiElement } from './LiElement';
import { LINKEDIN_LINK } from './constants';

interface Props {
  otherProps?: any,
}

const HeaderContainer = styled(Container)`
  height: 80px;
  justify-content: space-between;
`;

const HeaderWrapper = styled(Wrapper)`
  background-color: rgba(50, 50, 50, 0.7);
`;

const Header: React.FC<Props> = (props) => {
  const {
    ...otherProps
  } = props;

  return (
    <HeaderWrapper>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <HeaderContainer {...otherProps}>
        <Logo href="./" />
        <UlList>
          <LiElement><a href="./">Portfolio</a></LiElement>
          <LiElement><a href="./">Kontakt</a></LiElement>
          <LiElement icon><LinkedIn href={LINKEDIN_LINK} /></LiElement>
          <LiElement icon><CV /></LiElement>
        </UlList>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

Header.defaultProps = {
  otherProps: null,
};

export default Header;
