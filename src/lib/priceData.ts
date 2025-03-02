import { PriceData, Cryptocurrency, Chain } from '../types';

// Mock function to get price data
// In a real application, this would fetch data from cryptocurrency APIs
export const getPriceData = async (): Promise<PriceData> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const cryptocurrencies: Cryptocurrency[] = ['BTC', 'ETH', 'SOL', 'XRP', 'DOGE', 'TRUMP'];
  const chains: Chain[] = ['Bitcoin', 'Ethereum', 'Solana', 'Ripple', 'Dogecoin', 'Trump'];
  
  const priceData: Partial<PriceData> = {};
  
  cryptocurrencies.forEach(crypto => {
    priceData[crypto] = {};
    
    chains.forEach(chain => {
      // Generate a base price for each cryptocurrency
      let basePrice = 0;
      switch (crypto) {
        case 'BTC':
          basePrice = 50000 + Math.random() * 5000;
          break;
        case 'ETH':
          basePrice = 3000 + Math.random() * 300;
          break;
        case 'SOL':
          basePrice = 100 + Math.random() * 20;
          break;
        case 'XRP':
          basePrice = 0.5 + Math.random() * 0.1;
          break;
        case 'DOGE':
          basePrice = 0.1 + Math.random() * 0.02;
          break;
        case 'TRUMP':
          basePrice = 50 + Math.random() * 10;
          break;
      }
      
      // Add some variation between chains (up to 5%)
      const variation = (Math.random() - 0.5) * 0.05;
      priceData[crypto]![chain] = basePrice * (1 + variation);
    });
  });
  
  return priceData as PriceData;
};

// Function to get historical price data for charts
export const getHistoricalPriceData = async (
  cryptocurrency: Cryptocurrency,
  chain: Chain,
  timeframe: '1d' | '1w' | '1m' | '3m' | '1y' = '1d'
) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Number of data points based on timeframe
  let dataPoints = 24; // 1d = 24 hours
  switch (timeframe) {
    case '1w':
      dataPoints = 7;
      break;
    case '1m':
      dataPoints = 30;
      break;
    case '3m':
      dataPoints = 90;
      break;
    case '1y':
      dataPoints = 365;
      break;
  }
  
  // Generate base price based on cryptocurrency
  let basePrice = 0;
  switch (cryptocurrency) {
    case 'BTC':
      basePrice = 50000;
      break;
    case 'ETH':
      basePrice = 3000;
      break;
    case 'SOL':
      basePrice = 100;
      break;
    case 'XRP':
      basePrice = 0.5;
      break;
    case 'DOGE':
      basePrice = 0.1;
      break;
    case 'TRUMP':
      basePrice = 50;
      break;
  }
  
  // Generate mock historical data
  const data = [];
  let currentPrice = basePrice;
  
  for (let i = 0; i < dataPoints; i++) {
    // Add some random price movement (up to 2%)
    const priceChange = (Math.random() - 0.5) * 0.04;
    currentPrice = currentPrice * (1 + priceChange);
    
    // Calculate timestamp based on timeframe
    const date = new Date();
    switch (timeframe) {
      case '1d':
        date.setHours(date.getHours() - (dataPoints - i));
        break;
      case '1w':
        date.setDate(date.getDate() - (dataPoints - i));
        break;
      case '1m':
        date.setDate(date.getDate() - (dataPoints - i));
        break;
      case '3m':
        date.setDate(date.getDate() - (dataPoints - i));
        break;
      case '1y':
        date.setDate(date.getDate() - (dataPoints - i));
        break;
    }
    
    data.push({
      timestamp: date.toISOString(),
      price: currentPrice,
    });
  }
  
  return data;
};