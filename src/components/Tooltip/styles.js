import styled from 'styled-components';

export const Container = styled.div`
  width: 14.938rem;
  height: 48px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 0.25rem;
  position: relative;

  span {
    color: #fff;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 700;

    &::before {
      content: '';
      border-style: solid;
      border-color: rgba(255, 255, 255, 0.6) transparent;
      border-width: 0 6px 6px 6px;
      top: -6px;
      position: absolute;
    }
  }
`;
