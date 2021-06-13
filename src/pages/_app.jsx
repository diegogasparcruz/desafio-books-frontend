import { AuthProvider } from '../contexts/AuthContext';
import { BookProvider } from '../contexts/BookContext';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <BookProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </BookProvider>
    </AuthProvider>
  );
}

export default MyApp;
