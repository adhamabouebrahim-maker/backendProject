const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all grades
router.get('/', (req, res) => {
  db.query('SELECT * FROM grade', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST a new grade
router.post('/', (req, res) => {
  const { ID, name, mid, project, finalExam, finalgrade } = req.body;
  const sql = 'INSERT INTO grade (ID, name, mid, project, finalExam, finalgrade) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [ID, name, mid, project, finalExam, finalgrade], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Grade added successfully', result });
  });
});

// DELETE grade by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM grade WHERE ID=?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Grade removed successfully', result });
  });
});

module.exports = router;
