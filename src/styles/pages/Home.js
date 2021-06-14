import styled from 'styled-components';

export const Main = styled.div`
  background-image: url('bg-home.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
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
