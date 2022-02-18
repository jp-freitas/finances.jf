import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media(min-width: 1081px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 769px) and (max-width: 1080px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 541px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 500px) and (max-width: 540px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 381px) and (max-width: 499px) {
    height: 100%;
  }
    
  @media(min-width: 376px) and (max-width: 380px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
  @media(min-width: 361px) and (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
  @media(min-width: 321px) and (max-width: 361px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
  @media(min-width: 281px) and (max-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
  @media(max-width: 280px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  max-width: 23rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--text-body);
  border-radius: 0.5rem;
  
  h1 {
    color: var(--shape);
  }

  span {
    color: var(--blue);
  }

  button {
    width: 15rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--shape);
    background: var(--text-title);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3.5rem;
    transition: filter 0.2s;

    svg {
      margin-right: 1rem;
      color: var(--shape);
    }

    &:hover {
      filter: brightness(0.6);
    }
  }
  
  p {
    color: var(--shape);
  }

  @media(min-width: 1081px) {
    width: 100%;
    height: 12rem;
    padding: 1rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    button {
      width: 95%;
      padding: 0;
      font-size: 1.2rem;
    }
  }

  @media(min-width: 769px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 12rem;
    padding: 1rem;
    margin: 2rem;
    
    button {
      width: 95%;
      padding: 0;
      font-size: 1.2rem;
    }
  }

  @media(min-width: 541px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 12rem;
    padding: 1rem;
    margin: 2rem;
    
    button {
      width: 95%;
      padding: 0;
      font-size: 1.2rem;
    }
  }

  @media(min-width: 500px) and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 12rem;
    padding: 1rem;
    margin: 2rem;
    
    button {
      width: 95%;
      padding: 0;
      font-size: 1.2rem;
    }
  }

  @media(min-width: 381px) and (max-width: 499px) {
    max-width: 35rem;
    height: 18rem;
    padding: 1rem;
    margin: 2rem;
    margin-top: 17rem;
    margin-bottom: 17rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
    }
    
    button {
      width: 100%;
      font-size: 1.4rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
    
  @media(min-width: 376px) and (max-width: 380px) {
  }
    
  @media(min-width: 361px) and (max-width: 375px) {
    max-width: 20.5rem;
  }
    
  @media(min-width: 321px) and (max-width: 361px) {
    max-width: 19.5rem;
  }
    
  @media(min-width: 281px) and (max-width: 320px) {
    max-width: 17.5rem;
  }
    
  @media(max-width: 280px) {
  
  }
`;