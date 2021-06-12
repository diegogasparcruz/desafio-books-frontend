import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
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
    background: #fff;
  }
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;

  padding: 1rem;
  margin-top: 10px;
  overflow: auto;

  @media (min-width: 770px) {
    align-items: center;
  }
`;

export const Content = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  max-width: 288px;
  width: 100%;
  position: relative;
  padding: 1.5rem;
  overflow: inherit;

  @media (min-width: 770px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    max-width: 768px;
    width: 768px;
    height: 608px;
  }
`;

export const Image = styled.div`
  width: 240px;
  height: 350px;
  padding-bottom: 1.5rem;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 770px) {
    width: 350px;
    height: 512px;
    justify-self: center;
    align-self: center;
    padding-bottom: 0;
  }
`;

export const Summary = styled.div`
  header {
    h1 {
      /* padding-top: 1.5rem; */
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
      color: #ab2680;
    }
  }

  @media (min-width: 770px) {
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
        color: #999999;
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
    color: #999999;
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
