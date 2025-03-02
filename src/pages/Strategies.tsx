import React from 'react';
import StrategyCard from '../components/Strategies/StrategyCard';
import { strategies } from '../data/mockData';

const Strategies: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">AI Investment Strategies</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium">
          Create Custom Strategy
        </button>
      </div>
      
      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-8">
        <h2 className="text-lg font-medium text-indigo-800 mb-2">AI-Powered Investment Strategies</h2>
        <p className="text-sm text-indigo-700">
          Our AI analyzes market conditions, on-chain data, and sentiment to optimize your investment strategies.
          Each strategy is continuously monitored and adjusted to maximize returns while managing risk according to your preferences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.map((strategy) => (
          <StrategyCard key={strategy.id} strategy={strategy} />
        ))}
      </div>
    </div>
  );
};

export default Strategies;