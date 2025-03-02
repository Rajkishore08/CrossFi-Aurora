import React from 'react';
import { BarChart, TrendingUp, TrendingDown } from 'lucide-react';
import { useAIAgentStore } from '../../store/aiAgentStore';

const PortfolioOverview: React.FC = () => {
  const { performance } = useAIAgentStore();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Portfolio Overview</h2>
        <BarChart className="h-5 w-5 text-indigo-600" />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">24h Change</p>
          <div className="flex items-center">
            <span className={`text-xl font-bold ${performance.daily >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {performance.daily >= 0 ? '+' : ''}{performance.daily}%
            </span>
            {performance.daily >= 0 ? (
              <TrendingUp className="h-4 w-4 text-green-600 ml-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600 ml-1" />
            )}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Weekly</p>
          <div className="flex items-center">
            <span className={`text-xl font-bold ${performance.weekly >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {performance.weekly >= 0 ? '+' : ''}{performance.weekly}%
            </span>
            {performance.weekly >= 0 ? (
              <TrendingUp className="h-4 w-4 text-green-600 ml-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600 ml-1" />
            )}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Monthly</p>
          <div className="flex items-center">
            <span className={`text-xl font-bold ${performance.monthly >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {performance.monthly >= 0 ? '+' : ''}{performance.monthly}%
            </span>
            {performance.monthly >= 0 ? (
              <TrendingUp className="h-4 w-4 text-green-600 ml-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600 ml-1" />
            )}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">All Time</p>
          <div className="flex items-center">
            <span className={`text-xl font-bold ${performance.allTime >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {performance.allTime >= 0 ? '+' : ''}{performance.allTime}%
            </span>
            {performance.allTime >= 0 ? (
              <TrendingUp className="h-4 w-4 text-green-600 ml-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600 ml-1" />
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="h-24 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 text-sm">Portfolio chart visualization would appear here</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;