import { CheckCircle2, Clock, XCircle, ChevronRight, FileText } from 'lucide-react';

const ApplicationTracking = () => {
  const applications = [
    { id: 1, company: 'Google', role: 'Software Engineer Intern', dateApplied: 'Oct 15, 2026', status: 'Interview', round: 'Technical Round 1', ctc: '1.5 Lakh/month' },
    { id: 2, company: 'Microsoft', role: 'SDE 1', dateApplied: 'Oct 10, 2026', status: 'Shortlisted', round: 'Pending Scheduling', ctc: '18 LPA' },
    { id: 3, company: 'Amazon', role: 'Frontend Engineer', dateApplied: 'Sep 28, 2026', status: 'Applied', round: 'Online Assessment', ctc: '22 LPA' },
    { id: 4, company: 'Meta', role: 'React Developer', dateApplied: 'Sep 15, 2026', status: 'Rejected', round: 'Final Round', ctc: '20 LPA' },
    { id: 5, company: 'Stripe', role: 'Backend Engineer', dateApplied: 'Aug 20, 2026', status: 'Selected', round: 'Offer Extended', ctc: '30 LPA' },
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case 'Applied': return { color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', icon: Clock };
      case 'Shortlisted': return { color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', icon: FileText };
      case 'Interview': return { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', icon: Clock };
      case 'Selected': return { color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: CheckCircle2 };
      case 'Rejected': return { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', icon: XCircle };
      default: return { color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200', icon: Clock };
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Application Tracking</h1>
        <p className="text-slate-500 mt-1">Monitor the status of your job and internship applications.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Company & Role</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Date Applied</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Current Round</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {applications.map((app) => {
                const config = getStatusConfig(app.status);
                const Icon = config.icon;
                
                return (
                  <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                          {app.company.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{app.role}</p>
                          <p className="text-sm text-slate-500">{app.company} • {app.ctc}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {app.dateApplied}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${config.bg} ${config.color} ${config.border}`}>
                        <Icon size={14} />
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {app.round}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <ChevronRight size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracking;
