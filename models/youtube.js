const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const youtubeSchema = new Schema({
  title: String,
  videoId: String,
  date: { type: Date, default: Date.now, required: true },
  note: { type: String, required: true },
  editing: Boolean
});

const Youtube = mongoose.model("Youtube", youtubeSchema);

module.exports = Youtube;
