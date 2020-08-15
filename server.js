// Requiring express to set up the server
const express = require("express");
// Require mongoose to connect to the database
const mongoose = require("mongoose");
// Require path to make the absolute path relative
const path = require("path");

var MONGODB_URI = process.env.MONGODB_URI;
// Connect to the database in MongoDB with the specified conditions
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

//Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Setting up the express app
const app = express();

// Let the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Allow the static resources to be served up on the client
app.use(express.static("public"));

// Use api workouts module with the api workout routes
app.use("/api/workouts", require("./routes/workouts.js"));

// Send the exercise html file
app.get("/exercise", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});
// Send the stats html file
app.get("/stats", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

// Listen on PORT 300
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}`)
);
