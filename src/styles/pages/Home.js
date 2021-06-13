import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('bg-home.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  margin: 2.5rem 0;

  display: grid;
  grid-template-columns: 1fr 2rem;

  button {
    align-self: center;
    justify-self: end;
  }

  p {
    display: none;
  }

  @media (min-width: 420px) {
    grid-template-columns: 1fr 1fr 2rem;

    p {
      display: flex;
      margin-right: 1rem;
      font-size: ${({ theme }) => theme.fonts.sizes.xs};
      line-height: 1rem;
      align-self: center;
      justify-self: end;

      span {
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
        margin-left: 0.2rem;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1.5rem 0;
  gap: 1rem;

  span {
    align-self: center;
    font-size: ${({ theme }) => theme.fonts.sizes.xs};
    line-height: 1.25rem;
  }

  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`;
