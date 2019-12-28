
// Dependencies
const express               = require('express');
const app                   = express();
const mongoose              = require('mongoose');
const youtubeController     = require('./controllers/youtube.js');
const db                    = mongoose.connection;

// Middleware
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')); // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!

app.use('/youtube', youtubeController);

// Environment Variables (getting ready for Heroku)
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/youtubeApiCrud';
const PORT = process.env.PORT || 3000;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
  );
  
  // Error / Disconnection
  db.on('error', err => console.log(err.message + ' is Mongod not running?'));
  db.on('disconnected', () => console.log('mongo disconnected'));

// Start server
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});