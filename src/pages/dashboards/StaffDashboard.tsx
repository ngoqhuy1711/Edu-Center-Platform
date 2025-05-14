import React, { useState } from 'react';
import { FaUserGraduate, FaClipboardList, FaEnvelope, FaQuestionCircle, FaChalkboardTeacher, FaMoneyBillWave } from 'react-icons/fa';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';

// Giả lập dữ liệu
const enrollments = [
  { id: 1, student: 'Nguyễn Văn A', course: 'Toán 10A1', status: 'Chờ duyệt' },
  { id: 2, student: 'Trần Thị B', course: 'Vật Lý 10A1', status: 'Đã duyệt' },
];
const students = [
  { id: 1, name: 'Nguyễn Văn A', course: 'Toán 10A1' },
  { id: 2, name: 'Trần Thị B', course: 'Vật Lý 10A1' },
];
const teachers = [
  { id: 1, name: 'Thầy Nam', subject: 'Toán' },
  { id: 2, name: 'Cô Lan', subject: 'Vật Lý' },
];
const payments = [
  { id: 1, desc: 'Học phí Toán 10A1', status: 'Chưa thanh toán', amount: '1.200.000đ' },
];
const notifications = [
  { id: 1, title: 'Thông báo hệ thống', content: 'Có yêu cầu ghi danh mới.', date: '2024-06-18' },
];
const supports = [
  { id: 1, subject: 'Hỗ trợ đăng ký', status: 'Đang xử lý', date: '2024-06-15' },
];
const today = new Date();
function getMonthDays(year: number, month: number) {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
const monthDays = getMonthDays(today.getFullYear(), today.getMonth());
const events = [
  { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1), type: 'Lịch làm việc', title: 'Xử lý ghi danh', desc: '08:00 - 09:30' },
];

type WidgetBoxProps = { title: string; icon: React.ReactNode; children: React.ReactNode; className?: string; action?: React.ReactNode; scrollable?: boolean };
const WidgetBox = ({ title, icon, children, className = '', action, scrollable = false }: WidgetBoxProps) => (
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

const cardClass = "w-full bg-blue-50 dark:bg-gray-700 rounded-lg p-3 flex flex-col items-start mb-2 user-select-none";
const cardClassGreen = "w-full bg-green-50 dark:bg-gray-700 rounded-lg p-3 flex flex-col items-start mb-2 user-select-none";

const StaffDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout title="Bảng Điều Khiển Nhân Viên">
      <div className="hidden lg:grid grid-cols-3 gap-6 h-[calc(100vh-120px)]">
        {/* Cột 1 */}
        <div className="flex flex-col h-full min-h-0">
          <WidgetBox title="Tổng quan" icon={<FaUserGraduate className="text-blue-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600" onClick={() => navigate('/staff/overview')}>Xem chi tiết</button>
          }>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <div className="text-lg font-bold text-blue-600">{students.length}</div>
                <div className="text-xs text-gray-500">Học viên</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-600">{teachers.length}</div>
                <div className="text-xs text-gray-500">Giáo viên</div>
              </div>
              <div>
                <div className="text-lg font-bold text-yellow-500">{enrollments.filter(e => e.status === 'Chờ duyệt').length}</div>
                <div className="text-xs text-gray-500">Ghi danh chờ</div>
              </div>
              <div>
                <div className="text-lg font-bold text-indigo-600">{notifications.length}</div>
                <div className="text-xs text-gray-500">Thông báo</div>
              </div>
            </div>
          </WidgetBox>
          <WidgetBox title="Thông báo mới" icon={<FaEnvelope className="text-indigo-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-indigo-500 text-white hover:bg-indigo-600" onClick={() => navigate('/staff/notifications')}>Xem tất cả</button>
          } scrollable>
            <div className="space-y-1">
              {notifications.slice(0, 3).map(n => (<div key={n.id} className="text-xs text-gray-700 dark:text-gray-200 truncate">• {n.title}</div>))}
            </div>
          </WidgetBox>
          <WidgetBox title="Hỗ trợ" icon={<FaQuestionCircle className="text-indigo-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600" onClick={() => navigate('/staff/support')}>Quản lý hỗ trợ</button>
          } scrollable>
            <div className="space-y-1">
              {supports.slice(0, 2).map(s => (<div key={s.id} className="flex items-center justify-between text-xs text-gray-700 dark:text-gray-200"><span>{s.subject} ({s.status})</span><button className="ml-2 px-2 py-0.5 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600">Chi tiết</button></div>))}
            </div>
          </WidgetBox>
        </div>
        {/* Cột 2 */}
        <div className="flex flex-col h-full min-h-0">
          <WidgetBox title="Yêu cầu ghi danh" icon={<FaClipboardList className="text-green-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-green-500 text-white hover:bg-green-600" onClick={() => navigate('/staff/enrollments')}>Quản lý ghi danh</button>
          } scrollable>
            <div className="flex-1 min-h-0 max-h-full overflow-y-auto pr-1">
              {enrollments.map(e => (
                <div key={e.id} className={cardClassGreen}>
                  <div className="flex items-center gap-2 mb-1">
                    <FaClipboardList className="text-2xl text-green-500" />
                    <span className="font-semibold dark:text-white">{e.student} - {e.course}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Trạng thái: {e.status}</div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold" onClick={() => alert('Xử lý ghi danh!')}>Xử lý</button>
                </div>
              ))}
            </div>
          </WidgetBox>
          <WidgetBox title="Quản lý học viên" icon={<FaUserGraduate className="text-blue-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600" onClick={() => navigate('/staff/students')}>Quản lý học viên</button>
          } scrollable>
            <div className="flex-1 min-h-0 max-h-full overflow-y-auto pr-1">
              {students.map(s => (
                <div key={s.id} className={cardClass}>
                  <div className="flex items-center gap-2 mb-1">
                    <FaUserGraduate className="text-2xl text-blue-500" />
                    <span className="font-semibold dark:text-white">{s.name}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Khóa: {s.course}</div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold" onClick={() => alert('Xem chi tiết học viên!')}>Chi tiết</button>
                </div>
              ))}
            </div>
          </WidgetBox>
          <WidgetBox title="Quản lý giáo viên" icon={<FaChalkboardTeacher className="text-green-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-green-500 text-white hover:bg-green-600" onClick={() => navigate('/staff/teachers')}>Quản lý giáo viên</button>
          } scrollable>
            <div className="flex-1 min-h-0 max-h-full overflow-y-auto pr-1">
              {teachers.map(t => (
                <div key={t.id} className={cardClassGreen}>
                  <div className="flex items-center gap-2 mb-1">
                    <FaChalkboardTeacher className="text-2xl text-green-500" />
                    <span className="font-semibold dark:text-white">{t.name}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Môn: {t.subject}</div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold" onClick={() => alert('Xem chi tiết giáo viên!')}>Chi tiết</button>
                </div>
              ))}
            </div>
          </WidgetBox>
        </div>
        {/* Cột 3 */}
        <div className="flex flex-col h-full min-h-0">
          <WidgetBox title="Thanh toán" icon={<FaMoneyBillWave className="text-yellow-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-yellow-500 text-white hover:bg-yellow-600" onClick={() => navigate('/staff/payments')}>Quản lý thanh toán</button>
          } scrollable>
            <div className="space-y-1">
              {payments.slice(0, 3).map(p => (<div key={p.id} className="flex items-center justify-between text-xs text-gray-700 dark:text-gray-200"><span>{p.desc} ({p.status})</span><button className="ml-2 px-2 py-0.5 rounded text-xs font-semibold bg-yellow-500 text-white hover:bg-yellow-600">{p.status}</button></div>))}
            </div>
          </WidgetBox>
        </div>
      </div>
      <div className="lg:hidden"><div className="text-center text-gray-500 py-10">Vui lòng sử dụng màn hình lớn hơn để xem dashboard đầy đủ.</div></div>
    </DashboardLayout>
  );
};

export default StaffDashboard; 