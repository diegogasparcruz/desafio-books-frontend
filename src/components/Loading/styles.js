import styled, { keyframes } from 'styled-components';

const ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 1.375rem;
  height: 1.375rem;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    left: 0;
    top: 0;
    margin: 0.25rem;
    border: 0.25rem solid #b22e6f;
    border-radius: 50%;
    animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #b22e6f transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
