import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Camera, CheckCircle, AlertCircle, ArrowLeft, MapPin } from 'lucide-react'

export default function QRScanner() {
  const navigate = useNavigate()
  const [scanning, setScanning] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [success, setSuccess] = useState(false)
  const [locationVerified, setLocationVerified] = useState(false)

  const handleScan = () => {
    setScanning(true)
    setTimeout(() => {
      setScanning(false)
      setScanned(true)
      // Simulate location verification
      setTimeout(() => {
        setLocationVerified(true)
        setSuccess(true)
      }, 2000)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button 
              onClick={() => navigate('/student')}
              className="flex items-center text-gray-700 hover:text-gray-900 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </button>
            <h1 className="text-xl font-semibold text-gray-900">QR Code Scanner</h1>
          </div>
        </div>
      </nav>

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Mark Your Attendance</h2>
            <p className="text-gray-600">Community Clean-up Drive</p>
            <p className="text-sm text-gray-500">January 15, 2024 | 8:00 AM</p>
          </div>

          {!scanning && !scanned && (
            <div className="text-center">
              <div className="w-64 h-64 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Camera className="h-16 w-16 text-gray-400" />
              </div>
              <button
                onClick={handleScan}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
              >
                Start Scanning
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Position the QR code within the camera view to mark your attendance
              </p>
            </div>
          )}

          {scanning && (
            <div className="text-center">
              <div className="w-64 h-64 bg-blue-100 rounded-lg mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-200 animate-pulse"></div>
                <Camera className="h-16 w-16 text-blue-600 relative z-10" />
              </div>
              <p className="text-blue-600 font-medium">Scanning QR Code...</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
              </div>
            </div>
          )}

          {scanned && !success && (
            <div className="text-center">
              <div className="w-64 h-64 bg-yellow-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-yellow-600" />
              </div>
              <p className="text-yellow-600 font-medium">Verifying Location...</p>
              <p className="text-sm text-gray-500 mt-2">
                Confirming you are at the event location
              </p>
            </div>
          )}

          {success && (
            <div className="text-center">
              <div className="w-64 h-64 bg-green-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Attendance Marked!</h3>
              <p className="text-gray-600 mb-6">
                Your attendance has been successfully recorded for the Community Clean-up Drive.
              </p>
              <button
                onClick={() => navigate('/student')}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
              >
                Return to Dashboard
              </button>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
              <p className="text-sm text-blue-700">
                Make sure you are within the event location for successful attendance marking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 