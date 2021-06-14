import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Component, params) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...params} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
