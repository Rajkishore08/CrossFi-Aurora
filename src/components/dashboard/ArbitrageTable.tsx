import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { ArbitrageOpportunity } from '../../types';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface ArbitrageTableProps {
  opportunities: ArbitrageOpportunity[];
  onExecuteTrade: (opportunity: ArbitrageOpportunity) => void;
  isLoading?: boolean;
}

const ArbitrageTable: React.FC<ArbitrageTableProps> = ({
  opportunities,
  onExecuteTrade,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (opportunities.length === 0) {
    return (
      <div className="text-center py-8">
        <TrendingUp className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No opportunities</h3>
        <p className="mt-1 text-sm text-gray-500">
          No arbitrage opportunities found at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cryptocurrency
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Route
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price Difference
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Profit %
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Est. Profit
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {opportunities.map((opportunity) => (
            <tr key={opportunity.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge variant="primary">{opportunity.cryptocurrency}</Badge>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span>{opportunity.fromChain}</span>
                  <ArrowRight className="mx-2 h-4 w-4 text-gray-400" />
                  <span>{opportunity.toChain}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${opportunity.priceDifference.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-green-600">
                +{opportunity.percentageDifference.toFixed(2)}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${opportunity.estimatedProfit.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <Button
                  size="sm"
                  onClick={() => onExecuteTrade(opportunity)}
                >
                  Execute
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArbitrageTable;