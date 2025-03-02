import React, { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { usePriceStore } from '../store/priceStore';
import { useTransactionStore } from '../store/transactionStore';
import { useSettingsStore } from '../store/settingsStore';
import { analyzeAndExecuteTrades } from '../lib/aiTrading';
import PriceCard from '../components/dashboard/PriceCard';
import PriceChart from '../components/dashboard/PriceChart';
import ArbitrageTable from '../components/dashboard/ArbitrageTable';
import PortfolioSummary from '../components/dashboard/PortfolioSummary';
import Button from '../components/ui/Button';
import Alert from '../components/ui/Alert';

const Dashboard: React.FC = () => {
  const { priceData, opportunities, fetchPriceData, fetchOpportunities, isLoading, lastUpdated } = usePriceStore();
  const { executeTrade } = useTransactionStore();
  const { settings } = useSettingsStore();
  const [isAutoTrading, setIsAutoTrading] = useState(false);
  const [autoTradeAlert, setAutoTradeAlert] = useState<string | null>(null);
  
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
  
  useEffect(() => {
    fetchPriceData();
    fetchOpportunities();
    
    // Set up polling for price data and opportunities
    const intervalId = setInterval(() => {
      fetchPriceData();
      fetchOpportunities();
    }, 30000); // Every 30 seconds
    
    return () => clearInterval(intervalId);
  }, [fetchPriceData, fetchOpportunities]);
  
  const handleRefresh = () => {
    fetchPriceData();
    fetchOpportunities();
  };
  
  const handleExecuteTrade = (opportunity: any) => {
    executeTrade(
      opportunity.fromChain,
      opportunity.toChain,
      opportunity.cryptocurrency,
      100 // Default amount
    );
  };
  
  const handleAutoTrade = async () => {
    if (!settings.enableAutomatedTrading) {
      setAutoTradeAlert('Automated trading is disabled in settings. Please enable it first.');
      setTimeout(() => setAutoTradeAlert(null), 5000);
      return;
    }
    
    setIsAutoTrading(true);
    try {
      const trades = await analyzeAndExecuteTrades(opportunities, settings);
      setAutoTradeAlert(`Successfully executed ${trades.length} trades based on AI analysis.`);
    } catch (error) {
      setAutoTradeAlert('Failed to execute automated trades. Please try again.');
    } finally {
      setIsAutoTrading(false);
      setTimeout(() => setAutoTradeAlert(null), 5000);
    }
  };
  
  // Generate mock price changes
  const getPriceChange = () => {
    return (Math.random() * 10) - 5; // Between -5% and +5%
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={handleRefresh}
            leftIcon={<RefreshCw size={16} />}
            isLoading={isLoading}
          >
            Refresh
          </Button>
          <Button
            onClick={handleAutoTrade}
            isLoading={isAutoTrading}
          >
            Auto-Trade with AI
          </Button>
        </div>
      </div>
      
      {autoTradeAlert && (
        <Alert
          variant={autoTradeAlert.includes('Failed') ? 'error' : 'success'}
          title="Automated Trading"
          onClose={() => setAutoTradeAlert(null)}
          className="mb-6"
        >
          {autoTradeAlert}
        </Alert>
      )}
      
      {lastUpdated && (
        <p className="text-sm text-gray-500 mb-6">
          Last updated: {new Date(lastUpdated).toLocaleString()}
        </p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {priceData && (
          <>
            <PriceCard
              cryptocurrency="BTC"
              chain="Bitcoin"
              price={priceData.BTC.Bitcoin || 0}
              change={getPriceChange()}
            />
            <PriceCard
              cryptocurrency="ETH"
              chain="Ethereum"
              price={priceData.ETH.Ethereum || 0}
              change={getPriceChange()}
            />
            <PriceCard
              cryptocurrency="SOL"
              chain="Solana"
              price={priceData.SOL.Solana || 0}
              change={getPriceChange()}
            />
          </>
        )}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <PriceChart
            cryptocurrency="BTC"
            chain="Bitcoin"
            className="h-full"
          />
        </div>
        <div>
          <PortfolioSummary
            portfolio={mockPortfolio}
            className="h-full"
          />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Arbitrage Opportunities</h2>
        </div>
        <div className="p-0">
          <ArbitrageTable
            opportunities={opportunities}
            onExecuteTrade={handleExecuteTrade}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;