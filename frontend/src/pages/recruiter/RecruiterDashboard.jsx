import { Briefcase, Users, CheckCircle, Clock, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecruiterDashboard = () => {
  const stats = [
    { label: 'Active Jobs', value: '3', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Total Applicants', value: '248', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Shortlisted', value: '45', icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Interviews Scheduled', value: '12', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Recruiter Dashboard</h1>
          <p className="text-slate-500 mt-1">Manage your job postings and applicants.</p>
        </div>
        <Link to="/recruiter/post-job" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-sm">
          <Plus size={18} /> Post New Job
        </Link>
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
          <h2 className="text-lg font-bold text-slate-900 mb-6">Recent Applications</h2>
          <div className="space-y-4">
            {[
              { name: 'Alice Johnson', role: 'Frontend Developer', date: '2 hours ago', status: 'Pending Review' },
              { name: 'Bob Smith', role: 'Backend Engineer', date: '5 hours ago', status: 'Pending Review' },
              { name: 'Charlie Davis', role: 'Frontend Developer', date: '1 day ago', status: 'Shortlisted' }
            ].map((app, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                    {app.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{app.name}</h3>
                    <p className="text-sm text-slate-500">Applied for {app.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-1 ${
                    app.status === 'Shortlisted' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {app.status}
                  </span>
                  <p className="text-xs text-slate-400">{app.date}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/recruiter/applicants" className="block text-center mt-6 text-sm font-medium text-blue-600 hover:text-blue-700">View All Applicants</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Active Jobs</h2>
          <div className="space-y-4">
            {[
              { role: 'Frontend Developer', applicants: 124, deadline: 'Oct 30' },
              { role: 'Backend Engineer', applicants: 86, deadline: 'Nov 05' },
              { role: 'UI/UX Designer', applicants: 38, deadline: 'Nov 12' }
            ].map((job, i) => (
              <div key={i} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <h3 className="font-bold text-slate-900">{job.role}</h3>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-slate-500">{job.applicants} Applicants</span>
                  <span className="text-red-500 font-medium">Closes {job.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
