import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { useSettingsStore } from '../../store/settingsStore';
import { RiskPreference, Cryptocurrency, Chain } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Alert from '../ui/Alert';

const SettingsForm: React.FC = () => {
  const { settings, updateSettings, isLoading } = useSettingsStore();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formState, setFormState] = useState({
    riskPreference: settings.riskPreference,
    maxTransactionAmount: settings.maxTransactionAmount,
    enableAutomatedTrading: settings.enableAutomatedTrading,
    minProfitThreshold: settings.minProfitThreshold,
    preferredCryptocurrencies: settings.preferredCryptocurrencies,
    preferredChains: settings.preferredChains,
    notificationsEnabled: settings.notificationsEnabled,
  });
  
  useEffect(() => {
    setFormState({
      riskPreference: settings.riskPreference,
      maxTransactionAmount: settings.maxTransactionAmount,
      enableAutomatedTrading: settings.enableAutomatedTrading,
      minProfitThreshold: settings.minProfitThreshold,
      preferredCryptocurrencies: settings.preferredCryptocurrencies,
      preferredChains: settings.preferredChains,
      notificationsEnabled: settings.notificationsEnabled,
    });
  }, [settings]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formState);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormState(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'maxTransactionAmount' || name === 'minProfitThreshold') {
      setFormState(prev => ({ ...prev, [name]: parseFloat(value) }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>, field: string) => {
    const options = e.target.options;
    const selectedValues = [];
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    
    setFormState(prev => ({ ...prev, [field]: selectedValues }));
  };
  
  const riskOptions = [
    { value: 'conservative', label: 'Conservative' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'aggressive', label: 'Aggressive' },
  ];
  
  const cryptocurrencyOptions = [
    { value: 'BTC', label: 'Bitcoin (BTC)' },
    { value: 'ETH', label: 'Ethereum (ETH)' },
    { value: 'SOL', label: 'Solana (SOL)' },
    { value: 'XRP', label: 'Ripple (XRP)' },
    { value: 'DOGE', label: 'Dogecoin (DOGE)' },
    { value: 'TRUMP', label: 'Trump (TRUMP)' },
  ];
  
  const chainOptions = [
    { value: 'Bitcoin', label: 'Bitcoin' },
    { value: 'Ethereum', label: 'Ethereum' },
    { value: 'Solana', label: 'Solana' },
    { value: 'Ripple', label: 'Ripple' },
    { value: 'Dogecoin', label: 'Dogecoin' },
    { value: 'Trump', label: 'Trump' },
  ];
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSuccess && (
        <Alert variant="success" title="Settings Updated">
          Your settings have been successfully updated.
        </Alert>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Select
            label="Risk Preference"
            name="riskPreference"
            options={riskOptions}
            value={formState.riskPreference}
            onChange={handleChange}
            helperText="This determines how aggressively the system will trade on your behalf."
          />
        </div>
        
        <div>
          <Input
            label="Maximum Transaction Amount ($)"
            name="maxTransactionAmount"
            type="number"
            min="0"
            step="100"
            value={formState.maxTransactionAmount}
            onChange={handleChange}
            helperText="The maximum amount to use for a single trade."
          />
        </div>
        
        <div>
          <Input
            label="Minimum Profit Threshold (%)"
            name="minProfitThreshold"
            type="number"
            min="0"
            step="0.1"
            value={formState.minProfitThreshold}
            onChange={handleChange}
            helperText="Minimum percentage difference required to execute a trade."
          />
        </div>
        
        <div className="flex items-center space-x-2 pt-6">
          <input
            id="enableAutomatedTrading"
            name="enableAutomatedTrading"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            checked={formState.enableAutomatedTrading}
            onChange={handleChange}
          />
          <label htmlFor="enableAutomatedTrading" className="text-sm font-medium text-gray-700">
            Enable Automated Trading
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <input
            id="notificationsEnabled"
            name="notificationsEnabled"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            checked={formState.notificationsEnabled}
            onChange={handleChange}
          />
          <label htmlFor="notificationsEnabled" className="text-sm font-medium text-gray-700">
            Enable Notifications
          </label>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Cryptocurrencies
          </label>
          <select
            multiple
            className="form-multiselect block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formState.preferredCryptocurrencies}
            onChange={(e) => handleMultiSelect(e, 'preferredCryptocurrencies')}
          >
            {cryptocurrencyOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Hold Ctrl (or Cmd) to select multiple options
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Chains
          </label>
          <select
            multiple
            className="form-multiselect block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formState.preferredChains}
            onChange={(e) => handleMultiSelect(e, 'preferredChains')}
          >
            {chainOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Hold Ctrl (or Cmd) to select multiple options
          </p>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button
          type="submit"
          isLoading={isLoading}
          leftIcon={<Save size={16} />}
        >
          Save Settings
        </Button>
      </div>
    </form>
  );
};

export default SettingsForm;