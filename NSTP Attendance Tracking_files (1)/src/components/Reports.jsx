import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Download, Filter, Calendar, Users, Award } from 'lucide-react'

export default function Reports() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')
  const [dateRange, setDateRange] = useState('month')

  const reportData = [
    { event: 'Community Clean-up Drive', date: '2024-01-15', participants: 45, attendance: 95 },
    { event: 'Environmental Seminar', date: '2024-01-10', participants: 78, attendance: 88 },
    { event: 'Blood Donation Drive', date: '2024-01-08', participants: 32, attendance: 92 },
    { event: 'Literacy Program', date: '2024-01-05', participants: 56, attendance: 89 }
  ]

  const courseData = [
    { course: 'BSIT', block: 'A', students: 45, avgAttendance: 94 },
    { course: 'BSIT', block: 'B', students: 42, avgAttendance: 91 },
    { course: 'BSCS', block: 'A', students: 38, avgAttendance: 88 },
    { course: 'BSCS', block: 'B', students: 40, avgAttendance: 93 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button 
              onClick={() => navigate('/admin')}
              className="flex items-center text-gray-700 hover:text-gray-900 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Admin
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Reports & Analytics</h1>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">24</p>
                <p className="text-gray-600">Total Events</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">320</p>
                <p className="text-gray-600">Active Students</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">91.5%</p>
                <p className="text-gray-600">Avg Attendance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Event Reports</h2>
              <div className="flex space-x-4">
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-medium text-gray-700">Event Name</th>
                    <th className="text-left py-3 font-medium text-gray-700">Date</th>
                    <th className="text-left py-3 font-medium text-gray-700">Participants</th>
                    <th className="text-left py-3 font-medium text-gray-700">Attendance Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((report, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 text-gray-900">{report.event}</td>
                      <td className="py-3 text-gray-600">{report.date}</td>
                      <td className="py-3 text-gray-600">{report.participants}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-3" style={{width: '100px'}}>
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{width: `${report.attendance}%`}}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{report.attendance}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Course Performance</h2>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 font-medium text-gray-700">Course</th>
                    <th className="text-left py-3 font-medium text-gray-700">Block</th>
                    <th className="text-left py-3 font-medium text-gray-700">Students</th>
                    <th className="text-left py-3 font-medium text-gray-700">Avg Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((course, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 text-gray-900">{course.course}</td>
                      <td className="py-3 text-gray-600">{course.block}</td>
                      <td className="py-3 text-gray-600">{course.students}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${course.avgAttendance >= 90 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {course.avgAttendance}%
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
  )
}
 