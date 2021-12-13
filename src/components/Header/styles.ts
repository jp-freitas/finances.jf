import styled from 'styled-components';

export const Container = styled.header`
  background: var(--text-body);
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  /* @media (min-width: 1280px) and (max-width: 1600px) {
    max-width: 80rem;
  } */

  h1 {
    color: var(--shape);
  }

  span {
    color: var(--blue);
  }

  .button-group {
    > button {
      margin-left: 0.5rem;
    }

    button {
      font-size: 1rem;
      color: var(--shape);
      background: var(--text-title);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.6);
      }
    }
  }
`;