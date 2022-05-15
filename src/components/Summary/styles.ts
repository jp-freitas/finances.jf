import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div.card {
    background: var(--shape);
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      &.withdraw {
        color: var(--red);
      }

      &.deposit {
        color: var(--green)
      }
    }

    &.highlight-background {
      background: var(--green);
      color: var(--shape);
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
    width: 28.5rem;
    margin-top: -8rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    div.card {
      height: 10rem;
      scroll-snap-align: start;

      header {
        width: 20rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-size: 1.5rem;
          font-weight: 500;
        }

        img {
          margin-left: 0.2rem;
          width: 3.5rem;
        }
      }

      strong {
        display: flex;
        margin-top: 1.5rem;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 3rem;
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