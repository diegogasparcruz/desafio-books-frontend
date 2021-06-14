import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const Button = styled.button`
  ${({ outline, width, theme }) => {
    if (outline) {
      return css`
        width: ${width ? `${width}px` : '2rem'};
        height: ${width ? `${width}px` : '2rem'};
        background: transparent;
        border: 1px solid ${rgba(`${theme.colors.greyDark}`, 0.2)};
        border-radius: 50%;
        background: transparent;
        border-radius: ${theme.fonts.sizes.md};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
      `;
    }
    return css`
      height: 2.25rem;
      width: ${width ? `${width}px` : '5.3125rem'};
      font-size: ${theme.fonts.sizes.md};
      font-weight: ${theme.fonts.weight.medium};
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
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

    svg {
      opacity: 0.4;
    }
  }
`;
