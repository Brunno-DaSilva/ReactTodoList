const express = require("express");
const router = express.Router();
const YTComments  = require("../models/youtube.js");

// Index Route
router.get("/", (req, res) => {
  YTComments.find({}, (err, foundComments) => {
    if (err) {
      res.send(err.message);
    } else {
      console.log('getting...');
      console.log(res.json(foundComments))
      // res.json(foundComments);
    }
  });
});

// Post Route
router.post("/", (req, res) => {
  YTComments.create(req.body, newComment => {
    res.json(newComment);
  });
});

// Update Route
router.put("/:id", (req, res) => {
  YTComments.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedComment) => {
      if (err) {
        res.send(err.message);
      } else {
        res.json(updatedComment);
      }
    }
  );
});

// Delete Route
router.delete("/:id", (req, res) => {
  YTComments.findByIdAndRemove(req.params.id, (err, deletedComment) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(deletedComment);
    }
  });
});

module.exports = router;
