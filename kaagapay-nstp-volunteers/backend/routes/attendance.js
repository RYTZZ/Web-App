const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.post('/scan', (req, res) => {
  const { qrdata } = req.body;
  db.query("INSERT INTO attendance (qrdata, timestamp) VALUES (?, NOW())", [qrdata], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
});

module.exports = router;