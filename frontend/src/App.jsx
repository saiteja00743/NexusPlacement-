import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard';
import CompanyListings from './pages/student/CompanyListings';
import ApplicationTracking from './pages/student/ApplicationTracking';
import ProfileManagement from './pages/student/ProfileManagement';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import Reports from './pages/admin/Reports';

// Placement Officer Pages
import PODashboard from './pages/po/PODashboard';
import DriveManagement from './pages/po/DriveManagement';
import InterviewCalendar from './pages/po/InterviewCalendar';

// Recruiter Pages
import RecruiterDashboard from './pages/recruiter/RecruiterDashboard';
import PostJob from './pages/recruiter/PostJob';
import ManageApplicants from './pages/recruiter/ManageApplicants';

// Context
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          
          {/* Protected Routes - Simplified for now without ProtectedRoute wrapper to get layout running */}
          <Route path="/student" element={<DashboardLayout role="student" />}>
            <Route index element={<StudentDashboard />} />
            <Route path="companies" element={<CompanyListings />} />
            <Route path="applications" element={<ApplicationTracking />} />
            <Route path="profile" element={<ProfileManagement />} />
          </Route>

          <Route path="/admin" element={<DashboardLayout role="admin" />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="reports" element={<Reports />} />
          </Route>

          <Route path="/po" element={<DashboardLayout role="po" />}>
            <Route index element={<PODashboard />} />
            <Route path="drives" element={<DriveManagement />} />
            <Route path="calendar" element={<InterviewCalendar />} />
          </Route>

          <Route path="/recruiter" element={<DashboardLayout role="recruiter" />}>
            <Route index element={<RecruiterDashboard />} />
            <Route path="post-job" element={<PostJob />} />
            <Route path="applicants" element={<ManageApplicants />} />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
