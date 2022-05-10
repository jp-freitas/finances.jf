import { useEffect, useState, createContext, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { format } from 'date-fns';


import { database } from '../services/firebase';

type FirebaseTransactions = Record<string, {
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at: Date;
}>

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at: Date;
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>;

type TransactionsContextProviderProps = {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider(props: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { user } = useAuth();
  const dateMonth = format(new Date(), 'MM');

  useEffect(() => {
    const transactionRef = database.ref(`transactions/${user?.id}/${dateMonth}`);
    transactionRef.on('value', transaction => {
      const databaseTransaction = transaction.val();
      const firebaseTransactions: FirebaseTransactions = databaseTransaction ?? {};
      const parsedTransactions = Object.entries(firebaseTransactions).map(
        ([key, value]) => {
          return {
            id: key,
            title: value.title,
            amount: value.amount,
            type: value.type,
            category: value.category,
            created_at: value.created_at,
          };
        });
      setTransactions(parsedTransactions);
    });
  }, [user, dateMonth]);

  async function createTransaction(transaction: TransactionInput) {
    const transactionRef = database.ref(`transactions/${user?.id}/${dateMonth}`);

    await transactionRef.push({
      title: transaction.title,
      amount: transaction.amount,
      category: transaction.category,
      type: transaction.type,
      created_at: new Date().toISOString(),
    });
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  );
}