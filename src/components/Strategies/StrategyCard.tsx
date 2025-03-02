import React from 'react';
import { ArrowRight, Shield, TrendingUp, Zap } from 'lucide-react';
import { StrategyData } from '../../types';

interface StrategyCardProps {
  strategy: StrategyData;
}

const StrategyCard: React.FC<StrategyCardProps> = ({ strategy }) => {
  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low':
        return <Shield className="h-5 w-5 text-green-500" />;
      case 'Medium':
        return <TrendingUp className="h-5 w-5 text-yellow-500" />;
      case 'High':
        return <Zap className="h-5 w-5 text-red-500" />;
      default:
        return <Shield className="h-5 w-5 text-green-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{strategy.name}</h3>
          <div className="flex items-center">
            {getRiskIcon(strategy.risk)}
            <span className="ml-1 text-sm text-gray-600">{strategy.risk} Risk</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{strategy.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Protocol</p>
            <p className="text-sm font-medium">{strategy.protocol}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">APY</p>
            <p className="text-lg font-bold text-indigo-600">{strategy.apy}%</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Tokens</p>
          <div className="flex space-x-1">
            {strategy.tokens.map((token) => (
              <span 
                key={token} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {token}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Currently Invested</p>
          <p className="text-sm font-medium">${strategy.invested.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4">
        <div className="flex justify-between">
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            View Details
          </button>
          <button className="inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-sm font-medium rounded-md">
            Invest <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;