import  { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import StudentDashboard from './components/StudentDashboard'
import AdminDashboard from './components/AdminDashboard'
import QRScanner from './components/QRScanner'
import Reports from './components/Reports'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/qr-scanner" element={<QRScanner />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  )
}
 