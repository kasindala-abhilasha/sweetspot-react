import React from 'react';

const QuickActions = () => {
  return (
    <div className="bg-white dark:bg-gray-800 hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">⚙️ Quick Actions</h3>
      <div className="flex flex-col gap-3">
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-xl shadow-md transition font-semibold">
          Add New Store
        </button>
        <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-xl shadow-md transition font-semibold">
          Edit Store Info
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl shadow-md transition font-semibold">
          Delete Store
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
