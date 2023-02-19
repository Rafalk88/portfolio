import React from 'react';
import styled from 'styled-components';

const UlStyled = styled.ul`
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

type UlProps = {
  children: JSX.Element | JSX.Element[],
};

export const UlList: React.FC<UlProps> = ({ children }) => <UlStyled>{children}</UlStyled>;

export default UlList;
