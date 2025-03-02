import { create } from 'zustand';
import { getPriceData } from '../lib/priceData';
import { ArbitrageOpportunity, PriceData } from '../types';
import { getArbitrageOpportunities } from '../lib/nearIntents';

interface PriceState {
  priceData: PriceData | null;
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
  opportunities: ArbitrageOpportunity[];
  fetchPriceData: () => Promise<void>;
  fetchOpportunities: () => Promise<void>;
}

export const usePriceStore = create<PriceState>((set, get) => ({
  priceData: null,
  isLoading: false,
  error: null,
  lastUpdated: null,
  opportunities: [],
  
  fetchPriceData: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await getPriceData();
      set({
        priceData: data,
        isLoading: false,
        lastUpdated: new Date().toISOString(),
      });
    } catch (error: any) {
      set({
        error: error.message || 'Failed to fetch price data',
        isLoading: false,
      });
    }
  },
  
  fetchOpportunities: async () => {
    set({ isLoading: true, error: null });
    try {
      const opportunities = await getArbitrageOpportunities();
      set({
        opportunities,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.message || 'Failed to fetch arbitrage opportunities',
        isLoading: false,
      });
    }
  },
}));