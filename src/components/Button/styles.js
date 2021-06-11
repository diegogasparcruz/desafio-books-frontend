import styled from 'styled-components';
import { rgba } from 'polished';

export const Button = styled.button`
  ${({ outline, width }) => {
    if (outline) {
      return `
        width: ${width ? `${width}px` : '2rem'};
        height:  ${width ? `${width}px` : '2rem'};
        background: transparent;
        border: 1px solid ${rgba('#333333', 0.2)};
        border-radius: 50%;
        background: transparent;
        border: 1px solid rgba(3, 3, 3, 0.2);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
      `;
    }
    return `
      height: 2.25rem;
      width: ${width ? `${width}px` : '5.3125rem'};
      font-size: 1rem;
      font-weight: 500;
      color: #B22E6F;
      background-color: #ffffff;
      border-radius: 24px;
      border: none;
    `;
  }}

  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  :disabled {
    cursor: not-allowed;
  }
`;
