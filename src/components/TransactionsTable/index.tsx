import { useTransactions } from '../../hooks/useTransactions';
import { FormatDate } from '../../utils/FormatDate';
import { FormatCurrency } from '../../utils/FormatCurrency';

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}