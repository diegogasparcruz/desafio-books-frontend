import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../contexts/AuthContext';
import { BookProvider } from '../contexts/BookContext';

import { theme } from '../styles/theme';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BookProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </BookProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
