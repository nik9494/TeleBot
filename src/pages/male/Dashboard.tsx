import React, { useState } from 'react';
import { Gift } from 'lucide-react';

const MaleDashboard = () => {
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [balance, setBalance] = useState(100);
  const [freeStars, setFreeStars] = useState(50);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Balance</h2>
          <button
            onClick={() => setShowGiftModal(true)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <Gift className="w-5 h-5" />
            <span>Claim Gift</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Available Stars</p>
            <p className="text-2xl font-bold text-blue-600">{balance}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Free Stars Available</p>
            <p className="text-2xl font-bold text-purple-600">{freeStars}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaleDashboard;