import React, { useState } from 'react';
import { PieChart, BarChart, RefreshCw } from 'lucide-react';
import PortfolioSummary from '../components/dashboard/PortfolioSummary';
import PriceChart from '../components/dashboard/PriceChart';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Alert from '../components/ui/Alert';
import { rebalancePortfolio } from '../lib/aiTrading';
import { useSettingsStore } from '../store/settingsStore';

const Portfolio: React.FC = () => {
  const { settings } = useSettingsStore();
  const [isRebalancing, setIsRebalancing] = useState(false);
  const [rebalanceResults, setRebalanceResults] = useState<any>(null);
  
  // Mock portfolio data
  const mockPortfolio = {
    BTC: {
      Bitcoin: 0.05,
      Ethereum: 0.02,
    },
    ETH: {
      Ethereum: 1.5,
      Solana: 0.8,
    },
    SOL: {
      Solana: 10,
    },
  };
  
  const handleRebalance = async () => {
    setIsRebalancing(true);
    try {
      const results = await rebalancePortfolio(mockPortfolio, settings);
      setRebalanceResults(results);
    } catch (error) {
      console.error('Failed to rebalance portfolio:', error);
    } finally {
      setIsRebalancing(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
        <Button
          onClick={handleRebalance}
          isLoading={isRebalancing}
          leftIcon={<RefreshCw size={16} />}
        >
          Rebalance Portfolio
        </Button>
      </div>
      
      {rebalanceResults && (
        <Alert
          variant="info"
          title="Portfolio Rebalance Recommendations"
          className="mb-6"
          onClose={() => setRebalanceResults(null)}
        >
          <div className="space-y-2">
            {rebalanceResults.recommendations.map((rec: any, index: number) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <span className={rec.action === 'buy' ? 'text-green-600' : 'text-red-600'}>
                    {rec.action === 'buy' ? 'Buy' : 'Sell'}
                  </span>
                  <span className="ml-2">
                    {rec.amount} {rec.cryptocurrency} on {rec.chain}
                  </span>
                </div>
                <div className="text-sm text-gray-500">{rec.reason}</div>
              </div>
            ))}
          </div>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div>
          <PortfolioSummary
            portfolio={mockPortfolio}
            className="h-full"
          />
        </div>
        <div className="lg:col-span-2">
          <Card className="h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Portfolio Allocation</h3>
              <div className="flex space-x-2">
                <button className="p-1 rounded-md hover:bg-gray-100">
                  <PieChart className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-1 rounded-md hover:bg-gray-100">
                  <BarChart className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="h-64 flex items-center justify-center text-gray-500">
              Portfolio allocation chart would go here
            </div>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PriceChart
          cryptocurrency="BTC"
          chain="Bitcoin"
        />
        <PriceChart
          cryptocurrency="ETH"
          chain="Ethereum"
        />
      </div>
    </div>
  );
};

export default Portfolio;