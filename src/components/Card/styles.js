import styled from 'styled-components';

export const Container = styled.div`
  max-width: 288px;
  width: 100%;
  height: 160px;

  display: grid;
  grid-template-columns: 113px 1fr;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.9);
  }
`;

export const Image = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  img {
    width: 81px;
    height: 122px;
  }
`;

export const Summary = styled.div`
  display: grid;
  align-items: center;
`;

export const Title = styled.section`
  h1 {
    font-size: 0.875rem;
  }

  span {
    font-size: 0.75rem;
    color: #ab2680;
  }
`;

export const Description = styled.section`
  display: grid;
  grid-template-rows: 1fr;

  font-size: 0.75rem;
  color: #999999;
`;
