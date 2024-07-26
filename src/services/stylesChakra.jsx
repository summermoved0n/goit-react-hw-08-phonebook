import { Global, css } from '@emotion/react';

import phonebookBg from '../images/phonebook_bg.jpg';

export const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        background-image: url(${phonebookBg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100vh;

        font-family: 'Courier New', Courier, monospace;
        color: #f7f7f7;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}
  />
);

export const mainConteinerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  p: '20px 10px 10px 10px',
  m: '10px',
  borderRadius: '10px',
  bgColor: 'rgba(0, 0, 0, 0.15)',
};

export const navigationStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  w: '100%',
  mb: '10px',
  // pl: '30px',
};
