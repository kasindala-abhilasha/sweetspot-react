// components/AdminDashboard/StoreStats.jsx
import React from 'react';

const StoreStats = () => {
  return (
    <div className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">🏪 Store Overview</h3>
      <ul className="space-y-2">
        <li>Total Stores: <strong>15</strong></li>
        <li>Active Stores: <strong>12</strong></li>
        <li>Low Stock Alerts: <strong>3 items</strong></li>
      </ul>
    </div>
  );
};

export default StoreStats;
