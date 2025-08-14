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
    } else {
        res.status(500).json({ err: err.message });
    }
  }
});

// PUT - update - update a track
router.put('/:songId', async (req, res) => {
    try {
        const updatedTrack = await Jukebox.findByIdAndUpdate(req.params.songId, req.body, {new: true,});
        if (!updatedTrack) {
            res.status(400);
            throw new Error ('Track not found.');
        }
        res.status(200).json(updatedTrack);
    } catch(err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message });
        } else {
            res.status(500).json({ err: err.message });
        }
    }
});

// DELETE - delete a track
router.delete('/:songId', async (req, res) => {
    try {
        const deletedTrack = await Jukebox.findByIdAndDelete(req.params.songId);

        if (!deletedTrack) {
            res.status(404);
            throw new Error('Track not found.');
        }
        res.status(200).json(deletedTrack);
    } catch(err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message });
        } else {
            res.status(500).json({ err: err.message});
        }
    }
});

module.exports = router;
