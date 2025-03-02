import { ArbitrageOpportunity, RiskPreference, Transaction, UserSettings } from '../types';
import { executeArbitrageTrade } from './nearIntents';

// AI decision-making system for automated trading
export const analyzeAndExecuteTrades = async (
  opportunities: ArbitrageOpportunity[],
  userSettings: UserSettings
): Promise<Transaction[]> => {
  // Filter opportunities based on user settings
  const filteredOpportunities = opportunities.filter(opportunity => {
    // Check if the cryptocurrency and chains are in user preferences
    const isCryptoPreferred = userSettings.preferredCryptocurrencies.includes(opportunity.cryptocurrency);
    const isFromChainPreferred = userSettings.preferredChains.includes(opportunity.fromChain);
    const isToChainPreferred = userSettings.preferredChains.includes(opportunity.toChain);
    
    // Check if profit meets threshold
    const meetsProfitThreshold = opportunity.percentageDifference >= userSettings.minProfitThreshold;
    
    return isCryptoPreferred && isFromChainPreferred && isToChainPreferred && meetsProfitThreshold;
  });
  
  // Sort opportunities by potential profit
  const sortedOpportunities = filteredOpportunities.sort(
    (a, b) => b.percentageDifference - a.percentageDifference
  );
  
  // Determine how many trades to execute based on risk preference
  let numberOfTradesToExecute = 0;
  switch (userSettings.riskPreference) {
    case 'conservative':
      numberOfTradesToExecute = Math.min(1, sortedOpportunities.length);
      break;
    case 'moderate':
      numberOfTradesToExecute = Math.min(3, sortedOpportunities.length);
      break;
    case 'aggressive':
      numberOfTradesToExecute = Math.min(5, sortedOpportunities.length);
      break;
  }
  
  // Execute trades
  const executedTrades: Transaction[] = [];
  
  for (let i = 0; i < numberOfTradesToExecute; i++) {
    const opportunity = sortedOpportunities[i];
    
    // Calculate trade amount based on risk preference and max transaction amount
    let tradeAmount = 0;
    switch (userSettings.riskPreference) {
      case 'conservative':
        tradeAmount = userSettings.maxTransactionAmount * 0.3;
        break;
      case 'moderate':
        tradeAmount = userSettings.maxTransactionAmount * 0.6;
        break;
      case 'aggressive':
        tradeAmount = userSettings.maxTransactionAmount * 0.9;
        break;
    }
    
    try {
      const transaction = await executeArbitrageTrade(
        opportunity.fromChain,
        opportunity.toChain,
        opportunity.cryptocurrency,
        tradeAmount
      );
      
      executedTrades.push(transaction);
    } catch (error) {
      console.error('Failed to execute trade:', error);
    }
  }
  
  return executedTrades;
};

// Portfolio rebalancing function
export const rebalancePortfolio = async (
  currentPortfolio: any,
  userSettings: UserSettings
) => {
  // This is a placeholder for portfolio rebalancing logic
  // In a real application, this would analyze the current portfolio and market conditions
  // and suggest trades to optimize the portfolio based on user risk preferences
  
  // For now, we'll just return a mock recommendation
  return {
    recommendations: [
      {
        action: 'buy',
        cryptocurrency: 'BTC',
        chain: 'Bitcoin',
        amount: 0.01,
        reason: 'Underweight in portfolio relative to target allocation',
      },
      {
        action: 'sell',
        cryptocurrency: 'DOGE',
        chain: 'Dogecoin',
        amount: 100,
        reason: 'Overweight in portfolio relative to target allocation',
      },
    ],
  };
};