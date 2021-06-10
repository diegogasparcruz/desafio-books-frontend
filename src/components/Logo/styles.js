import styled from 'styled-components';

export const Container = styled.div`
  max-width: 180px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  svg {
    fill: ${props => (props.themeColor === 'dark' ? '#333333' : '#ffffff')};
  }

  span {
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
    margin-left: 16px;
    color: ${props => (props.themeColor === 'dark' ? '#333333' : '#ffffff')};
  }
`;
