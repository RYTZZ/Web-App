const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models/db');

const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
const attendanceRoutes = require('./routes/attendance');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/attendance', attendanceRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
