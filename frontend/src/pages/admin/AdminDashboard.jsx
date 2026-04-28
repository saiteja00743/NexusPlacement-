import { Users, Briefcase, GraduationCap, Building } from 'lucide-react';
import { useState } from 'react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Students', value: '1,245', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Active Recruiters', value: '48', icon: Building, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Placement Drives', value: '12', icon: Briefcase, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Students Placed', value: '842', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-slate-500 mt-1">Platform overview and analytics.</p>
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
          <h2 className="text-lg font-bold text-slate-900 mb-6">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { text: "Google scheduled a new drive for SDE-1.", time: "2 hours ago" },
              { text: "15 students were shortlisted by Microsoft.", time: "4 hours ago" },
              { text: "New recruiter registration: TechNova.", time: "1 day ago" },
              { text: "Placement Officer created an announcement.", time: "1 day ago" }
            ].map((act, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                <div>
                  <p className="text-slate-700 text-sm">{act.text}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Pending Approvals</h2>
          <div className="space-y-4">
             <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">T</div>
                 <div>
                   <p className="font-bold text-slate-900 text-sm">TechNova Solutions</p>
                   <p className="text-xs text-slate-500">Recruiter Registration</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <button className="px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-semibold hover:bg-emerald-100">Approve</button>
                 <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-100">Reject</button>
               </div>
             </div>
             
             <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">C</div>
                 <div>
                   <p className="font-bold text-slate-900 text-sm">CloudSync</p>
                   <p className="text-xs text-slate-500">Job Posting Approval</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <button className="px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-semibold hover:bg-emerald-100">Approve</button>
                 <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-100">Reject</button>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
