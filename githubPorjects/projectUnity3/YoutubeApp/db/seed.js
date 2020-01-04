const Youtube           = require("../models/youtube.js");
const data              = require("./seeds.json");
const mongoose          = require("./connection.js");

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

Youtube.deleteMany({})
.then(() => {
    return Youtube.collection.insertMany(data);
})
.then(() => {
    process.exit();
});