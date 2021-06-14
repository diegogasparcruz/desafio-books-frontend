import { css } from 'styled-components';

export const limitText = numberLine => {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${numberLine};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  `;
};
