import { create } from 'zustand';
import { UserSettings, RiskPreference, Cryptocurrency, Chain } from '../types';

interface SettingsState {
  settings: UserSettings;
  isLoading: boolean;
  error: string | null;
  updateSettings: (newSettings: Partial<UserSettings>) => void;
  fetchSettings: () => Promise<void>;
}

const defaultSettings: UserSettings = {
  riskPreference: 'moderate',
  maxTransactionAmount: 1000,
  enableAutomatedTrading: false,
  minProfitThreshold: 1.5, // 1.5%
  preferredCryptocurrencies: ['BTC', 'ETH', 'SOL'],
  preferredChains: ['Bitcoin', 'Ethereum', 'Solana'],
  notificationsEnabled: true,
};

export const useSettingsStore = create<SettingsState>((set) => ({
  settings: defaultSettings,
  isLoading: false,
  error: null,
  
  updateSettings: (newSettings) => {
    set(state => ({
      settings: {
        ...state.settings,
        ...newSettings,
      },
    }));
  },
  
  fetchSettings: async () => {
    set({ isLoading: true, error: null });
    try {
      // In a real application, this would fetch settings from the database
      // For now, we'll just use the default settings
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      set({
        settings: defaultSettings,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.message || 'Failed to fetch settings',
        isLoading: false,
      });
    }
  },
}));