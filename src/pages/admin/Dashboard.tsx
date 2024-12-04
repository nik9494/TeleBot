import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AdminDashboard = () => {
  const mockData = [
    { name: 'Today', earnings: 4000 },
    { name: 'Yesterday', earnings: 3000 },
    { name: 'Last Week', earnings: 15000 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Total Earnings</h2>
        <div className="h-[300px]">
          <BarChart width={600} height={300} data={mockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="earnings" fill="#3B82F6" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;