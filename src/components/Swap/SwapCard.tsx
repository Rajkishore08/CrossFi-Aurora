import React, { useState } from 'react';
import { ArrowDown, Settings } from 'lucide-react';
import { tokens } from '../../data/mockData';

const SwapCard: React.FC = () => {
  const [fromToken, setFromToken] = useState('FRAX');
  const [toToken, setToToken] = useState('AURORA');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [slippage, setSlippage] = useState('0.5');
  const [showSettings, setShowSettings] = useState(false);

  // Mock conversion rate
  const getConversionRate = (from: string, to: string) => {
    const fromTokenData = tokens.find(t => t.symbol === from);
    const toTokenData = tokens.find(t => t.symbol === to);
    
    if (fromTokenData && toTokenData) {
      return fromTokenData.price / toTokenData.price;
    }
    
    return 1;
  };

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFromAmount(value);
    
    if (value && !isNaN(parseFloat(value))) {
      const rate = getConversionRate(fromToken, toToken);
      setToAmount((parseFloat(value) * rate).toFixed(6));
    } else {
      setToAmount('');
    }
  };

  const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setToAmount(value);
    
    if (value && !isNaN(parseFloat(value))) {
      const rate = getConversionRate(toToken, fromToken);
      setFromAmount((parseFloat(value) * rate).toFixed(6));
    } else {
      setFromAmount('');
    }
  };

  const switchTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Swap Tokens</h2>
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="text-gray-500 hover:text-gray-700"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>
      
      {showSettings && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Swap Settings</h3>
          <div>
            <label htmlFor="slippage" className="block text-xs text-gray-500 mb-1">
              Slippage Tolerance
            </label>
            <div className="flex space-x-2">
              {['0.1', '0.5', '1.0'].map((value) => (
                <button
                  key={value}
                  onClick={() => setSlippage(value)}
                  className={`px-3 py-1 text-xs rounded-md ${
                    slippage === value 
                      ? 'bg-indigo-100 text-indigo-700 font-medium' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {value}%
                </button>
              ))}
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={slippage}
                  onChange={(e) => setSlippage(e.target.value)}
                  className="block w-16 pl-2 pr-6 py-1 text-xs border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <span className="absolute right-2 text-xs text-gray-500">%</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <label htmlFor="fromAmount" className="block text-sm font-medium text-gray-700">
            From
          </label>
          <span className="text-xs text-gray-500">
            Balance: {tokens.find(t => t.symbol === fromToken)?.balance || '0.00'}
          </span>
        </div>
        <div className="flex space-x-2">
          <select
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
            className="block w-1/3 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {tokens.map((token) => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
          <div className="relative flex-1">
            <input
              type="text"
              id="fromAmount"
              value={fromAmount}
              onChange={handleFromAmountChange}
              placeholder="0.00"
              className="block w-full pl-3 pr-12 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-indigo-600 font-medium"
              onClick={() => {
                const balance = tokens.find(t => t.symbol === fromToken)?.balance || '0';
                setFromAmount(balance.replace(/,/g, ''));
                const rate = getConversionRate(fromToken, toToken);
                setToAmount((parseFloat(balance.replace(/,/g, '')) * rate).toFixed(6));
              }}
            >
              MAX
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center my-4">
        <button 
          onClick={switchTokens}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <ArrowDown className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <label htmlFor="toAmount" className="block text-sm font-medium text-gray-700">
            To
          </label>
          <span className="text-xs text-gray-500">
            Balance: {tokens.find(t => t.symbol === toToken)?.balance || '0.00'}
          </span>
        </div>
        <div className="flex space-x-2">
          <select
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className="block w-1/3 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {tokens.map((token) => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="toAmount"
            value={toAmount}
            onChange={handleToAmountChange}
            placeholder="0.00"
            className="block flex-1 pl-3 pr-3 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      
      {fromAmount && toAmount && (
        <div className="bg-gray-50 p-3 rounded-md mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Rate</span>
            <span className="text-gray-900">
              1 {fromToken} = {getConversionRate(fromToken, toToken).toFixed(6)} {toToken}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Slippage Tolerance</span>
            <span className="text-gray-900">{slippage}%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Network Fee</span>
            <span className="text-gray-900">~$0.15</span>
          </div>
        </div>
      )}
      
      <button 
        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Swap
      </button>
    </div>
  );
};

export default SwapCard;