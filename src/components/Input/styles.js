import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  position: relative;
  max-width: 23rem;
  width: 100%;
  height: 3.75rem;
  background: ${({ theme }) => rgba(theme.colors.black, 0.32)};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 0.813rem;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 1rem;
  }
`;

export const InputWrap = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.5rem 0.5rem 0.125rem 0;

  span {
    opacity: 0.5;
    font-size: ${({ theme }) => theme.fonts.sizes.xs};
    line-height: 1rem;
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
    }
  }
`;
