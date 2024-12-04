import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { User, Statistics } from '../../types';

const TeamLeadDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Statistics['period']>('24h');
  
  const mockGirls: User[] = [
    { id: 1, username: 'Anna', role: 'female', uniqueCode: 'ANNA123', balance: 1500 },
    { id: 2, username: 'Maria', role: 'female', uniqueCode: 'MARIA456', balance: 2300 },
    { id: 3, username: 'Sofia', role: 'female', uniqueCode: 'SOFIA789', balance: 1800 }
  ];

  const mockStats = [
    { time: '00:00', earnings: 1200, actions: 24 },
    { time: '06:00', earnings: 1800, actions: 36 },
    { time: '12:00', earnings: 2400, actions: 48 },
    { time: '18:00', earnings: 3000, actions: 60 },
    { time: '24:00', earnings: 3600, actions: 72 }
  ];

  return (
    <div className="space-y-8">
      {/* Performance Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Performance Overview</h2>
        <div className="flex gap-4 mb-6">
          {(['1h', '12h', '24h', '1m'] as Statistics['period'][]).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg ${
                selectedPeriod === period
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
        <div className="h-[300px]">
          <LineChart width={800} height={300} data={mockStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="earnings"
              stroke="#3B82F6"
              name="Earnings"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="actions"
              stroke="#10B981"
              name="Actions"
            />
          </LineChart>
        </div>
      </div>

      {/* Active Girls */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Active Girls</h2>
        <div className="grid gap-6">
          {mockGirls.map((girl) => (
            <div
              key={girl.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  {girl.username[0]}
                </div>
                <div>
                  <h3 className="font-semibold">{girl.username}</h3>
                  <p className="text-sm text-gray-600">Code: {girl.uniqueCode}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-blue-600">{girl.balance} Stars</p>
                <button className="text-sm text-blue-500 hover:text-blue-600">
                  View Chats
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamLeadDashboard;