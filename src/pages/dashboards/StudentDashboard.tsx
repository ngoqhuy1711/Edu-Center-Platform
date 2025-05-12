import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const StudentDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Student Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Enrolled Courses Overview */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">My Courses</h2>
          <div className="space-y-4">
            {/* Course list will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading enrolled courses...</p>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Upcoming Schedule</h2>
          <div className="space-y-4">
            {/* Schedule will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading schedule...</p>
          </div>
        </div>

        {/* Recent Notifications */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Notifications</h2>
          <div className="space-y-4">
            {/* Notifications will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading notifications...</p>
          </div>
        </div>

        {/* Pending Assignments */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Pending Assignments</h2>
          <div className="space-y-4">
            {/* Assignments will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading assignments...</p>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Learning Progress</h2>
          <div className="space-y-4">
            {/* Progress will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading progress...</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
              View All Courses
            </button>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200">
              Submit Assignment
            </button>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard; 