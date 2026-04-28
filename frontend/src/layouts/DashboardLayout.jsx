import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  User, 
  Users, 
  BarChart, 
  Calendar, 
  LogOut, 
  Menu,
  X,
  Bell
} from 'lucide-react';

const getNavItems = (role) => {
  switch(role) {
    case 'student':
      return [
        { name: 'Dashboard', path: '/student', icon: LayoutDashboard },
        { name: 'Companies', path: '/student/companies', icon: Briefcase },
        { name: 'Applications', path: '/student/applications', icon: FileText },
        { name: 'Profile', path: '/student/profile', icon: User },
      ];
    case 'admin':
      return [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Manage Users', path: '/admin/users', icon: Users },
        { name: 'Reports', path: '/admin/reports', icon: BarChart },
      ];
    case 'po':
      return [
        { name: 'Dashboard', path: '/po', icon: LayoutDashboard },
        { name: 'Drives', path: '/po/drives', icon: Briefcase },
        { name: 'Calendar', path: '/po/calendar', icon: Calendar },
      ];
    case 'recruiter':
      return [
        { name: 'Dashboard', path: '/recruiter', icon: LayoutDashboard },
        { name: 'Post Job', path: '/recruiter/post-job', icon: Briefcase },
        { name: 'Applicants', path: '/recruiter/applicants', icon: Users },
      ];
    default:
      return [];
  }
};

const DashboardLayout = ({ role }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Mock notifications
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Job Posted', message: 'Google is hiring for SDE role', time: '2 hours ago', read: false },
    { id: 2, title: 'Application Update', message: 'Your resume was viewed by Microsoft', time: '1 day ago', read: true },
    { id: 3, title: 'Profile Tip', message: 'Update your skills to get better matches', time: '2 days ago', read: true },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const navItems = getNavItems(role);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <span className="text-xl font-bold text-slate-900 tracking-tight">Nexus<span className="text-blue-600">Placement</span></span>
        </div>
        
        <div className="flex-1 py-6 flex flex-col gap-1 px-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== `/${role}` && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                {item.name}
              </Link>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-slate-200">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 transition-colors font-medium"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <aside className="relative w-64 max-w-sm bg-white h-full shadow-2xl flex flex-col">
            <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200">
              <span className="text-xl font-bold text-slate-900">Nexus<span className="text-blue-600">Placement</span></span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} className="text-slate-500" />
              </button>
            </div>
            
            <div className="flex-1 py-6 flex flex-col gap-1 px-4 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== `/${role}` && location.pathname.startsWith(item.path));
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 z-10">
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
            
            {/* Notification Bell with Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                )}
              </button>

              {/* Dropdown Menu */}
              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                      <h3 className="font-bold text-slate-900">Notifications</h3>
                      {unreadCount > 0 && (
                        <button onClick={markAllAsRead} className="text-xs text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                          Mark all as read
                        </button>
                      )}
                    </div>
                    
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.length > 0 ? notifications.map((notif) => (
                        <div key={notif.id} className={`p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors ${!notif.read ? 'bg-blue-50/30' : ''}`}>
                          <div className="flex justify-between items-start mb-1">
                            <h4 className={`text-sm font-bold ${!notif.read ? 'text-slate-900' : 'text-slate-700'}`}>{notif.title}</h4>
                            <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap ml-2">{notif.time}</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{notif.message}</p>
                        </div>
                      )) : (
                        <div className="p-8 text-center text-slate-500 text-sm">No new notifications</div>
                      )}
                    </div>
                    
                    <div className="p-3 border-t border-slate-100 text-center bg-slate-50/50 hover:bg-slate-100 transition-colors cursor-pointer">
                      <button className="text-xs font-bold text-slate-600 transition-colors">View All Activity</button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 pl-4 border-l border-slate-200 focus:outline-none group"
              >
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{user?.name || 'User Name'}</p>
                  <p className="text-xs text-slate-500 capitalize font-medium">{role}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold border-2 border-white shadow-sm group-hover:ring-2 group-hover:ring-blue-100 transition-all">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
              </button>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowProfileMenu(false)}></div>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50">
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-slate-100 sm:hidden">
                        <p className="text-sm font-bold text-slate-900 truncate">{user?.name || 'User Name'}</p>
                        <p className="text-xs text-slate-500 capitalize font-medium">{user?.email}</p>
                      </div>
                      
                      {role === 'student' && (
                        <Link 
                          to="/student/profile" 
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                        >
                          <User size={16} /> My Profile
                        </Link>
                      )}
                      
                      <button 
                        onClick={() => {
                          setShowProfileMenu(false);
                          handleLogout();
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
