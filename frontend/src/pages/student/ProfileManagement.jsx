import { useState, useEffect } from 'react';
import { Upload, Save, User, BookOpen, Briefcase, Award, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ProfileManagement = () => {
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState('personal');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Form State
  const [personalData, setPersonalData] = useState({
    name: '',
    phone: '',
    linkedinUrl: ''
  });

  const [academicData, setAcademicData] = useState({
    degree: 'B.Tech',
    branch: 'Computer Science',
    passingYear: '2027',
    cgpa: '8.5'
  });

  const [skillsData, setSkillsData] = useState('');

  // Populate from Context on mount
  useEffect(() => {
    if (user) {
      setPersonalData({
        name: user.name || '',
        phone: user.studentDetails?.phone || '',
        linkedinUrl: user.studentDetails?.linkedinUrl || ''
      });
      if (user.studentDetails) {
        setAcademicData({
          degree: user.studentDetails.degree || 'B.Tech',
          branch: user.studentDetails.branch || 'Computer Science',
          passingYear: user.studentDetails.passingYear || '2027',
          cgpa: user.studentDetails.cgpa || '8.5'
        });
        setSkillsData((user.studentDetails.skills || []).join(', '));
      }
    }
  }, [user]);

  const handlePersonalChange = (e) => setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  const handleAcademicChange = (e) => setAcademicData({ ...academicData, [e.target.name]: e.target.value });

  const handleSave = async () => {
    setLoading(true);
    setMessage(null);

    // Build the payload
    const studentDetails = {
      ...user.studentDetails,
      phone: personalData.phone,
      linkedinUrl: personalData.linkedinUrl,
      degree: academicData.degree,
      branch: academicData.branch,
      passingYear: parseInt(academicData.passingYear),
      cgpa: parseFloat(academicData.cgpa),
      skills: skillsData.split(',').map(s => s.trim()).filter(s => s)
    };

    const payload = {
      name: personalData.name,
      studentDetails
    };

    const result = await updateUser(payload);
    
    if (result.success) {
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } else {
      setMessage({ type: 'error', text: result.message || 'Failed to update profile.' });
    }
    
    setLoading(false);
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Profile Management</h1>
        <p className="text-slate-500 mt-1">Keep your profile updated to get the best job matches.</p>
      </div>

      {message && (
        <div className={`p-4 rounded-xl flex items-center gap-3 ${message.type === 'success' ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-red-50 border border-red-200 text-red-600'}`}>
          {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <p className="font-medium">{message.text}</p>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Tabs Sidebar */}
        <div className="w-full md:w-64 bg-slate-50 border-r border-slate-100 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('personal')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'personal' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}
          >
            <User size={18} /> Personal Details
          </button>
          <button 
            onClick={() => setActiveTab('academic')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'academic' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}
          >
            <BookOpen size={18} /> Academic Info
          </button>
          <button 
            onClick={() => setActiveTab('skills')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'skills' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'}`}
          >
            <Award size={18} /> Skills & Projects
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 lg:p-8 relative">
          
          {/* Universal Save Button on Top Right for all tabs */}
          <div className="absolute top-6 right-8">
             <button 
                onClick={handleSave}
                disabled={loading}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm disabled:opacity-70"
              >
                <Save size={18} /> {loading ? 'Saving...' : 'Save Profile'}
              </button>
          </div>

          {activeTab === 'personal' && (
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 pt-14">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Personal Details</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" name="name" value={personalData.name} onChange={handlePersonalChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input type="email" value={user?.email || ''} disabled className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-500" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={personalData.phone} 
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        if (val.length <= 10) {
                          handlePersonalChange({ target: { name: 'phone', value: val }});
                        }
                      }} 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" 
                      placeholder="e.g. 9876543210" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">LinkedIn Profile URL</label>
                  <input type="url" name="linkedinUrl" value={personalData.linkedinUrl} onChange={handlePersonalChange} placeholder="https://linkedin.com/in/johndoe" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </form>
            </div>
          )}

          {activeTab === 'academic' && (
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 pt-14">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Academic Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Degree</label>
                    <select name="degree" value={academicData.degree} onChange={handleAcademicChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                      <option>B.Tech</option>
                      <option>M.Tech</option>
                      <option>BCA</option>
                      <option>MCA</option>
                      <option>MBA</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Branch / Specialization</label>
                    <select name="branch" value={academicData.branch} onChange={handleAcademicChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                      <option>Computer Science</option>
                      <option>Information Technology</option>
                      <option>Electronics</option>
                      <option>Mechanical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Passing Year</label>
                    <input type="number" name="passingYear" value={academicData.passingYear} onChange={handleAcademicChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current CGPA</label>
                    <input type="number" step="0.01" name="cgpa" value={academicData.cgpa} onChange={handleAcademicChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 pt-14">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Skills & Certifications</h2>
              <p className="text-slate-500 mb-6">Add skills to increase your chances of being matched with the right companies.</p>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Technical Skills (Comma separated)</label>
                <textarea 
                  rows="4" 
                  value={skillsData}
                  onChange={(e) => setSkillsData(e.target.value)}
                  placeholder="e.g. React, Node.js, MongoDB, JavaScript"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                ></textarea>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;
