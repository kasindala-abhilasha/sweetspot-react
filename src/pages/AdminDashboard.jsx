// Final upgraded AdminDashboard.jsx setup with sidebar toggle, clean colors, glow effects and dark mode
import React, { useState, useEffect } from 'react';
import DashboardHeader from '../components/AdminDashboard/DashboardHeader';
import Sidebar from '../components/AdminDashboard/Sidebar';
import DelightBanner from '../components/AdminDashboard/DelightBanner';
import AnalyticsPreview from '../components/AdminDashboard/AnalyticsPreview';
import QuickActions from '../components/AdminDashboard/QuickActions';
import StoreStats from '../components/AdminDashboard/StoreStats';
import OrderList from '../components/AdminDashboard/OrderList';
import ActivityLog from '../components/AdminDashboard/ActivityLog';
import ChartWidget from '../components/AdminDashboard/ChartWidget';
import DarkModeToggle from '../components/AdminDashboard/DarkModeToggle';
import { motion } from 'framer-motion';

import {
  mockOrders,
  mockStoreStats,
  mockActivityLogs,
  mockAnalytics,
} from '../data/mockData';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [storeStats, setStoreStats] = useState([]);
  const [activityLogs, setActivityLogs] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    setTimeout(() => {
      setOrders(mockOrders);
      setStoreStats(mockStoreStats);
      setActivityLogs(mockActivityLogs);
      setAnalytics(mockAnalytics);
    }, 500);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex bg-gradient-to-b from-white via-pink-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 min-h-screen text-black dark:text-white">
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <motion.main
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={`transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-0'} w-full p-4`}
        >
          <div className="flex justify-between items-center mb-4">
            <DashboardHeader />
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          <DelightBanner />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          >
            <AnalyticsPreview analytics={analytics} />
            <QuickActions />
            <StoreStats stats={storeStats} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <ChartWidget />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          >
            <OrderList orders={orders} />
            <ActivityLog logs={activityLogs} />
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
};

export default AdminDashboard;
