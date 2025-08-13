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
    res.status(500).json({ err: err.message });
  }
});

// GET - show - get a single track
router.get("/:songId", async (req, res) => {
  try {
    const song = await Jukebox.findById(req.params.songId);
    if (!song) {
      res.status(404);
      throw new Error("Song not found.");
    }
    res.status(200).json(song);
  } catch (err) {
    if (res.statusCode === 404) {
        res.json({ err: err.message });
    }
  }
});

// PUT - update - update a track

// DELETE - delete a track

module.exports = router;
