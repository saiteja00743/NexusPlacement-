import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, Users, ShieldCheck } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
              Bridge the gap between <span className="text-blue-600">Campus</span> and <span className="text-blue-600">Corporate</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              A comprehensive placement management system streamlining hiring for students, colleges, and top recruiters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/login" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-sm flex items-center justify-center">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Empowering Every Stakeholder</h2>
            <p className="mt-4 text-slate-600 text-lg">Our platform offers tailored experiences for all users.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Student Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Students</h3>
              <p className="text-slate-600">Build your profile, track applications, and land your dream job with smart matching.</p>
            </div>

            {/* Recruiter Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Recruiters</h3>
              <p className="text-slate-600">Post jobs, filter candidates instantly, and manage the entire hiring pipeline seamlessly.</p>
            </div>

            {/* PO Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Placement Officers</h3>
              <p className="text-slate-600">Schedule drives, manage student eligibility, and coordinate interviews effortlessly.</p>
            </div>

            {/* Admin Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-amber-50 w-14 h-14 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Admins</h3>
              <p className="text-slate-600">Overview analytics, manage users, and ensure platform security and smooth operations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
