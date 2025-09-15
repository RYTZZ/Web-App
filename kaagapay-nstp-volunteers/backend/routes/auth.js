const express = require('express');
const router = express.Router();
const db = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
    if (err || results.length === 0) return res.json({ success: false });
    const user = results[0];
    if (password === user.password) {
      res.json({ success: true, role: user.role });
    } else {
      res.json({ success: false });
    }
  });
});

module.exports = router;