import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { useTransactions } from '../../hooks/useTransactions';
import { useValues } from '../../hooks/useValues';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();
  const { income, outcome } = useValues(transactions);

  console.log(income, outcome);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className='deposit'>R$12.120,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong className='withdraw'>- R$591,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Saídas" />
        </header>
        <strong>R$11.529,00</strong>
      </div>
    </Container>
  );
}