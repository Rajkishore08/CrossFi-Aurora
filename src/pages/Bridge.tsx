import React from 'react';
import BridgeCard from '../components/Bridge/BridgeCard';

const Bridge: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Bridge Assets</h1>
      
      <div className="max-w-md mx-auto mb-8">
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
          <h2 className="text-lg font-medium text-indigo-800 mb-2">Cross-Chain Bridge</h2>
          <p className="text-sm text-indigo-700">
            Seamlessly move assets between Aurora, Ethereum, and NEAR networks.
            Our AI optimizes your bridge transactions for speed and cost efficiency.
          </p>
        </div>
      </div>
      
      <BridgeCard />
    </div>
  );
};

export default Bridge;