import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Mon', orders: 24 },
  { name: 'Tue', orders: 35 },
  { name: 'Wed', orders: 45 },
  { name: 'Thu', orders: 32 },
  { name: 'Fri', orders: 51 },
  { name: 'Sat', orders: 62 },
  { name: 'Sun', orders: 38 },
];

const ChartWidget = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">📈 Weekly Order Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="orders" stroke="#ec4899" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartWidget;
