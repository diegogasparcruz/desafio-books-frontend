import styled from 'styled-components';

const themeColor = ({ color, theme }) =>
  color === 'dark' ? theme.colors.greyDark : theme.colors.white;

export const Container = styled.div`
  max-width: 180px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  svg {
    fill: ${themeColor};
  }

  span {
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
    margin-left: 16px;
    color: ${themeColor};
  }
`;
