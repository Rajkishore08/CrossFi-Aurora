import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getHistoricalPriceData } from '../../lib/priceData';
import { Cryptocurrency, Chain } from '../../types';
import Card from '../ui/Card';
import Select from '../ui/Select';
import Spinner from '../ui/Spinner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PriceChartProps {
  cryptocurrency: Cryptocurrency;
  chain: Chain;
  className?: string;
}

type TimeFrame = '1d' | '1w' | '1m' | '3m' | '1y';

const PriceChart: React.FC<PriceChartProps> = ({
  cryptocurrency,
  chain,
  className = '',
}) => {
  const [timeframe, setTimeframe] = useState<TimeFrame>('1d');
  const [chartData, setChartData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getHistoricalPriceData(cryptocurrency, chain, timeframe);
        
        const labels = data.map((item: any) => {
          const date = new Date(item.timestamp);
          if (timeframe === '1d') {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          } else {
            return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
          }
        });
        
        const prices = data.map((item: any) => item.price);
        
        setChartData({
          labels,
          datasets: [
            {
              label: `${cryptocurrency} Price (${chain})`,
              data: prices,
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.5)',
              tension: 0.2,
            },
          ],
        });
      } catch (error) {
        console.error('Failed to fetch chart data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [cryptocurrency, chain, timeframe]);

  const timeframeOptions = [
    { value: '1d', label: '1 Day' },
    { value: '1w', label: '1 Week' },
    { value: '1m', label: '1 Month' },
    { value: '3m', label: '3 Months' },
    { value: '1y', label: '1 Year' },
  ];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.y.toFixed(2)}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: function(value: any) {
            return '$' + value;
          },
        },
      },
    },
  };

  return (
    <Card className={className}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">{cryptocurrency} Price Chart</h3>
        <Select
          options={timeframeOptions}
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value as TimeFrame)}
          className="w-32"
        />
      </div>
      
      <div className="h-64">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <Spinner />
          </div>
        ) : chartData ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            No data available
          </div>
        )}
      </div>
    </Card>
  );
};

export default PriceChart;