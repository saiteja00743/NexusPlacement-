import { useState } from 'react';
import { Plus, Search, Calendar, Users, Briefcase } from 'lucide-react';

const DriveManagement = () => {
  const drives = [
    { id: 1, company: 'Google', roles: ['SDE-1', 'Intern'], date: 'Oct 25, 2026', registered: 340, status: 'Upcoming' },
    { id: 2, company: 'Microsoft', roles: ['SDE-1'], date: 'Oct 28, 2026', registered: 280, status: 'Upcoming' },
    { id: 3, company: 'TCS', roles: ['System Engineer'], date: 'Nov 05, 2026', registered: 850, status: 'Open for Registration' },
    { id: 4, company: 'Amazon', roles: ['SDE-1', 'Cloud Engineer'], date: 'Sep 15, 2026', registered: 420, status: 'Completed' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Drive Management</h1>
          <p className="text-slate-500 mt-1">Schedule and manage campus placement drives.</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Search drives..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm text-sm"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-sm text-sm whitespace-nowrap">
            <Plus size={18} /> Add New Drive
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drives.map((drive) => (
          <div key={drive.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xl">
                {drive.company.charAt(0)}
              </div>
              <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                drive.status === 'Upcoming' ? 'bg-blue-50 text-blue-600' :
                drive.status === 'Open for Registration' ? 'bg-emerald-50 text-emerald-600' :
                'bg-slate-100 text-slate-600'
              }`}>
                {drive.status}
              </span>
            </div>
            
            <h3 className="font-bold text-lg text-slate-900 mb-1">{drive.company}</h3>
            <p className="text-sm text-slate-500 mb-4">{drive.roles.join(', ')}</p>
            
            <div className="space-y-3 mt-auto mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar size={16} className="text-slate-400" /> Date: <span className="font-medium text-slate-900">{drive.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Users size={16} className="text-slate-400" /> Registered: <span className="font-medium text-slate-900">{drive.registered} Students</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm">
                View Details
              </button>
              <button className="flex-1 py-2 rounded-xl bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors text-sm">
                Manage Students
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriveManagement;
