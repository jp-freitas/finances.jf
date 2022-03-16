// import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
// import { TransactionsContext } from '../../contexts/TransactionsContext';

import { Container } from "./styles";

export function Summary() {

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong className='deposit'>R$2.850,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong className='withdraw'>- R$399,99</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Saídas" />
        </header>
        <strong>R$2.450,01</strong>
      </div>
    </Container>
  );
}