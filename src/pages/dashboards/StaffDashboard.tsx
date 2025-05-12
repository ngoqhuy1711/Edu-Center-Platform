import React from 'react';

const StaffDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Staff Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Enrollment Requests */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Enrollment Requests</h2>
          <div className="space-y-4">
            {/* Enrollment requests will be populated here */}
            <p className="text-gray-600">Loading enrollment requests...</p>
          </div>
        </div>

        {/* Student Management */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Student Management</h2>
          <div className="space-y-4">
            {/* Student list will be populated here */}
            <p className="text-gray-600">Loading student data...</p>
          </div>
        </div>

        {/* Teacher Management */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Teacher Management</h2>
          <div className="space-y-4">
            {/* Teacher list will be populated here */}
            <p className="text-gray-600">Loading teacher data...</p>
          </div>
        </div>

        {/* Course Schedule */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Course Schedule</h2>
          <div className="space-y-4">
            {/* Schedule will be populated here */}
            <p className="text-gray-600">Loading schedule...</p>
          </div>
        </div>

        {/* Payment Management */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Payment Management</h2>
          <div className="space-y-4">
            {/* Payment information will be populated here */}
            <p className="text-gray-600">Loading payment data...</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Process Enrollment
            </button>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Record Payment
            </button>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              Generate Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard; 