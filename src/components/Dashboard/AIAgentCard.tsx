import React from 'react';
import { Bot, Power } from 'lucide-react';
import { useAIAgentStore } from '../../store/aiAgentStore';
import { aiActions } from '../../data/mockData';

const AIAgentCard: React.FC = () => {
  const { isActive, strategy, toggleActive, setStrategy } = useAIAgentStore();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">AI Trading Agent</h2>
        <Bot className="h-5 w-5 text-indigo-600" />
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className={`text-sm font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
            {isActive ? 'Active' : 'Inactive'}
          </p>
        </div>
        
        <button 
          onClick={toggleActive}
          className={`relative inline-flex h-6 w-11 items-center rounded-full ${
            isActive ? 'bg-indigo-600' : 'bg-gray-200'
          }`}
        >
          <span className="sr-only">Toggle AI Agent</span>
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              isActive ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      
      <div className="mb-6">
        <label htmlFor="strategy" className="block text-sm font-medium text-gray-700 mb-1">
          Trading Strategy
        </label>
        <select
          id="strategy"
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="Conservative">Conservative (Low Risk)</option>
          <option value="Balanced">Balanced (Medium Risk)</option>
          <option value="Aggressive">Aggressive (High Risk)</option>
          <option value="Custom">Custom Strategy</option>
        </select>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Recent AI Actions</h3>
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {aiActions.map((action, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-md">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{action.date}</span>
                <span className={action.result.includes('+') ? 'text-green-600' : action.result.includes('-') ? 'text-red-600' : 'text-gray-600'}>
                  {action.result}
                </span>
              </div>
              <p className="text-sm text-gray-700">{action.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAgentCard;