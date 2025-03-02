export type User = {
  id: string;
  email: string;
  created_at: string;
};

export type Cryptocurrency = 'BTC' | 'ETH' | 'SOL' | 'XRP' | 'DOGE' | 'TRUMP';
export type Chain = 'Bitcoin' | 'Ethereum' | 'Solana' | 'Ripple' | 'Dogecoin' | 'Trump';

export type PriceData = {
  [key in Cryptocurrency]: {
    [chain in Chain]?: number;
  };
};

export type ArbitrageOpportunity = {
  id: string;
  fromChain: Chain;
  toChain: Chain;
  cryptocurrency: Cryptocurrency;
  priceDifference: number;
  percentageDifference: number;
  estimatedProfit: number;
  timestamp: string;
};

export type Transaction = {
  id: string;
  userId: string;
  fromChain: Chain;
  toChain: Chain;
  cryptocurrency: Cryptocurrency;
  amount: number;
  executionPrice: number;
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
  profit?: number;
};

export type RiskPreference = 'conservative' | 'moderate' | 'aggressive';

export type UserSettings = {
  riskPreference: RiskPreference;
  maxTransactionAmount: number;
  enableAutomatedTrading: boolean;
  minProfitThreshold: number;
  preferredCryptocurrencies: Cryptocurrency[];
  preferredChains: Chain[];
  notificationsEnabled: boolean;
};

export type Portfolio = {
  [key in Cryptocurrency]?: {
    [chain in Chain]?: number;
  };
};