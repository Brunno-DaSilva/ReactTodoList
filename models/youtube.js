const mongoose      = require("mongoose");
const Schema        = mongoose.Schema;

const youtubeSchema = new Schema ({
    title: String
});

const Youtube = mongoose.model("Youtube", youtubeSchema);

module.exports = Youtube;