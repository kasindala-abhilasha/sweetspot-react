// components/AdminDashboard/ActivityLog.jsx
import React from 'react';

const ActivityLog = () => {
  const logs = [
    'Satvika added “Red Velvet Deluxe”',
    'Darshini deleted “Choco Lava”',
    'Abhilasha updated “Sweet Haven” delivery time',
    'Bhavani added store “CakeBae”',
    'Lasya modified stock info for “Crème Cakery”'
  ];

  return (
    <div className="bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">📝 Activity Log</h3>
      <ul className="space-y-2 text-sm max-h-64 overflow-y-auto">
        {logs.map((log, index) => (
          <li key={index} className="p-2 rounded bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-100">
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
