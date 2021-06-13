import styled from 'styled-components';
import { rgba } from 'polished';

export const Overlay = styled.div`
  background: ${({ theme }) => rgba(theme.colors.black, 0.4)};
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template-rows: 32px 1fr;
`;

export const CloseModal = styled.div`
  display: grid;
  justify-content: end;

  padding: 1rem;

  button {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;

  padding: 1rem;
  margin-top: 10px;
  overflow: auto;

  @media (min-width: 500px) {
    align-items: center;
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 16px 80px ${({ theme }) => rgba(theme.colors.black, 0.32)};
  border-radius: 4px;
  max-width: 768px;
  width: 100%;
  position: relative;
  padding: 1.5rem;
  overflow: inherit;

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    width: 760px;
    height: 608px;
  }
`;

export const Image = styled.div`
  max-width: 500px;
  width: 100%;
  height: 350px;
  padding-bottom: 1.5rem;
  filter: drop-shadow(
    0px 6px 9px ${({ theme }) => rgba(theme.colors.black, 0.15)}
  );

  display: flex;
  justify-content: center;

  img {
    max-width: 240px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 500px) {
    width: 200px;
    padding-bottom: 0;

    justify-self: center;
    align-self: center;
  }

  @media (min-width: 768px) {
    width: 350px;
    height: 512px;

    img {
      max-width: 350px;
    }
  }
`;

export const Summary = styled.div`
  header {
    h1 {
      line-height: 2.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    span {
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.violet};
    }
  }

  @media (min-width: 768px) {
    width: 276px;
    justify-self: center;
    align-self: center;
  }
`;

export const SectionInfo = styled.section`
  margin-top: 2rem;

  h3 {
    font-size: 0.75rem;
    line-height: 1.875rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 500;
      font-size: 0.75rem;
      line-height: 1.25rem;

      & + span {
        font-size: 0.75rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.grey};
      }
    }
  }
`;

export const SectionReview = styled.section`
  margin-top: 2rem;

  h3 {
    font-size: 0.75rem;
    line-height: 1.875rem;
  }

  img {
    width: 1.09875rem;
    height: 0.88375rem;
    padding-right: 5px;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: justify;
    color: ${({ theme }) => theme.colors.grey};
  }

  @media (min-width: 500px) {
    p {
      overflow-y: auto;
      padding: 5px;
      height: 100px;
    }
  }
`;
