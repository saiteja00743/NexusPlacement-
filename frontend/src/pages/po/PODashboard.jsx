import { Briefcase, Users, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PODashboard = () => {
  const stats = [
    { label: 'Upcoming Drives', value: '5', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Registered Students', value: '850', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Scheduled Interviews', value: '34', icon: Calendar, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Total Placed', value: '412', icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Placement Officer Dashboard</h1>
        <p className="text-slate-500 mt-1">Coordinate campus drives and monitor student placements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Upcoming Placement Drives</h2>
            <Link to="/po/drives" className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</Link>
          </div>
          
          <div className="space-y-4">
            {[
              { company: 'Google', role: 'Software Engineer', date: 'Oct 25', eligible: 340 },
              { company: 'Microsoft', role: 'SDE 1', date: 'Oct 28', eligible: 280 },
              { company: 'TCS', role: 'System Engineer', date: 'Nov 05', eligible: 850 }
            ].map((drive, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                    {drive.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{drive.company}</h3>
                    <p className="text-sm text-slate-500">{drive.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{drive.date}</p>
                  <p className="text-xs text-slate-500">{drive.eligible} Eligible</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Recent Placements</h2>
          <div className="space-y-4">
            {[
              { student: 'John Doe', company: 'Amazon', package: '22 LPA' },
              { student: 'Sarah Smith', company: 'Google', package: '28 LPA' },
              { student: 'Michael Brown', company: 'Microsoft', package: '18 LPA' }
            ].map((placement, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 text-sm">
                    {placement.student.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{placement.student}</h3>
                    <p className="text-xs text-slate-500">Placed at {placement.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">
                    {placement.package}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PODashboard;
