import { useState } from 'react';
import axios from 'axios';
import { Briefcase, MapPin, DollarSign, GraduationCap, CheckCircle, AlertCircle } from 'lucide-react';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Full Time',
    location: '',
    ctc: '',
    minCgpa: '',
    eligibleBranches: 'CSE, ECE, IT',
    deadline: '',
    description: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      // Split branches by comma and clean whitespace
      const branchesArray = formData.eligibleBranches.split(',').map(b => b.trim());
      
      const payload = {
        ...formData,
        eligibleBranches: branchesArray,
      };

      await axios.post('/jobs', payload);
      setStatus({ loading: false, success: true, error: '' });
      
      // Reset form
      setFormData({
        title: '', type: 'Full Time', location: '', ctc: '',
        minCgpa: '', eligibleBranches: 'CSE, ECE, IT', deadline: '', description: ''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => setStatus(s => ({ ...s, success: false })), 3000);
      
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.response?.data?.message || 'Failed to post job. Please try again.' 
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Post a New Job</h1>
        <p className="text-slate-500 mt-1">Create a new job listing to receive student applications.</p>
      </div>

      {status.success && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-xl flex items-center gap-3">
          <CheckCircle size={20} className="text-emerald-600" />
          <p className="font-medium">Job posted successfully! Students can now view and apply.</p>
        </div>
      )}

      {status.error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl flex items-center gap-3">
          <AlertCircle size={20} className="text-red-600" />
          <p className="font-medium">{status.error}</p>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
          
          {/* Section 1: Basic Details */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Basic Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-slate-700 mb-2">Job Title</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Briefcase size={18} />
                  </div>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Software Development Engineer" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Job Type</label>
                <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <MapPin size={18} />
                  </div>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Bangalore, India (or Remote)" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Package / CTC</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <DollarSign size={18} />
                  </div>
                  <input type="text" name="ctc" value={formData.ctc} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 15 LPA or $120k/yr" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Eligibility */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Eligibility Criteria</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Minimum CGPA</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <GraduationCap size={18} />
                  </div>
                  <input type="number" step="0.1" name="minCgpa" value={formData.minCgpa} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 7.5" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Application Deadline</label>
                <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Eligible Branches (Comma Separated)</label>
                <input type="text" name="eligibleBranches" value={formData.eligibleBranches} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="CSE, ECE, IT, MECH" />
              </div>
            </div>
          </div>

          {/* Section 3: Description */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Job Description</h2>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Detailed Description & Requirements</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required rows="5" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="List the responsibilities, tech stack, and ideal candidate profile..." />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 flex justify-end">
            <button 
              type="submit" 
              disabled={status.loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status.loading ? 'Posting Job...' : 'Publish Job Listing'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PostJob;
