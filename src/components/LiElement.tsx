import React from 'react';
import styled from 'styled-components';

type LiProps = {
  icon?: boolean,
  children: string | JSX.Element | JSX.Element[],
};

const LiStyledDefault = styled.li`
  width: 5.125rem;
  height: 100%;
  color: rgba(222, 222, 222, 1);
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: -0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: rgba(50, 50, 50, 0.9);
  }
`;

const LiStyledIcon = styled(LiStyledDefault)`
  width: 2.75rem;
`;

export const LiElement: React.FC<LiProps> = ({ icon, children }) => {
  if (!icon) { return <LiStyledDefault>{children}</LiStyledDefault>; }
  return (
    <LiStyledIcon>{children}</LiStyledIcon>
  );
};

LiElement.defaultProps = {
  icon: false,
};

export default LiElement;
