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

type Props = {
  otherProps?: JSX.Element | null,
};

const HeaderContainer = styled(Container)`
  height: 80px;
  justify-content: space-between;
`;

const HeaderWrapper = styled(Wrapper)`
  background-color: rgba(50, 50, 50, 0.7);
`;

const menu: {
  id: number
  href: string
  content: string | JSX.Element
  icon: boolean
}[] = [
  {
    id: 1, href: './', content: 'Portfolio', icon: false,
  },
  {
    id: 2, href: './', content: 'Kontakt', icon: false,
  },
  {
    id: 3, href: LINKEDIN_LINK, content: <LinkedIn />, icon: true,
  },
  {
    id: 4, href: './', content: <CV />, icon: true,
  },
];

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
          {menu.map((item) => (
            <LiElement key={item.id} icon={item.icon}>
              <a href={item.href}>
                {item.content}
              </a>
            </LiElement>
          ))}
        </UlList>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

Header.defaultProps = {
  otherProps: null,
};

export default Header;
