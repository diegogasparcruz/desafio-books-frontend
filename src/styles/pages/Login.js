import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-image: url('bg-login.png');
  background-position: 41% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;

  opacity: ${({ isLoading }) => (isLoading ? '0.6' : '1')};

  display: flex;
  flex-direction: column;
  justify-content: center;

  main {
    padding: 1rem;

    form {
      margin-top: 3rem;

      button {
        width: 5.313rem;
        height: 2.25rem;
        border-radius: 2.75rem;
        border: none;
        transition: filter 0.2s;

        ${({ theme }) => {
          return css`
            color: ${theme.colors.primary};
            font-weight: ${theme.fonts.weight.medium};
          `;
        }}

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    @media (min-width: 720px) {
      margin-left: 7.188rem;
    }
  }
`;
