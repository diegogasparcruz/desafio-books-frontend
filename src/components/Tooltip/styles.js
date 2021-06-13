import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  width: 14.938rem;
  height: 48px;
  padding: 1rem;
  background: ${({ theme }) => rgba(theme.colors.white, 0.6)};
  border-radius: 0.25rem;
  position: relative;

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 700;

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => rgba(theme.colors.white, 0.6)} transparent;
      border-width: 0 6px 6px 6px;
      top: -6px;
      position: absolute;
    }
  }
`;
