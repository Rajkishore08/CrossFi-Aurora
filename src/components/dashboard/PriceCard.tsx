import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Card from '../ui/Card';

interface PriceCardProps {
  cryptocurrency: string;
  chain: string;
  price: number;
  change: number;
  className?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  cryptocurrency,
  chain,
  price,
  change,
  className = '',
}) => {
  const isPositive = change >= 0;

  return (
    <Card className={`${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{cryptocurrency}</h3>
          <p className="text-sm text-gray-500">{chain}</p>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span className="ml-1 text-sm">{change.toFixed(2)}%</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold">${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      </div>
    </Card>
  );
};

export default PriceCard;