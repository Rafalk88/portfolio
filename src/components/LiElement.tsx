import React from 'react';
import styled from 'styled-components';

type LiProps = {
  icon?: boolean,
  children: string | JSX.Element | JSX.Element[],
};

const LiStyledDefault = styled.li`
  width: 4.75rem;
  height: 100%;
  color: rgba(255,255,255,1);
  display: flex;
  justify-content: center;
  align-items: center;
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
