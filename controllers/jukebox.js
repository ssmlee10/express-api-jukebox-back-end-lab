const Jukebox = require("../models/jukebox.js");
const express = require("express");
const router = express.Router();

// POST - create a track
router.post("/", async (req, res) => {
  try {
    // create a new song with data from req.body
    const createdSong = await Jukebox.create(req.body);
    res.status(201).json(createdSong);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// GET - index - list all tracks
router.get("/", async (req, res) => {
  try {
    const songList = await Jukebox.find();
    res.status(200).json(songList);
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
});

// GET - show - get a single track

// PUT - update - update a track

// DELETE - delete a track

module.exports = router;
