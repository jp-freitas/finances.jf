import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
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
    flex-direction: column;
    gap: 1rem;
    margin-top: -15rem;

    div {
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;

      header {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;

        p {
          margin-left: 0.6rem;
          font-size: 1.3rem;
          font-weight: 500;
        }

        img {
          margin-left: 0.2rem;
          width: 2.7rem;
        }
      }

      strong {
        display: flex;
        margin-top: 0;
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