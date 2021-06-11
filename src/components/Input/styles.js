import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 23rem;
  width: 100%;
  height: 3.75rem;
  background: rgba(0, 0, 0, 0.32);
  color: #fff;
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
    font-size: 0.75rem;
    line-height: 1rem;
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    color: #fff;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #fff !important;
    }
  }
`;
