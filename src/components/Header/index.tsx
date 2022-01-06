import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const { signOut } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await signOut();
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <h1>finances<span>.jf</span></h1>
        <div className='button-group'>
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova Transação
          </button>
          <button type='button' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </Content>
    </Container>
  );
}