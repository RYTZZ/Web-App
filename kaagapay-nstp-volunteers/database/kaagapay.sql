-- ✅ Create database
CREATE DATABASE IF NOT EXISTS kaagapay;
USE kaagapay;

-- ✅ Users table (for both students and admin accounts)
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  student_id VARCHAR(50) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100),
  role ENUM('student','admin') DEFAULT 'student',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ✅ Students table (extra profile info)
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  student_id VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100),
  course VARCHAR(50),
  block VARCHAR(50),
  qrdata VARCHAR(255) UNIQUE NOT NULL
);

-- ✅ Attendance table
CREATE TABLE attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  qrdata VARCHAR(255) NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ✅ Insert Super Admin account
INSERT INTO users (name, student_id, username, password, email, role)
VALUES (
  'System Administrator',
  'ADMIN001',
  'admin',
  MD5('admin123'),  -- 🔒 hashed for demo
  'admin@kaagapay.com',
  'admin'
);
