const Jukebox = require('../models/jukebox.js');
const express = require('express');
const router = express.Router();

// POST - create a track
router.post('/', async (req, res) => {
    res.json({ message: 'create route' });
});

// GET - index - list all tracks

// GET - show - get a single track

// PUT - update - update a track

// DELETE - delete a track

module.exports = router;