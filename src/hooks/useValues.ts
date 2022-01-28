import { useEffect, useState } from 'react';
import { Transaction } from './useTransactions';

export function useValues(transactions: Transaction[]) {
  const [income, setIncome] = useState();
  const [outcome, setOutcome] = useState();
  const [total, setTotal] = useState(Number());

  return {
    income,
    outcome,
    total
  }
}