import { useEffect, useState, createContext, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';

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

  useEffect(() => {
    const transactionRef = database.ref(`transactions/${user?.id}`);
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
  }, [user]);

  async function createTransaction(transaction: TransactionInput) {
    const transactionRef = database.ref(`transactions/${user?.id}`);

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