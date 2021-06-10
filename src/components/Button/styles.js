import styled from 'styled-components';

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: 1px solid rgba(3, 3, 3, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;
