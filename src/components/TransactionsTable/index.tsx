import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="withdraw">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/11/2021</td>
          </tr>
          <tr>
            <td>Parcela da Casa</td>
            <td className="deposit">- R$591,00</td>
            <td>Despesas</td>
            <td>18/11/2021</td>
          </tr>
          <tr>
            <td>Formatação Computador</td>
            <td className="withdraw">R$120,00</td>
            <td>Manutenção</td>
            <td>21/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}