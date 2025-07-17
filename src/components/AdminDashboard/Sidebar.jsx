// components/AdminDashboard/Sidebar.jsx
import React from 'react';
import { FaChartBar, FaStore, FaTachometerAlt, FaSignOutAlt, FaBars, FaUserCircle } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Floating Toggle Button when Sidebar is hidden */}
      {!sidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <FaBars />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-white dark:bg-gray-900 shadow-lg z-40 flex flex-col justify-between transition-all duration-300 ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
      >
        <div>
          {/* Admin Profile Header */}
          <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
            <FaUserCircle size={28} className="text-pink-600" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Admin</p>
              <h2 className="text-md font-bold text-pink-600">Abhilasha</h2>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6 px-4">
            <ul className="space-y-3 text-base font-semibold text-gray-800 dark:text-white">
              <li className="hover:bg-pink-100 dark:hover:bg-pink-900 p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-all">
                <FaTachometerAlt /> Dashboard
              </li>
              <li className="hover:bg-pink-100 dark:hover:bg-pink-900 p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-all">
                <FaStore /> Stores
              </li>
              <li className="hover:bg-pink-100 dark:hover:bg-pink-900 p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-all">
                <FaChartBar /> Analytics
              </li>
            </ul>
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
