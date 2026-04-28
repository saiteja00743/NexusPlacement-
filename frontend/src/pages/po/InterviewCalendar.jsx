import { Calendar as CalendarIcon, Clock, MapPin, Users, Video } from 'lucide-react';

const InterviewCalendar = () => {
  const interviews = [
    { id: 1, company: 'Google', title: 'Technical Interview Round 1', time: '10:00 AM - 11:30 AM', type: 'Online', link: 'meet.google.com/abc-defg-hij', participants: 45 },
    { id: 2, company: 'Microsoft', title: 'Pre-Placement Talk', time: '02:00 PM - 03:00 PM', type: 'Offline', location: 'Main Auditorium', participants: 280 },
    { id: 3, company: 'TechNova', title: 'HR Round', time: '04:00 PM - 06:00 PM', type: 'Online', link: 'zoom.us/j/123456789', participants: 15 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Interview Calendar</h1>
          <p className="text-slate-500 mt-1">Schedule and track upcoming interviews and events.</p>
        </div>
        
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-sm text-sm">
          <CalendarIcon size={18} /> Schedule Event
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CalendarIcon size={20} className="text-blue-600" /> Today's Schedule (Oct 24, 2026)
            </h2>
            
            <div className="space-y-4">
              {interviews.map((interview) => (
                <div key={interview.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 bg-blue-50 text-blue-700 rounded-xl font-bold">
                    <span>{interview.time.split(' ')[0]}</span>
                    <span className="text-xs font-medium">{interview.time.split(' ')[1]}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-slate-900">{interview.title}</h3>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        interview.type === 'Online' ? 'bg-purple-50 text-purple-600' : 'bg-emerald-50 text-emerald-600'
                      }`}>
                        {interview.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-600 mb-2">{interview.company}</p>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} /> {interview.time}
                      </div>
                      <div className="flex items-center gap-1">
                        {interview.type === 'Online' ? <Video size={14} /> : <MapPin size={14} />} 
                        {interview.type === 'Online' ? <a href="#" className="text-blue-600 hover:underline">{interview.link}</a> : interview.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} /> {interview.participants} Students
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-fit">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Mini Calendar</h2>
          <div className="bg-slate-50 border border-slate-100 rounded-xl h-64 flex flex-col items-center justify-center text-slate-400">
            <CalendarIcon size={48} className="mb-2 opacity-50" />
            <p className="text-sm font-medium">Calendar Widget (e.g. react-calendar)</p>
          </div>
          
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Upcoming This Week</h3>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Oct 25 - Google Technical</span>
              <span className="text-blue-600 font-medium">10:00 AM</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Oct 26 - Microsoft PPT</span>
              <span className="text-blue-600 font-medium">02:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewCalendar;
