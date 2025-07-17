import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">📋 Recent Orders</h3>
      <ul className="space-y-3 max-h-64 overflow-y-auto">
        {orders.map((order, idx) => (
          <li key={idx} className="p-3 rounded-lg bg-pink-50 dark:bg-pink-900 text-sm">
            <div className="flex justify-between">
              <span><strong>{order.customer}</strong> ordered <strong>{order.item}</strong></span>
              <span className="text-xs text-gray-500 dark:text-gray-300">{order.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
