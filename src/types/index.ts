export interface TokenData {
  symbol: string;
  name: string;
  balance: string;
  price: number;
  change24h: number;
}

export interface StrategyData {
  id: string;
  name: string;
  description: string;
  apy: number;
  risk: 'Low' | 'Medium' | 'High';
  protocol: string;
  invested: number;
  tokens: string[];
}

export interface WalletState {
  connected: boolean;
  address: string | null;
  balance: number;
  network: string | null;
  connect: () => void;
  disconnect: () => void;
}

export interface AIAgentState {
  isActive: boolean;
  strategy: string;
  lastAction: string | null;
  performance: {
    daily: number;
    weekly: number;
    monthly: number;
    allTime: number;
  };
  toggleActive: () => void;
  setStrategy: (strategy: string) => void;
}