import { useState } from "react";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { NewTransactionModal } from '../../components/NewTransactionModal';

import { Container, Content } from "./styles";

export function Dashboard() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }


  return (
    <Container>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Content>
        <Summary />
        <TransactionsTable />
      </Content>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </Container>
  );
}