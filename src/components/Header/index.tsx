import { FiLogOut, FiPlusSquare } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useWidth } from '../../hooks/useWidth';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const { signOut } = useAuth();
  const { width } = useWidth();
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
            {width >= 625 ? 'Nova Transação' : <FiPlusSquare />}
          </button>
          <button type='button' onClick={handleLogout}>
            {width >= 625 ? 'Sair' : <FiLogOut />}
          </button>
        </div>
      </Content>
    </Container>
  );
}