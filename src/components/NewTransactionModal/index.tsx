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
  const [price, setPrice] = useState(Number());
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(Date());
  const [type, setType] = useState('deposit');
  const { user } = useAuth();

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    if ((title.trim() && price && category && type && date) === '') {
      onRequestClose();
      toast.error('Nenhum dado preenchido');
      return;
    }

    const transactionRef = database.ref('transactions');

    await transactionRef.push({
      authorId: user?.id,
      title: title,
      price: price,
      category: category,
      type: type,
      date: date,
    });

    onRequestClose();
    toast.success('Transação cadastrada com sucesso!');
    setTitle('');
    setPrice(Number());
    setCategory('');
    setType('deposit');
    setDate(Date());
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
          id='price'
          type="number"
          placeholder='Valor'
          value={price}
          onChange={event => setPrice(Number(event.target.value))}
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
        <input
          id='date'
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}