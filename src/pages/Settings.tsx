import React from 'react';
import SettingsForm from '../components/settings/SettingsForm';

const Settings: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">
          Configure your trading preferences and account settings.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <SettingsForm />
      </div>
    </div>
  );
};

export default Settings;