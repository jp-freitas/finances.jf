import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-title);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.withdraw {
        color: var(--red);
      }

      &.deposit {
        color: var(--green)
      }
    }
  }

  .header-group {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: var(--text-title);
      font-size: 1.5rem;
    }

    p {
      color: var(--text-title);
      font-size: 1.2rem;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    background: var(--shape);
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    border-radius: 0.8rem;
    padding: 0 0.5rem;

    &:last-child {
      margin-bottom: 1rem;
    }

    .header {
      padding: 0.5rem 0.5rem;
      color: var(--text-title);
      font-size: 1.5rem;
    }

    .content {
      padding: 0.5rem 0.5rem;
      font-size: 1.5rem;

      &.withdraw {
        color: var(--red);
      }

      &.deposit {
        color: var(--green)
      }
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0.5rem;
      color: var(--text-body);
      font-size: 1.5rem;
    }
  }
`;