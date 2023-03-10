import React from 'react';
import styled from 'styled-components';

const AStyled = styled.a`
  cursor: pointer;
`;

const Logo = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  const {
    href,
    ...otherProps
  } = props;
  return (
    <AStyled href={href}>
      <svg
        width={75}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        <path
          d="M8.224 21.664.48 13.92l7.744-7.744 2.688 2.688-5.248 5.056 5.248 5.056-2.688 2.688Z"
          fill="#0057FF"
        />
        <path
          d="M18.365 24V.96h9.728c.224 0 .523.01.896.032.384.01.725.043 1.024.096 1.376.213 2.501.667 3.376 1.36a6.123 6.123 0 0 1 1.952 2.624c.416 1.045.624 2.213.624 3.504 0 1.93-.48 3.584-1.44 4.96-.96 1.365-2.464 2.208-4.512 2.528l-1.92.128h-5.376V24h-4.352Zm12.992 0-4.544-9.376 4.48-.864L36.285 24h-4.928Zm-8.64-11.872h5.184c.224 0 .47-.01.736-.032.267-.021.512-.064.736-.128.587-.16 1.04-.427 1.36-.8.32-.384.539-.805.656-1.264.128-.47.192-.912.192-1.328 0-.416-.064-.853-.192-1.312A3.058 3.058 0 0 0 30.733 6c-.32-.384-.773-.656-1.36-.816a3.774 3.774 0 0 0-.736-.128 9.284 9.284 0 0 0-.736-.032h-5.184v7.104ZM39.303 24V.96h4.352v10.624L52.421.96h5.313l-9.633 11.36L58.343 24H52.84l-9.184-10.496V24h-4.352Z"
          fill="#DEDEDE"
        />
        <path
          d="m66.26 21.664-2.688-2.688 5.248-5.056-5.248-5.056 2.688-2.688 7.744 7.744-7.744 7.744Z"
          fill="#FF5398"
        />
      </svg>
    </AStyled>
  );
};

export default Logo;
