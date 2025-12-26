const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req, res) => {
  db.query('SELECT * FROM course', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});


router.post('/', (req, res) => {
  const { stdID, name, email, phone, courseType, department } = req.body;

  const sql = 'INSERT INTO course (stdID, stdName, email, phone, courseType, department) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [stdID, name, email, phone, courseType, department], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Student added successfully', result });
  });
});


router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM course WHERE stdID=?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Student removed successfully', result });
  });
});

module.exports = router;
