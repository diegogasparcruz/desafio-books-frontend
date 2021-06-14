import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { limitText } from '../../utils/limitText';

export const Container = styled.div`
  max-width: 288px;
  width: 100%;
  height: 160px;

  display: grid;
  grid-template-columns: 113px 1fr;

  ${({ theme }) => {
    return css`
      background: ${theme.colors.white};
      box-shadow: 0px 6px 24px ${rgba(theme.colors.darkMagento, 0.13)};
    `;
  }}

  border-radius: 0.25rem;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 16px 80px
      ${({ theme }) => rgba(theme.colors.darkMagento, 0.32)};
  }
`;

export const Image = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  .image {
    width: 81px;
    height: 122px;
    background-image: url(${({ imageUrl }) => imageUrl || 'image-unknown.svg'});
    background-position: center;
    background-size: cover;
    filter: drop-shadow(
      0px 6px 9px ${({ theme }) => rgba(theme.colors.black, 0.32)}
    );
  }
`;

export const Summary = styled.div`
  width: 160px;
  display: grid;
  align-items: center;
`;

export const Title = styled.section`
  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    ${limitText(2)}
  }

  span {
    ${limitText(1)}

    ${({ theme }) => {
      return css`
        font-size: ${theme.fonts.sizes.xs};
        color: ${theme.colors.violet};
      `;
    }}
  }
`;

export const Description = styled.section`
  display: grid;
  grid-template-rows: 1fr;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fonts.sizes.xs};
      color: ${theme.colors.grey};
    `;
  }}

  span:nth-child(2) {
    ${limitText(1)}
  }
`;
