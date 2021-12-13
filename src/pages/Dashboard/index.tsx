import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { useAuth } from "../../hooks/useAuth";
import { Container, Content } from "./styles";

export function Dashboard() {
  const { user } = useAuth();
  return (
    <Container>
      <Header />
      <Content>
        <Summary />
        <TransactionsTable />
      </Content>
    </Container>
  );
}