import React from 'react';
import { PieChart, Wallet } from 'lucide-react';
import Card from '../ui/Card';
import { Portfolio, Cryptocurrency } from '../../types';

interface PortfolioSummaryProps {
  portfolio: Portfolio;
  className?: string;
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({
  portfolio,
  className = '',
}) => {
  // Calculate total portfolio value
  const calculateTotalValue = () => {
    let total = 0;
    
    Object.entries(portfolio).forEach(([crypto, chains]) => {
      Object.values(chains).forEach((amount) => {
        // In a real app, we would multiply by current price
        // For now, we'll use mock prices
        let price = 0;
        switch (crypto) {
          case 'BTC':
            price = 50000;
            break;
          case 'ETH':
            price = 3000;
            break;
          case 'SOL':
            price = 100;
            break;
          case 'XRP':
            price = 0.5;
            break;
          case 'DOGE':
            price = 0.1;
            break;
          case 'TRUMP':
            price = 50;
            break;
        }
        
        total += amount * price;
      });
    });
    
    return total;
  };
  
  const totalValue = calculateTotalValue();
  
  // If portfolio is empty
  if (Object.keys(portfolio).length === 0) {
    return (
      <Card className={className}>
        <div className="text-center py-6">
          <Wallet className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No assets</h3>
          <p className="mt-1 text-sm text-gray-500">
            Your portfolio is empty. Start trading to build your portfolio.
          </p>
        </div>
      </Card>
    );
  }
  
  return (
    <Card className={className}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Portfolio Summary</h3>
        <PieChart className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500">Total Value</p>
        <p className="text-2xl font-semibold">${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      </div>
      
      <div className="space-y-4">
        {Object.entries(portfolio).map(([crypto, chains]) => (
          <div key={crypto}>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium">{crypto}</p>
              <p className="text-sm text-gray-500">
                {Object.values(chains).reduce((sum, amount) => sum + amount, 0).toFixed(4)} {crypto}
              </p>
            </div>
            
            <div className="space-y-1">
              {Object.entries(chains).map(([chain, amount]) => (
                <div key={`${crypto}-${chain}`} className="flex justify-between items-center pl-4 text-xs">
                  <p className="text-gray-500">{chain}</p>
                  <p>{amount.toFixed(4)} {crypto}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PortfolioSummary;