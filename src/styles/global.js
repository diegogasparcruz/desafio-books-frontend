import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body, input, button {
    ${({ theme }) => {
      return css`
        font-weight: ${theme.fonts.weight.regular};
        font-size: ${theme.fonts.sizes.md};
        font-family: ${theme.fonts.family};
      `;
    }};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 30px;
  }

  ::-webkit-scrollbar {
    width: 0.25rem;
  }
`;
