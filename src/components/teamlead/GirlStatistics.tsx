import React from 'react';
import { Statistics } from '../../types';

interface GirlStatsProps {
  girlId: number;
  period: Statistics['period'];
}

const GirlStatistics: React.FC<GirlStatsProps> = ({ girlId, period }) => {
  const mockStats = {
    totalEarnings: 3500,
    totalActions: 150,
    averageResponseTime: '2.5 min',
    activeChats: 8
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-bold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Earnings</p>
          <p className="text-2xl font-bold text-blue-600">{mockStats.totalEarnings}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Actions</p>
          <p className="text-2xl font-bold text-green-600">{mockStats.totalActions}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Avg Response Time</p>
          <p className="text-2xl font-bold text-purple-600">{mockStats.averageResponseTime}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Active Chats</p>
          <p className="text-2xl font-bold text-yellow-600">{mockStats.activeChats}</p>
        </div>
      </div>
    </div>
  );
};

export default GirlStatistics;