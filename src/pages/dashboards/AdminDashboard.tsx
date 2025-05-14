import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { FaUsers, FaUserShield, FaBook, FaCog, FaFileAlt, FaMoneyBillWave, FaLock, FaClipboardList, FaChartBar, FaHistory, FaBolt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface WidgetBoxProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  scrollable?: boolean;
}

const WidgetBox = ({ title, icon, children, action, className = '', scrollable = false }: WidgetBoxProps) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow p-4 mb-4 flex flex-col ${className}`} style={{ minHeight: 0 }}>
    <div className="flex items-center gap-2 mb-2 font-bold text-base text-blue-600 dark:text-blue-300">{icon}{title}</div>
    {scrollable ? (
      <div className="flex-1 min-h-0 overflow-y-auto">{children}</div>
    ) : (
      <div>{children}</div>
    )}
    {action && <div className="pt-2">{action}</div>}
  </div>
);

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Bảng Điều Khiển Quản Trị">
      <div className="hidden lg:grid grid-cols-3 gap-6 h-[calc(100vh-120px)]">
        {/* Cột 1 */}
        <div className="flex flex-col h-full min-h-0">
          <WidgetBox title="Tổng quan hệ thống" icon={<FaChartBar className="text-blue-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600" onClick={() => navigate('/admin/overview')}>Xem chi tiết</button>
          }>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Thống kê tổng quan hệ thống, số lượng người dùng, hoạt động gần đây...</div>
          </WidgetBox>
          <WidgetBox title="Tổng quan tài chính" icon={<FaMoneyBillWave className="text-yellow-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-yellow-500 text-white hover:bg-yellow-600" onClick={() => navigate('/admin/finance')}>Xem tài chính</button>
          }>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Tổng quan doanh thu, học phí, công nợ...</div>
          </WidgetBox>
          <WidgetBox title="Nhật ký hệ thống" icon={<FaHistory className="text-purple-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-purple-500 text-white hover:bg-purple-600" onClick={() => navigate('/admin/logs')}>Xem nhật ký</button>
          } scrollable>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Theo dõi hoạt động, log hệ thống, bảo mật...</div>
          </WidgetBox>
        </div>
        {/* Cột 2 */}
        <div className="flex flex-col h-full min-h-0">
          <WidgetBox title="Quản lý người dùng" icon={<FaUsers className="text-blue-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600" onClick={() => navigate('/admin/users')}>Quản lý người dùng</button>
          } scrollable>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Tạo, sửa, xóa, phân quyền người dùng...</div>
          </WidgetBox>
          <WidgetBox title="Quản lý vai trò & phân quyền" icon={<FaUserShield className="text-green-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-green-500 text-white hover:bg-green-600" onClick={() => navigate('/admin/roles')}>Quản lý vai trò</button>
          } scrollable>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Phân quyền, gán vai trò, quản lý quyền hạn...</div>
          </WidgetBox>
          <WidgetBox title="Quản lý khóa học" icon={<FaBook className="text-indigo-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-indigo-500 text-white hover:bg-indigo-600" onClick={() => navigate('/admin/courses')}>Quản lý khóa học</button>
          } scrollable>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Tạo, sửa, xóa, gán giáo viên cho khóa học...</div>
          </WidgetBox>
        </div>
        {/* Cột 3 */}
        <div className="flex flex-col h-full min-h-0">
          <WidgetBox title="Quản lý nội dung tĩnh" icon={<FaFileAlt className="text-yellow-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-yellow-500 text-white hover:bg-yellow-600" onClick={() => navigate('/admin/pages')}>Quản lý nội dung</button>
          } scrollable>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Quản lý trang tĩnh, tin tức, thông báo...</div>
          </WidgetBox>
          <WidgetBox title="Cấu hình hệ thống" icon={<FaCog className="text-blue-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600" onClick={() => navigate('/admin/settings')}>Cài đặt hệ thống</button>
          } scrollable>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Cấu hình chung, email, tích hợp dịch vụ...</div>
          </WidgetBox>
          <WidgetBox title="Sao lưu & bảo mật" icon={<FaLock className="text-red-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-red-500 text-white hover:bg-red-600" onClick={() => navigate('/admin/security')}>Bảo mật & sao lưu</button>
          } scrollable>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Quản lý bảo mật, sao lưu, phục hồi dữ liệu...</div>
          </WidgetBox>
        </div>
      </div>
      <div className="lg:hidden"><div className="text-center text-gray-500 py-10">Vui lòng sử dụng màn hình lớn hơn để xem dashboard đầy đủ.</div></div>
    </DashboardLayout>
  );
};

export default AdminDashboard; 