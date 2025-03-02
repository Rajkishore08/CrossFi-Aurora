import { create } from 'zustand';
import { WalletState } from '../types';

// This is a mock implementation for the prototype
// In a real application, this would integrate with NEAR Wallet, MetaMask, etc.
export const useWalletStore = create<WalletState>((set) => ({
  connected: false,
  address: null,
  balance: 0,
  network: null,
  connect: () => {
    // Mock wallet connection
    set({
      connected: true,
      address: '0x1234...5678',
      balance: 1.234,
      network: 'Aurora',
    });
  },
  disconnect: () => {
    set({
      connected: false,
      address: null,
      balance: 0,
      network: null,
    });
  },
}));