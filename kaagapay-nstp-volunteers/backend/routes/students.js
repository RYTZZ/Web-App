const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.get('/', (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;