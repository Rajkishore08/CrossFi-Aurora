import React, { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { tokens } from '../../data/mockData';

const BridgeCard: React.FC = () => {
  const [fromNetwork, setFromNetwork] = useState('Aurora');
  const [toNetwork, setToNetwork] = useState('Ethereum');
  const [token, setToken] = useState('FRAX');
  const [amount, setAmount] = useState('');
  
  const networks = ['Aurora', 'Ethereum', 'NEAR'];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Bridge Assets</h2>
        <div className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">
          AI Optimized
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="fromNetwork" className="block text-sm font-medium text-gray-700 mb-1">
          From Network
        </label>
        <select
          id="fromNetwork"
          value={fromNetwork}
          onChange={(e) => setFromNetwork(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {networks.map((network) => (
            <option key={network} value={network}>
              {network}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex justify-center my-4">
        <ArrowRight className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="mb-6">
        <label htmlFor="toNetwork" className="block text-sm font-medium text-gray-700 mb-1">
          To Network
        </label>
        <select
          id="toNetwork"
          value={toNetwork}
          onChange={(e) => setToNetwork(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {networks.filter(n => n !== fromNetwork).map((network) => (
            <option key={network} value={network}>
              {network}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <label htmlFor="token" className="block text-sm font-medium text-gray-700">
            Token
          </label>
        </div>
        <select
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {tokens.map((t) => (
            <option key={t.symbol} value={t.symbol}>
              {t.symbol} - {t.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <span className="text-xs text-gray-500">
            Balance: {tokens.find(t => t.symbol === token)?.balance || '0.00'}
          </span>
        </div>
        <div className="relative">
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="block w-full pl-3 pr-12 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-indigo-600 font-medium"
            onClick={() => {
              const balance = tokens.find(t => t.symbol === token)?.balance || '0';
              setAmount(balance.replace(/,/g, ''));
            }}
          >
            MAX
          </button>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-md mb-6">
        <div className="flex">
          <Info className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-medium text-indigo-800 mb-1">AI-Optimized Bridge</h3>
            <p className="text-xs text-indigo-700">
              Our AI agent will automatically select the most efficient bridge path with the lowest fees and fastest confirmation time.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-3 rounded-md mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Estimated Fee</span>
          <span className="text-gray-900">~$2.50</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Estimated Time</span>
          <span className="text-gray-900">~5 minutes</span>
        </div>
      </div>
      
      <button 
        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Bridge Assets
      </button>
    </div>
  );
};

export default BridgeCard;