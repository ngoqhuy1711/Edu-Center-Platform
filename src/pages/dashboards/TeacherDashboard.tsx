import React, { useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { FaBook, FaClipboardList, FaFileAlt, FaCalendarAlt, FaBell, FaUserGraduate, FaPercent, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';

// Giả lập dữ liệu
const myCourses = [
  { id: 1, name: 'Toán 10A1', students: 32, progress: 80 },
  { id: 2, name: 'Vật Lý 10A1', students: 28, progress: 60 },
];
const assignments = [
  { id: 1, title: 'Chấm bài tập Vật Lý', due: '2024-06-20', status: 'Chưa chấm' },
  { id: 2, title: 'Chấm bài tập Toán', due: '2024-06-22', status: 'Đã chấm' },
];
const notifications = [
  { id: 1, title: 'Thông báo hệ thống', content: 'Có bài nộp mới.', date: '2024-06-18' },
];
const materials = [
  { id: 1, name: 'Đề cương Toán', downloadable: true },
];
const supports = [
  { id: 1, subject: 'Hỗ trợ điểm danh', status: 'Đã trả lời', date: '2024-06-15' },
];
const today = new Date();
function getMonthDays(year, month) {
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
  { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1), type: 'Lịch dạy', title: 'Toán 10A1', desc: '08:00 - 09:30, Phòng 201' },
];

type WidgetBoxProps = { title: string; icon: React.ReactNode; children: React.ReactNode; className?: string; action?: React.ReactNode; };
const WidgetBox = ({ title, icon, children, className = '', action }: WidgetBoxProps) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow p-4 mb-4 flex flex-col ${className}`} style={{ minHeight: 0 }}>
    <div className="flex items-center gap-2 mb-2 font-bold text-base text-blue-600 dark:text-blue-300">{icon}{title}</div>
    <div className="flex-1 min-h-0">{children}</div>
    {action && (
      <div className="mt-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-center">
        {action}
      </div>
    )}
  </div>
);

const cardClass = "w-full bg-blue-50 dark:bg-gray-700 rounded-lg p-3 flex flex-col items-start mb-2 user-select-none";
const cardClassGreen = "w-full bg-green-50 dark:bg-gray-700 rounded-lg p-3 flex flex-col items-start mb-2 user-select-none";

const TeacherDashboard: React.FC = () => {
  const [calendarEvent, setCalendarEvent] = useState<any | null>(null);
  const [tooltipFixedPos, setTooltipFixedPos] = useState<{left: number, top: number, width: number} | null>(null);
  const dayCellRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Đóng tooltip khi click ra ngoài
  React.useEffect(() => {
    if (!calendarEvent) return;
    function handleClick(e: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setCalendarEvent(null);
        setTooltipFixedPos(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [calendarEvent]);

  return (
    <DashboardLayout title="Bảng Điều Khiển Giáo Viên">
      <div className="hidden lg:grid grid-cols-3 gap-6 h-[calc(100vh-120px)]">
        {/* Cột 1 */}
        <div className="flex flex-col h-full min-h-0">
          <WidgetBox title="Tổng quan" icon={<FaUserGraduate className="text-blue-500" />}>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <div className="text-lg font-bold text-blue-600">{myCourses.length}</div>
                <div className="text-xs text-gray-500">Khóa học</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-600">{assignments.filter(a => a.status === 'Chưa chấm').length}</div>
                <div className="text-xs text-gray-500">Bài cần chấm</div>
              </div>
              <div>
                <div className="text-lg font-bold text-yellow-500">{Math.round(myCourses.reduce((a, c) => a + c.progress, 0) / myCourses.length)}%</div>
                <div className="text-xs text-gray-500">Tiến độ lớp</div>
              </div>
              <div>
                <div className="text-lg font-bold text-indigo-600">{notifications.length}</div>
                <div className="text-xs text-gray-500">Thông báo</div>
              </div>
            </div>
          </WidgetBox>
          <WidgetBox title={`Lịch tháng ${today.getMonth() + 1}/${today.getFullYear()}`} icon={<FaCalendarAlt className="text-blue-500" />}>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-500 dark:text-gray-300 mb-1">
              <div>T2</div><div>T3</div><div>T4</div><div>T5</div><div>T6</div><div>T7</div><div>CN</div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array(monthDays[0].getDay() === 0 ? 6 : monthDays[0].getDay() - 1).fill(0).map((_, i) => (<div key={i}></div>))}
              {monthDays.map((d, i) => {
                const isToday = d.toDateString() === today.toDateString();
                const dayEvents = events.filter(e => e.date.getDate() === d.getDate());
                let textColor = 'text-gray-700';
                if (isToday) textColor = 'text-white dark:text-blue-200';
                else if (dayEvents.length) textColor = 'text-green-700 dark:text-green-200';
                else textColor = 'text-gray-700 dark:text-gray-200';
                return (
                  <div
                    key={d.getDate()}
                    ref={el => { dayCellRefs.current[i] = el; }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center mx-auto text-xs font-semibold transition-colors duration-200 ${textColor}
                      ${isToday ? 'bg-blue-500' : dayEvents.length ? 'bg-green-100 dark:bg-green-700' : 'hover:bg-blue-100 dark:hover:bg-gray-700'}
                      ${isToday && dayEvents.length ? 'ring-2 ring-green-400' : ''}`}
                    style={isToday && dayEvents.length ? { boxShadow: '0 0 0 2px #22c55e' } : {}}
                    onClick={e => {
                      if (dayEvents.length && dayCellRefs.current[i]) {
                        const cell = dayCellRefs.current[i];
                        const cellRect = cell.getBoundingClientRect();
                        let left = cellRect.left + cellRect.width / 2;
                        let top = cellRect.top;
                        setTooltipFixedPos({ left, top, width: cellRect.width });
                        setCalendarEvent(dayEvents[0]);
                      } else {
                        setCalendarEvent(null);
                        setTooltipFixedPos(null);
                      }
                    }}
                  >
                    {d.getDate()}
                  </div>
                );
              })}
            </div>
            {/* Tooltip-style event popup dùng Portal */}
            {calendarEvent && tooltipFixedPos && ReactDOM.createPortal(
              <div
                ref={tooltipRef}
                style={{
                  position: 'fixed',
                  left: tooltipFixedPos.left,
                  top: tooltipFixedPos.top - 10,
                  transform: 'translate(-50%, -100%)',
                  zIndex: 9999,
                  minWidth: 180,
                  maxWidth: 240,
                }}
                className="pointer-events-auto"
              >
                <div className="relative">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 min-w-[180px] max-w-xs border border-blue-200 dark:border-gray-700">
                    <div className="font-bold mb-1 text-blue-600 dark:text-blue-200">{calendarEvent.title}</div>
                    <div className="mb-2 text-gray-700 dark:text-gray-100">{calendarEvent.desc}</div>
                  </div>
                  {/* Pointer triangle */}
                  <div className="absolute left-1/2 bottom-[-10px] transform -translate-x-1/2 w-4 h-4 overflow-hidden">
                    <div className="w-4 h-4 bg-white dark:bg-gray-800 border-l border-b border-blue-200 dark:border-gray-700 rotate-45 mx-auto"></div>
                  </div>
                </div>
              </div>,
              document.body
            )}
          </WidgetBox>
          <WidgetBox title="Thông báo mới" icon={<FaEnvelope className="text-indigo-500" />} action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-indigo-500 text-white hover:bg-indigo-600" onClick={() => navigate('/teacher/notifications')}>Xem tất cả</button>
          } scrollable>
            <div className="space-y-1">
              {notifications.slice(0, 3).map(n => (<div key={n.id} className="text-xs text-gray-700 dark:text-gray-200 truncate">• {n.title}</div>))}
            </div>
          </WidgetBox>
        </div>
        {/* Cột 2 */}
        <div className="flex flex-col h-full min-h-0">
          <WidgetBox title="Khóa học đang dạy" icon={<FaBook className="text-blue-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600" onClick={() => navigate('/teacher/courses')}>Quản lý khóa học</button>
          } scrollable>
            <div className="flex-1 min-h-0 max-h-full overflow-y-auto pr-1">
              {myCourses.map(course => (
                <div key={course.id} className={cardClass}>
                  <div className="flex items-center gap-2 mb-1">
                    <FaBook className="text-2xl text-blue-500" />
                    <span className="font-semibold dark:text-white">{course.name}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Học viên: {course.students} | Tiến độ: {course.progress}%</div>
                  <div className="flex gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold mb-1" onClick={() => alert('Vào lớp!')}>Vào lớp</button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold" onClick={() => alert('Tài liệu!')}>Tài liệu</button>
                  </div>
                </div>
              ))}
            </div>
          </WidgetBox>
          <WidgetBox title="Bài tập & Chấm điểm" icon={<FaClipboardList className="text-green-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-green-500 text-white hover:bg-green-600" onClick={() => navigate('/teacher/assignments')}>Quản lý bài tập</button>
          } scrollable>
            <div className="flex-1 min-h-0 max-h-full overflow-y-auto pr-1">
              {assignments.map(a => (
                <div key={a.id} className={cardClassGreen}>
                  <div className="flex items-center gap-2 mb-1">
                    <FaClipboardList className="text-2xl text-green-500" />
                    <span className="font-semibold dark:text-white">{a.title}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Hạn: {a.due}</div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold" onClick={() => alert('Chấm bài!')}>{a.status === 'Chưa chấm' ? 'Chấm bài' : 'Xem bài'}</button>
                </div>
              ))}
            </div>
          </WidgetBox>
          <WidgetBox title="Tiến độ lớp" icon={<FaPercent className="text-yellow-500" />}>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
              <div className="bg-yellow-400 h-4 rounded-full" style={{ width: `${Math.round(myCourses.reduce((a, c) => a + c.progress, 0) / myCourses.length)}%` }}></div>
            </div>
            <div className="text-xs text-gray-500">Trung bình: {Math.round(myCourses.reduce((a, c) => a + c.progress, 0) / myCourses.length)}%</div>
          </WidgetBox>
        </div>
        {/* Cột 3 */}
        <div className="flex flex-col h-full min-h-0">
          <WidgetBox title="Tài liệu giảng dạy" icon={<FaFileAlt className="text-green-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-green-500 text-white hover:bg-green-600" onClick={() => navigate('/teacher/materials')}>Quản lý tài liệu</button>
          } scrollable>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {materials.slice(0, 3).map(m => (<div key={m.id} className="flex items-center justify-between text-xs text-gray-700 dark:text-gray-200"><span>{m.name}</span><a href="#" className="text-blue-500 underline ml-2" download={m.downloadable}>{m.downloadable ? 'Tải về' : 'Xem'}</a></div>))}
              {materials.length > 3 && <div className="text-xs text-blue-500 cursor-pointer">Xem tất cả...</div>}
            </div>
          </WidgetBox>
          <WidgetBox title="Hỗ trợ" icon={<FaQuestionCircle className="text-indigo-500" />} className="flex-1 min-h-0" action={
            <button className="w-full px-3 py-1 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600" onClick={() => navigate('/teacher/support')}>Quản lý hỗ trợ</button>
          } scrollable>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {supports.slice(0, 2).map(s => (<div key={s.id} className="flex items-center justify-between text-xs text-gray-700 dark:text-gray-200"><span>{s.subject} ({s.status})</span><button className="ml-2 px-2 py-0.5 rounded text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600">Chi tiết</button></div>))}
              {supports.length > 2 && <div className="text-xs text-blue-500 cursor-pointer">Xem tất cả...</div>}
            </div>
          </WidgetBox>
        </div>
      </div>
      <div className="lg:hidden"><div className="text-center text-gray-500 py-10">Vui lòng sử dụng màn hình lớn hơn để xem dashboard đầy đủ.</div></div>
    </DashboardLayout>
  );
};

export default TeacherDashboard; 