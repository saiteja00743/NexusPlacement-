const fs = require('fs');
const path = require('path');

const files = [
  // Student
  { path: 'src/pages/student/StudentDashboard.jsx', name: 'StudentDashboard' },
  { path: 'src/pages/student/CompanyListings.jsx', name: 'CompanyListings' },
  { path: 'src/pages/student/ApplicationTracking.jsx', name: 'ApplicationTracking' },
  { path: 'src/pages/student/ProfileManagement.jsx', name: 'ProfileManagement' },
  // Admin
  { path: 'src/pages/admin/AdminDashboard.jsx', name: 'AdminDashboard' },
  { path: 'src/pages/admin/ManageUsers.jsx', name: 'ManageUsers' },
  { path: 'src/pages/admin/Reports.jsx', name: 'Reports' },
  // PO
  { path: 'src/pages/po/PODashboard.jsx', name: 'PODashboard' },
  { path: 'src/pages/po/DriveManagement.jsx', name: 'DriveManagement' },
  { path: 'src/pages/po/InterviewCalendar.jsx', name: 'InterviewCalendar' },
  // Recruiter
  { path: 'src/pages/recruiter/RecruiterDashboard.jsx', name: 'RecruiterDashboard' },
  { path: 'src/pages/recruiter/PostJob.jsx', name: 'PostJob' },
  { path: 'src/pages/recruiter/ManageApplicants.jsx', name: 'ManageApplicants' },
];

files.forEach(f => {
  const content = `const ${f.name} = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">${f.name.replace(/([A-Z])/g, ' $1').trim()}</h1>
        <p className="text-slate-500 mt-1">Manage your ${f.name.toLowerCase()} here.</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <p className="text-slate-600">Content coming soon...</p>
      </div>
    </div>
  );
};

export default ${f.name};
`;
  fs.writeFileSync(path.join(__dirname, f.path), content);
});
console.log('Files created');
