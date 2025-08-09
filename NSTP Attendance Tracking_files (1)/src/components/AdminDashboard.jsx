import   { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Calendar, Database, Settings, LogOut, Plus, Edit, Trash, Award, Upload, X } from 'lucide-react' 

export  default function AdminDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [showAddStudent, setShowAddStudent] = useState(false)
  const [showBulkUpload, setShowBulkUpload] = useState(false)
  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    course: '',
    block: '',
    year: ''
  }) 

  const stats = {
    totalStudents: 320,
    activeEvents: 5,
    attendanceRate: 92,
    completedEvents: 15
  }

  const students = [
    { id: '2023-001234', name: 'Juan dela Cruz', course: 'BSIT', block: 'A', attendance: 95 },
    { id: '2023-001235', name: 'Maria Santos', course: 'BSCS', block: 'B', attendance: 88 },
    { id: '2023-001236', name: 'Pedro Garcia', course: 'BSIT', block: 'A', attendance: 92 }
  ]

   const events = [
    { id: 1, name: 'Community Clean-up Drive', date: '2024-01-15', participants: 45, status: 'Active' },
    { id: 2, name: 'Environmental Seminar', date: '2024-01-20', participants: 78, status: 'Scheduled' },
    { id: 3, name: 'Tree Planting Activity', date: '2024-01-25', participants: 0, status: 'Scheduled' }
  ]

  const handleAddStudent = (e) => {
    e.preventDefault()
    // Add student logic here
    setShowAddStudent(false)
    setNewStudent({ id: '', name: '', course: '', block: '', year: '' })
  }

  const handleBulkUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Process CSV file here
      console.log('Processing file:', file.name)
      setShowBulkUpload(false)
    }
  } 

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/reports')}
                className="text-blue-600 hover:text-blue-800"
              >
                View Reports
              </button>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">{stats.totalStudents}</p>
                <p className="text-gray-600">Total Students</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">{stats.activeEvents}</p>
                <p className="text-gray-600">Active Events</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">{stats.attendanceRate}%</p>
                <p className="text-gray-600">Attendance Rate</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Database className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">{stats.completedEvents}</p>
                <p className="text-gray-600">Completed Events</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 text-sm font-medium border-b-2 ${activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`py-4 text-sm font-medium border-b-2 ${activeTab === 'students' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Students
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`py-4 text-sm font-medium border-b-2 ${activeTab === 'events' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Events
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'students' && (
              <div>
                               <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Student Management</h2>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setShowAddStudent(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Student
                    </button>
                    <button 
                      onClick={() => setShowBulkUpload(true)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Bulk Upload
                    </button>
                  </div>
                </div> 
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-medium text-gray-700">Student ID</th>
                        <th className="text-left py-3 font-medium text-gray-700">Name</th>
                        <th className="text-left py-3 font-medium text-gray-700">Course</th>
                        <th className="text-left py-3 font-medium text-gray-700">Block</th>
                        <th className="text-left py-3 font-medium text-gray-700">Attendance</th>
                        <th className="text-left py-3 font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b">
                          <td className="py-3 text-gray-900">{student.id}</td>
                          <td className="py-3 text-gray-900">{student.name}</td>
                          <td className="py-3 text-gray-600">{student.course}</td>
                          <td className="py-3 text-gray-600">{student.block}</td>
                          <td className="py-3 text-green-600">{student.attendance}%</td>
                          <td className="py-3">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Event Management</h2>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Event
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-medium text-gray-700">Event Name</th>
                        <th className="text-left py-3 font-medium text-gray-700">Date</th>
                        <th className="text-left py-3 font-medium text-gray-700">Participants</th>
                        <th className="text-left py-3 font-medium text-gray-700">Status</th>
                        <th className="text-left py-3 font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map((event) => (
                        <tr key={event.id} className="border-b">
                          <td className="py-3 text-gray-900">{event.name}</td>
                          <td className="py-3 text-gray-600">{event.date}</td>
                          <td className="py-3 text-gray-600">{event.participants}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${event.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {event.status}
                            </span>
                          </td>
                          <td className="py-3">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-gray-900">New student registered: Maria Santos</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm text-gray-900">Event completed: Community Clean-up Drive</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">
                      Generate Monthly Report
                    </button>
                    <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">
                      Export Student Data
                    </button>
                    <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">
                      Send Notifications
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
               </div>
      </div>

      {/* Add Student Modal */}
      {showAddStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Student</h3>
              <button onClick={() => setShowAddStudent(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <input
                type="text"
                placeholder="Student ID"
                value={newStudent.id}
                onChange={(e) => setNewStudent({...newStudent, id: e.target.value})}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Full Name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                className="w-full p-3 border rounded-lg"
                required
              />
              <select
                value={newStudent.course}
                onChange={(e) => setNewStudent({...newStudent, course: e.target.value})}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select Course</option>
                <option value="BSIT">BSIT</option>
                <option value="BSCS">BSCS</option>
                <option value="BSBA">BSBA</option>
              </select>
              <input
                type="text"
                placeholder="Block"
                value={newStudent.block}
                onChange={(e) => setNewStudent({...newStudent, block: e.target.value})}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Year Level"
                value={newStudent.year}
                onChange={(e) => setNewStudent({...newStudent, year: e.target.value})}
                className="w-full p-3 border rounded-lg"
                required
              />
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Add Student
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddStudent(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bulk Upload Modal */}
      {showBulkUpload && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Bulk Upload Students</h3>
              <button onClick={() => setShowBulkUpload(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">CSV Format Required:</h4>
                <p className="text-sm text-blue-700">StudentID, FullName, Course, Block, Year</p>
                <p className="text-xs text-blue-600 mt-1">Example: 2024-001, Juan Cruz, BSIT, A, 2nd Year</p>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleBulkUpload}
                    className="hidden"
                  />
                  <span className="text-blue-600 hover:text-blue-800">Choose CSV file</span>
                </label>
                <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
              </div>
              <button
                onClick={() => setShowBulkUpload(false)}
                className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
 