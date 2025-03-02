import { create } from 'zustand';
import { Transaction } from '../types';
import { executeArbitrageTrade } from '../lib/nearIntents';

interface TransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
  executeTrade: (fromChain: any, toChain: any, cryptocurrency: any, amount: number) => Promise<void>;
  fetchTransactions: () => Promise<void>;
}

export const useTransactionStore = create<TransactionState>((set, get) => ({
  transactions: [],
  isLoading: false,
  error: null,
  
  executeTrade: async (fromChain, toChain, cryptocurrency, amount) => {
    set({ isLoading: true, error: null });
    try {
      const transaction = await executeArbitrageTrade(
        fromChain,
        toChain,
        cryptocurrency,
        amount
      );
      
      set(state => ({
        transactions: [transaction, ...state.transactions],
        isLoading: false,
      }));
    } catch (error: any) {
      set({
        error: error.message || 'Failed to execute trade',
        isLoading: false,
      });
    }
  },
  
  fetchTransactions: async () => {
    set({ isLoading: true, error: null });
    try {
      // In a real application, this would fetch transactions from the database
      // For now, we'll just use mock data
      const mockTransactions: Transaction[] = [
        {
          id: 'tx-1',
          userId: 'user-1',
          fromChain: 'Ethereum',
          toChain: 'Solana',
          cryptocurrency: 'ETH',
          amount: 0.5,
          executionPrice: 3050.25,
          status: 'completed',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          profit: 25.75,
        },
        {
          id: 'tx-2',
          userId: 'user-1',
          fromChain: 'Bitcoin',
          toChain: 'Ethereum',
          cryptocurrency: 'BTC',
          amount: 0.01,
          executionPrice: 51200.50,
          status: 'completed',
          timestamp: new Date(Date.now() - 7200000).toISOString(),
          profit: 42.30,
        },
        {
          id: 'tx-3',
          userId: 'user-1',
          fromChain: 'Solana',
          toChain: 'Ripple',
          cryptocurrency: 'SOL',
          amount: 5,
          executionPrice: 102.75,
          status: 'failed',
          timestamp: new Date(Date.now() - 10800000).toISOString(),
        },
      ];
      
      set({
        transactions: mockTransactions,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.message || 'Failed to fetch transactions',
        isLoading: false,
      });
    }
  },
}));