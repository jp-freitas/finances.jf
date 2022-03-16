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

  h1 {
    font-size: 2.2rem;
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

  @media(min-width: 1081px) {
    
  }

  @media(min-width: 769px) and (max-width: 1080px) {
    
  }

  @media(min-width: 541px) and (max-width: 768px) {
    
  }

  @media(min-width: 500px) and (max-width: 540px) {
    
  }

  @media(min-width: 381px) and (max-width: 499px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem 15rem;

    .button-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      > button {
        margin-left: 0;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        border-radius: 10rem;
        padding: 0;

        svg {
          font-size: 1.9rem;
        }
      }

    }
  }
    
  @media(min-width: 376px) and (max-width: 380px) {
    
  }
    
  @media(min-width: 361px) and (max-width: 375px) {
    
  }
    
  @media(min-width: 321px) and (max-width: 361px) {
    
  }
    
  @media(min-width: 281px) and (max-width: 320px) {
    
  }
    
  @media(max-width: 280px) {
    
  }
`;