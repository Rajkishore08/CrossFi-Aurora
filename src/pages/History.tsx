import React, { useEffect } from 'react';
import { useTransactionStore } from '../store/transactionStore';
import TransactionList from '../components/transactions/TransactionList';

const History: React.FC = () => {
  const { transactions, fetchTransactions, isLoading } = useTransactionStore();
  
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Transaction History</h1>
        <p className="text-gray-500 mt-1">
          View all your past transactions and their outcomes.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <TransactionList
          transactions={transactions}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default History;