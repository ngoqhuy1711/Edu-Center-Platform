import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const AdminDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* System Overview */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">System Overview</h2>
          <div className="space-y-4">
            {/* System stats will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading system statistics...</p>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">User Management</h2>
          <div className="space-y-4">
            {/* User management interface will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading user data...</p>
          </div>
        </div>

        {/* Course Management */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Course Management</h2>
          <div className="space-y-4">
            {/* Course management interface will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading course data...</p>
          </div>
        </div>

        {/* System Configuration */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">System Configuration</h2>
          <div className="space-y-4">
            {/* Configuration options will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading configuration...</p>
          </div>
        </div>

        {/* System Logs */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">System Logs</h2>
          <div className="space-y-4">
            {/* System logs will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading system logs...</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
              Manage Users
            </button>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200">
              System Settings
            </button>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors duration-200">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard; 