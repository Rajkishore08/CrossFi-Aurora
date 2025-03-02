import { create } from 'zustand';
import { AIAgentState } from '../types';

export const useAIAgentStore = create<AIAgentState>((set) => ({
  isActive: false,
  strategy: 'Balanced',
  lastAction: null,
  performance: {
    daily: 0.5,
    weekly: 2.3,
    monthly: 8.7,
    allTime: 15.2,
  },
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
  setStrategy: (strategy) => set({ strategy }),
}));