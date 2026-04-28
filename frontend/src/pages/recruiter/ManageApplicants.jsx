import { useState } from 'react';
import { Search, Filter, Check, X, FileText, ChevronDown } from 'lucide-react';

const ManageApplicants = () => {
  const [activeJob, setActiveJob] = useState('All Jobs');
  
  const applicants = [
    { id: 1, name: 'Alice Johnson', job: 'Frontend Developer', cgpa: 8.5, branch: 'Computer Science', status: 'Pending Review' },
    { id: 2, name: 'Bob Smith', job: 'Backend Engineer', cgpa: 9.1, branch: 'Information Tech', status: 'Shortlisted' },
    { id: 3, name: 'Charlie Davis', job: 'Frontend Developer', cgpa: 7.8, branch: 'Computer Science', status: 'Pending Review' },
    { id: 4, name: 'Diana Prince', job: 'UI/UX Designer', cgpa: 8.9, branch: 'Design', status: 'Rejected' },
    { id: 5, name: 'Evan Wright', job: 'Backend Engineer', cgpa: 8.2, branch: 'Computer Science', status: 'Interview' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Applicants</h1>
          <p className="text-slate-500 mt-1">Review, shortlist, and manage candidates.</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Search applicants..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm text-sm"
            />
          </div>
          <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl shadow-sm hover:bg-slate-50 flex items-center gap-2 text-sm font-medium">
            <Filter size={18} /> Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-4">
          <span className="text-sm font-medium text-slate-600">Filter by Job:</span>
          <select 
            value={activeJob}
            onChange={(e) => setActiveJob(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm font-medium"
          >
            <option>All Jobs</option>
            <option>Frontend Developer</option>
            <option>Backend Engineer</option>
            <option>UI/UX Designer</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Candidate</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Applied For</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">CGPA / Branch</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Resume</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {applicants.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                        {app.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{app.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700">
                    {app.job}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm font-semibold text-slate-900">{app.cgpa}</p>
                    <p className="text-xs text-slate-500">{app.branch}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm font-medium">
                      <FileText size={16} /> View
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                      app.status === 'Shortlisted' || app.status === 'Interview' ? 'bg-emerald-50 text-emerald-600' : 
                      app.status === 'Rejected' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors tooltip-trigger" title="Shortlist">
                        <Check size={18} />
                      </button>
                      <button className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors tooltip-trigger" title="Reject">
                        <X size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageApplicants;
