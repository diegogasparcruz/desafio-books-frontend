import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'contexts/AuthContext';
import { BookProvider } from 'contexts/BookContext';

import { HeadSeo } from 'components/HeadSeo';

import { theme } from 'styles/theme';

import GlobalStyle from 'styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BookProvider>
          <HeadSeo
            title={pageProps.title}
            metaDescription={pageProps.metaDescription}
          />
          <Component {...pageProps} />
          <GlobalStyle />
        </BookProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
