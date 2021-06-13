import styled from 'styled-components';

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
