import React from 'react';
import PortfolioOverview from '../components/Dashboard/PortfolioOverview';
import TokenList from '../components/Dashboard/TokenList';
import AIAgentCard from '../components/Dashboard/AIAgentCard';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <PortfolioOverview />
        </div>
        <div>
          <AIAgentCard />
        </div>
      </div>
      
      <div className="mb-6">
        <TokenList />
      </div>
    </div>
  );
};

export default Dashboard;