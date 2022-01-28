import { useEffect, useState } from "react";

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

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const transactionRef = database.ref(`transactions/`);
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
  }, []);

  return {
    transactions
  };
}