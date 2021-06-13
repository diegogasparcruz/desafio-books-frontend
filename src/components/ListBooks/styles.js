import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
  gap: 1rem;
  position: relative;
  opacity: ${({ loading }) => (loading ? '0.4' : '1')};

  div {
    justify-self: center;
  }
`;
