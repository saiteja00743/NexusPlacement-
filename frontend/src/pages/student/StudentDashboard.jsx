import { Briefcase, Building, CheckCircle, Clock } from 'lucide-react';

const StudentDashboard = () => {
  const stats = [
    { label: 'Applications Submitted', value: '12', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Shortlisted', value: '4', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Upcoming Interviews', value: '2', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Offers Received', value: '1', icon: Building, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  const upcomingInterviews = [
    { company: 'Google', role: 'Software Engineer Intern', date: 'Oct 25, 2026', time: '10:00 AM', type: 'Technical Round' },
    { company: 'Microsoft', role: 'SDE 1', date: 'Oct 28, 2026', time: '02:00 PM', type: 'HR Round' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Welcome back! Here's a summary of your placement journey.</p>
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

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Upcoming Interviews</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View Calendar</button>
          </div>
          
          <div className="space-y-4">
            {upcomingInterviews.map((interview, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                    {interview.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{interview.role}</h3>
                    <p className="text-sm text-slate-500">{interview.company} • {interview.type}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-medium text-slate-900">{interview.date}</p>
                  <p className="text-sm text-slate-500">{interview.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Profile Completion</h2>
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="text-blue-600"
                  strokeDasharray="85, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-bold text-slate-900">85%</span>
              </div>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Personal Details</span>
              <span className="text-emerald-600 font-medium">Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Academic Info</span>
              <span className="text-emerald-600 font-medium">Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Resume Upload</span>
              <span className="text-emerald-600 font-medium">Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Projects & Skills</span>
              <span className="text-amber-500 font-medium">Pending</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-blue-50 text-blue-700 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
