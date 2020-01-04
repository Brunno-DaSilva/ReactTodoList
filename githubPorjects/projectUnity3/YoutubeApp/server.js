// ===================
// Dependencies
// ===================
const PORT = process.env.PORT || 3060;
const express = require("express");
const app = express();
const mongoose = require("./db/connection.js");
const youtubeController = require("./controllers/youtube.js");
const db = mongoose.connection;

// ===================
// Middleware
// ===================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use("/youtube", youtubeController);

// ===================
// Environment Variables (getting ready for Heroku)
// ===================
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/youtubeApiCrud";

// ===================
// Connect to Mongo
// ===================
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// ===================
// Error / Disconnection
// ===================
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

// ===================
// Start server
// ===================
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
