import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const TeacherDashboard: React.FC = () => {
  return (
    <DashboardLayout title="Teacher Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Teaching Courses */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">My Teaching Courses</h2>
          <div className="space-y-4">
            {/* Course list will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading courses...</p>
          </div>
        </div>

        {/* Teaching Schedule */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Teaching Schedule</h2>
          <div className="space-y-4">
            {/* Schedule will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading schedule...</p>
          </div>
        </div>

        {/* Pending Submissions */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Pending Submissions</h2>
          <div className="space-y-4">
            {/* Submissions will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading submissions...</p>
          </div>
        </div>

        {/* Student Performance */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Student Performance</h2>
          <div className="space-y-4">
            {/* Performance metrics will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading performance data...</p>
          </div>
        </div>

        {/* Course Materials */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Course Materials</h2>
          <div className="space-y-4">
            {/* Materials will be populated here */}
            <p className="text-gray-600 dark:text-gray-400">Loading materials...</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
              Create New Assignment
            </button>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200">
              Upload Materials
            </button>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors duration-200">
              Schedule Class
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard; 