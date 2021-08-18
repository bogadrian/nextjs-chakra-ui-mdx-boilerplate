import React from 'react';
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { Global, css } from '@emotion/react';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import { AppProps } from 'next/app';

const GlobalStyle: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <ColorModeProvider
        options={{
          initialColorMode: 'light',
          useSystemColorMode: true
        }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
