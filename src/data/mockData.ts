import { TokenData, StrategyData } from '../types';

export const tokens: TokenData[] = [
  {
    symbol: 'FRAX',
    name: 'Frax',
    balance: '1,250.00',
    price: 1.00,
    change24h: 0.01,
  },
  {
    symbol: 'FXS',
    name: 'Frax Share',
    balance: '75.50',
    price: 5.87,
    change24h: 2.34,
  },
  {
    symbol: 'AURORA',
    name: 'Aurora',
    balance: '500.00',
    price: 0.75,
    change24h: -1.25,
  },
  {
    symbol: 'NEAR',
    name: 'NEAR Protocol',
    balance: '120.00',
    price: 4.32,
    change24h: 3.75,
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: '0.85',
    price: 3250.00,
    change24h: 1.20,
  },
];

export const strategies: StrategyData[] = [
  {
    id: 'dca-frax',
    name: 'DCA into FRAX',
    description: 'Dollar-cost average into FRAX stablecoin for consistent returns',
    apy: 5.2,
    risk: 'Low',
    protocol: 'Frax Finance',
    invested: 500,
    tokens: ['FRAX', 'FXS'],
  },
  {
    id: 'yield-farm',
    name: 'Yield Farming',
    description: 'Optimize yield across multiple protocols with AI-driven rebalancing',
    apy: 12.8,
    risk: 'Medium',
    protocol: 'Frax Finance + Aurora',
    invested: 1200,
    tokens: ['FRAX', 'AURORA', 'ETH'],
  },
  {
    id: 'ai-trading',
    name: 'AI Trading Strategy',
    description: 'AI-powered trading based on market conditions and sentiment analysis',
    apy: 18.5,
    risk: 'High',
    protocol: 'CrossFi AI',
    invested: 800,
    tokens: ['NEAR', 'AURORA', 'ETH'],
  },
  {
    id: 'stablecoin-yield',
    name: 'Stablecoin Yield Optimizer',
    description: 'Maximize returns on stablecoins while maintaining low risk',
    apy: 7.5,
    risk: 'Low',
    protocol: 'Frax Finance',
    invested: 2000,
    tokens: ['FRAX', 'FXS'],
  },
];

export const aiActions = [
  {
    date: '2025-04-15 14:32',
    action: 'Rebalanced portfolio: Moved 10% from ETH to FRAX due to market volatility',
    result: '+0.5% gain',
  },
  {
    date: '2025-04-14 09:15',
    action: 'Entered Frax Finance yield farm with 500 FRAX',
    result: 'Expected APY: 6.2%',
  },
  {
    date: '2025-04-13 16:45',
    action: 'Exited Aurora liquidity pool before price decline',
    result: 'Avoided 2.3% loss',
  },
  {
    date: '2025-04-12 11:20',
    action: 'Increased DCA amount by 10% based on market analysis',
    result: 'Pending',
  },
];