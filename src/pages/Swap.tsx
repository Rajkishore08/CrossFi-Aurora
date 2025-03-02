import React from 'react';
import SwapCard from '../components/Swap/SwapCard';

const Swap: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Swap Tokens</h1>
      
      <div className="max-w-md mx-auto mb-8">
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
          <h2 className="text-lg font-medium text-indigo-800 mb-2">AI-Powered Swaps</h2>
          <p className="text-sm text-indigo-700">
            Our AI agent analyzes multiple DEXs to find the best rates and lowest fees for your swaps.
            It automatically routes your transaction through the optimal path for maximum efficiency.
          </p>
        </div>
      </div>
      
      <SwapCard />
    </div>
  );
};

export default Swap;