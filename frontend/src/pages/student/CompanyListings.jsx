import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, MapPin, DollarSign, GraduationCap, Building2, Briefcase } from 'lucide-react';

const CompanyListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All Roles');
  const [appliedJobs, setAppliedJobs] = useState(new Set());

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get('/jobs');
        setJobs(data);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    try {
      // In a real flow, you'd POST to /api/applications here
      // await axios.post('/applications', { jobId });
      
      setAppliedJobs(prev => new Set(prev).add(jobId));
    } catch (error) {
      console.error('Failed to apply:', error);
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.recruiter?.companyDetails?.companyName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All Roles' || job.type === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Job & Internship Listings</h1>
          <p className="text-slate-500 mt-1">Discover and apply to top companies hiring on campus.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-3">
          <div className="relative flex-1 md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Search companies or roles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
            />
          </div>
          <select 
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="border border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm font-medium text-slate-700"
          >
            <option>All Roles</option>
            <option>Full Time</option>
            <option>Internship</option>
            <option>Part Time</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="text-center bg-white rounded-2xl p-12 border border-slate-100 shadow-sm">
          <Briefcase size={48} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-xl font-bold text-slate-900">No Jobs Found</h3>
          <p className="text-slate-500 mt-2">Try adjusting your search filters or check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div key={job._id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xl border border-slate-200 shadow-sm">
                  {job.recruiter?.companyDetails?.companyName?.charAt(0) || <Building2 />}
                </div>
                <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                  job.type === 'Internship' ? 'bg-purple-50 text-purple-600' : 
                  job.type === 'Full Time' ? 'bg-emerald-50 text-emerald-600' :
                  'bg-blue-50 text-blue-600'
                }`}>
                  {job.type}
                </span>
              </div>
              
              <h3 className="font-bold text-lg text-slate-900 mb-1">{job.title}</h3>
              <p className="text-sm text-slate-500 font-medium mb-4">{job.recruiter?.companyDetails?.companyName || 'Company'}</p>
              
              <div className="space-y-2 mt-auto mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} className="text-slate-400" /> {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <DollarSign size={16} className="text-slate-400" /> {job.ctc}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <GraduationCap size={16} className="text-slate-400" /> CGPA: {job.minCgpa}+
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-100 mt-auto flex gap-3 items-center">
                <button 
                  onClick={() => handleApply(job._id)}
                  disabled={appliedJobs.has(job._id)}
                  className={`flex-1 py-2.5 rounded-xl font-bold transition-colors shadow-sm ${
                    appliedJobs.has(job._id) 
                      ? 'bg-emerald-50 text-emerald-600 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {appliedJobs.has(job._id) ? 'Applied Successfully' : 'Apply Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyListings;
