import React from 'react';
import SignupForm from '../components/auth/SignupForm';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <SignupForm />
    </div>
  );
};

export default Signup;