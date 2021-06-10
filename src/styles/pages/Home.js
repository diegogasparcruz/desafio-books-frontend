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
      font-size: 0.75rem;
      line-height: 1rem;
      align-self: center;
      justify-self: end;

      span {
        font-weight: 500;
      }
    }
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
  gap: 1rem;

  div {
    justify-self: center;
  }

  @media (min-width: 878px) {
    div {
      justify-self: normal;
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
    font-size: 0.75rem;
    line-height: 1.25rem;
  }

  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`;
