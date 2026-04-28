import { useState } from 'react';
import { Search, Filter, MoreVertical, Shield, User, Building, GraduationCap } from 'lucide-react';

const ManageUsers = () => {
  const [activeTab, setActiveTab] = useState('students');
  
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'student', status: 'Active', department: 'Computer Science' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'student', status: 'Active', department: 'Information Technology' },
    { id: 3, name: 'Acme Corp HR', email: 'hr@acme.com', role: 'recruiter', status: 'Pending', company: 'Acme Corp' },
    { id: 4, name: 'TechNova HR', email: 'careers@technova.com', role: 'recruiter', status: 'Active', company: 'TechNova' },
    { id: 5, name: 'Prof. Davis', email: 'davis@college.edu', role: 'po', status: 'Active', department: 'Placement Cell' },
  ];

  const filteredUsers = users.filter(u => u.role === (activeTab === 'students' ? 'student' : activeTab === 'recruiters' ? 'recruiter' : 'po'));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Users</h1>
          <p className="text-slate-500 mt-1">Control access and roles across the platform.</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm text-sm"
            />
          </div>
          <button className="bg-white border border-slate-200 text-slate-600 p-2 rounded-xl shadow-sm hover:bg-slate-50">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex border-b border-slate-100 p-2">
          <button 
            onClick={() => setActiveTab('students')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'students' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <GraduationCap size={16} /> Students
          </button>
          <button 
            onClick={() => setActiveTab('recruiters')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'recruiters' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <Building size={16} /> Recruiters
          </button>
          <button 
            onClick={() => setActiveTab('po')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'po' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
          >
            <Shield size={16} /> Placement Officers
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  {activeTab === 'recruiters' ? 'Company' : 'Department'}
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{user.name}</p>
                        <p className="text-sm text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {user.company || user.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUsers.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              No users found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
