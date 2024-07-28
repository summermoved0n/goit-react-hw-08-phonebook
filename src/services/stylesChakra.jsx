import { Global, css } from '@emotion/react';

import { chakra } from '@chakra-ui/react';

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

export const BurgerButton = chakra('button', {
  baseStyle: {
    height: '30px',
    width: '30px',
    border: '1px solid white',
    borderRadius: '6px',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background  250ms ease',
    _hover: {
      bg: 'rgba(0, 0, 0, 0.25)',
    },
  },
});

export const CustomInput = chakra('input', {
  baseStyle: {
    borderRadius: '5px',
    outline: 'inherit',
    padding: '5px 10px',
    color: 'black',
    fontSize: '18px',
    transition: 'outline 150ms ease',
    _focus: {
      outline: '2px solid rgb(16, 189, 189)',
    },
  },
});

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
};

export const centerConteinerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
