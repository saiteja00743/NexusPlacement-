import { Download, TrendingUp, BarChart2, PieChart } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reports & Analytics</h1>
          <p className="text-slate-500 mt-1">Exportable placement statistics and performance metrics.</p>
        </div>
        
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-sm">
          <Download size={18} /> Export Full Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-100 text-emerald-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Placement Rate</h2>
          </div>
          <p className="text-3xl font-bold text-slate-900 mb-2">84.5%</p>
          <p className="text-sm text-emerald-600 font-medium">+2.4% from last year</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <BarChart2 size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Average CTC</h2>
          </div>
          <p className="text-3xl font-bold text-slate-900 mb-2">12.5 LPA</p>
          <p className="text-sm text-blue-600 font-medium">+1.2 LPA from last year</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <PieChart size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Top Sector</h2>
          </div>
          <p className="text-3xl font-bold text-slate-900 mb-2">IT & Software</p>
          <p className="text-sm text-slate-500 font-medium">45% of total placements</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-64 flex flex-col items-center justify-center">
        <BarChart2 size={48} className="text-slate-300 mb-4" />
        <p className="text-slate-500 font-medium">Detailed charts will be rendered here via Chart.js / Recharts</p>
      </div>
    </div>
  );
};

export default Reports;
