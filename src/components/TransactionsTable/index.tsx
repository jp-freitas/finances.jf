import { useContext } from 'react';
import { format } from 'date-fns';

import { TransactionsContext } from '../../contexts/TransactionsContext';
import { FormatCurrency } from '../../utils/FormatCurrency';
import { Container } from "./styles";

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{
                transaction.type === 'withdraw' ?
                  '-' + FormatCurrency(transaction.amount) :
                  FormatCurrency(transaction.amount)
              }</td>
              <td>{transaction.category}</td>
              <td>{format(new Date(transaction.created_at), 'dd/MM/yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}