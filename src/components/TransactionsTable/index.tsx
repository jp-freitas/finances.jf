import { useContext } from 'react';
import { format } from 'date-fns';

import { TransactionsContext } from '../../contexts/TransactionsContext';
import { FormatCurrency } from '../../utils/FormatCurrency';
import { Container } from "./styles";
import { useWidth } from '../../hooks/useWidth';

export function TransactionsTable() {
  const { width } = useWidth();
  const { transactions } = useContext(TransactionsContext);
  // const month = format(new Date(), 'MM');
  // const getTransactionsByMonth = transactions.filter();

  return (
    <Container>
      {
        width >= 625 ?
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
          :
          <>
            <div className='header-group'>
              <h1>Listagem</h1>
              <p>{`${transactions.length > 1 ? transactions.length + ' itens' : transactions.length + ' item'}`}</p>
            </div>
            {transactions.map(transaction => (
              <div key={transaction.id} className="card">
                <p className='header'>{transaction.title}</p>
                <p className={`${transaction.type} content`}>
                  {transaction.type === 'withdraw' ?
                    '-' + FormatCurrency(transaction.amount) :
                    FormatCurrency(transaction.amount)
                  }
                </p>
                <div className="footer">
                  <p>{transaction.category}</p>
                  <p>{format(new Date(transaction.created_at), 'dd/MM/yyyy')}</p>
                </div>
              </div>
            ))}
          </>
      }
    </Container>
  );
}