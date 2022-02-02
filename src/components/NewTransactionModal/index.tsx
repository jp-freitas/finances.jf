import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { toast } from 'react-toastify';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');
  const { user } = useAuth();

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    if ((title.trim() && amount && category && type) === '') {
      onRequestClose();
      toast.error('Nenhum dado preenchido');
      return;
    }

    const transactionRef = database.ref('transactions');

    await transactionRef.push({
      authorId: user?.id,
      title: title,
      amount: amount,
      category: category,
      type: type,
      created_at: new Date().toISOString(),
    });

    onRequestClose();
    toast.success('Transação cadastrada com sucesso!');
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          id='title'
          placeholder='Título'
          type='text'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          id='amount'
          type="number"
          min="0"
          max="10000"
          step="0.01"
          placeholder='1.00'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            isActive={type === 'deposit'}
            activeColor='green'
            onClick={() => { setType('deposit'); }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            isActive={type === 'withdraw'}
            activeColor='red'
            onClick={() => { setType('withdraw'); }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          id='category'
          placeholder='Categoria'
          type='text'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}