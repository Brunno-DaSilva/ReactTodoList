const express = require("express");
const router = express.Router();
// const Youtube       = require("../models/youtube.js");

// Index Route
router.get("/", (req, res) => {
  res.send("Index");
  Youtube.find({}, (err, foundVideos) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(foundVideos);
    }
  });
});

// Post Route
router.post("/", (req, res) => {
  Youtube.create(req.body, newVideo => {
    res.json(newVideo);
  });
});

// Update Route
router.put("/:id", (req, res) => {
  Youtube.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedVideo) => {
      if (err) {
        res.send(err.message);
      } else {
        res.json(updatedVideo);
      }
    }
  );
});

// Delete Route
router.delete("/:id", (req, res) => {
  Youtube.findByIdAndRemove(req.params.id, (err, deletedVideo) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(deletedVideo);
    }
  });
});

module.exports = router;
