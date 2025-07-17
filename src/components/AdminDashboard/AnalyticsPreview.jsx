import React from 'react';

const AnalyticsPreview = ({ analytics }) => {
  return (
    <div className="bg-white dark:bg-gray-800 hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">📊 Today's Summary</h3>
      <ul className="space-y-2">
        <li>🧁 Orders: <strong>{analytics.totalOrders}</strong></li>
        <li>💸 Revenue: ₹<strong>{analytics.revenue}</strong></li>
        <li>🏆 Best Seller: <strong>{analytics.bestCake}</strong></li>
        <li>🚚 In Progress: <strong>{analytics.inProgress}</strong></li>
      </ul>
    </div>
  );
};

export default AnalyticsPreview;
