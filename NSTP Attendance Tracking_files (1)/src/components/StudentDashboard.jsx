import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Calendar, Clock, Camera, LogOut, Bell, CheckCircle, X } from 'lucide-react'

export default function StudentDashboard() {
  const navigate = useNavigate()
  const [student] = useState({
    id: '2023-001234',
    name: 'Juan dela Cruz',
    course: 'BSIT',
    block: 'A',
    year: '2nd Year',
    totalDays: 42,
    percentage: 95
  })

  const events = [
    { id: 1, name: 'Community Clean-up Drive', date: '2024-01-15', time: '08:00 AM', active: true },
    { id: 2, name: 'Environmental Awareness Seminar', date: '2024-01-20', time: '02:00 PM', active: false },
    { id: 3, name: 'Tree Planting Activity', date: '2024-01-25', time: '07:00 AM', active: false }
  ]

  const attendance = [
    { event: 'Literacy Program', date: '2024-01-10', status: 'Attended' },
    { event: 'Blood Donation Drive', date: '2024-01-08', status: 'Attended' },
    { event: 'Health Awareness Campaign', date: '2024-01-05', status: 'Missed' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">NSTP Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-500" />
              <button 
                onClick={() => navigate('/')}
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-500" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{student.name}</h2>
                <p className="text-gray-600">{student.id}</p>
                <p className="text-gray-600">{student.course} - {student.block} | {student.year}</p>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Days Attended</span>
                  <span className="font-semibold">{student.totalDays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Attendance Rate</span>
                  <span className="font-semibold text-green-600">{student.percentage}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{event.name}</h4>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                        <Clock className="h-4 w-4 ml-3 mr-1" />
                        {event.time}
                      </div>
                    </div>
                    {event.active && (
                      <button
                        onClick={() => navigate('/qr-scanner')}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                      >
                        <Camera className="h-4 w-4 mr-2" />
                        Mark Attendance
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Log</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium text-gray-700">Event</th>
                      <th className="text-left py-2 font-medium text-gray-700">Date</th>
                      <th className="text-left py-2 font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.map((record, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 text-gray-900">{record.event}</td>
                        <td className="py-3 text-gray-600">{record.date}</td>
                        <td className="py-3">
                          <span className={`flex items-center ${record.status === 'Attended' ? 'text-green-600' : 'text-red-600'}`}>
                            {record.status === 'Attended' ? <CheckCircle className="h-4 w-4 mr-1" /> : <X className="h-4 w-4 mr-1" />}
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 