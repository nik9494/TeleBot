import React from 'react';
import { User } from '../../types';

const FemaleDashboard = () => {
  const mockUser: User = {
    id: 1,
    username: 'Anna',
    role: 'female',
    uniqueCode: 'ANNA123',
    balance: 1500
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome, {mockUser.username}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Your Unique Code</p>
            <p className="text-2xl font-bold text-blue-600">{mockUser.uniqueCode}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Current Balance</p>
            <p className="text-2xl font-bold text-green-600">{mockUser.balance} Stars</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FemaleDashboard;