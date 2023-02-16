import React from 'react';
import styled from 'styled-components';

const AStyled = styled.a`
  cursor: pointer;
`;

const LinkedIn = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  const {
    href,
    ...otherProps
  } = props;
  return (
    <AStyled href={href}>
      <svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.12 0H.88A.88.88 0 0 0 0 .88v20.24c0 .487.393.88.88.88h20.24c.487 0 .88-.393.88-.88V.88a.879.879 0 0 0-.88-.88ZM6.526 18.747H3.262v-10.5h3.264v10.5ZM4.895 6.812a1.892 1.892 0 1 1 0-3.784 1.892 1.892 0 0 1 0 3.784Zm13.852 11.935h-3.262V13.64c0-1.218-.022-2.783-1.696-2.783-1.697 0-1.958 1.325-1.958 2.695v5.195H8.57v-10.5h3.13v1.436h.044c.435-.825 1.499-1.697 3.089-1.697 3.305 0 3.913 2.175 3.913 5.002v5.759Z"
          fill="#959595"
        />
      </svg>
    </AStyled>
  );
};

export default LinkedIn;
